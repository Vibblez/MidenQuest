// ==UserScript==
// @name         MidenQuest+ - Workload
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1
// @description  MidenQuest workload count in page/tab title ripped from Ryals script.
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuestPlus.workload.user.js
// @author       Ryalane, Vibblez
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

/**
  * Table of Contents
  *
  * Use Ctrl + F
  *
  * Settings:
  *   Settings Handling
  *
  * Page:
  *   Page Handling
  *
  * Server:
  *   Server Messages
  *
  * Work:
  *   Work Handling
  *
  * DOM:
  *   DOM Events
  *
  */


/**********************************
**                               **
**       Settings Handling       **
**                               **
**********************************/

var _Setting = _Setting || {};

/**
  * Gets the version of the script
  * @return {String} Version
  */
_Setting.Version = function () {
  if (typeof GM_info !== "undefined") {
      return GM_info.script.version;
  }
};

/**
  * Retrieves the settings from the LocalStorage
  * @return {String} Settings
  */
_Setting.Load = function () {
  var setting = localStorage.getItem('MidenQuestPlus-settings');

  try {
    setting = setting ? JSON.parse(setting) : {};
  } catch(e) {}

  setting = setting || {};

  return setting;
};

/**
  * Saves the settings to the LocalStorage
  * @return {Void}
  */
_Setting.Save = function () {
  localStorage.setItem('MidenQuestPlus-settings', JSON.stringify(_Setting.settings));
};
/**
  * Holds the settings from/for the LocalStorage
  */
_Setting.settings = _Setting.Load();

_Setting.username;

/**********************************
**                               **
**          Page Handling        **
**                               **
**********************************/

var _Page = _Page || {};

/**
  * Used to make sure none of the DOM watches are enabled until the server has set up the page
  */
_Page.isLoaded = false;

/**
  * Creates a Desktop Notification
  * @param {String} Title
  * @param {String} Body
  * @return {Void}
  * Credits to derivagral
  */
_Page.Notify = function (Title, Body) {
  if (!Notification) {
	   alert('Desktop notifications not available in your browser. Try Chromium.');
     return;
  }
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  } else {
    var notification = new Notification(Title, {
      title: Title,
      body: Body
    });
  }
};

/**
  * Sets the page title
  * @return {Void}
  */
_Page.SetTitle = function (Title) {
  if (Title) {
    document.title = Title;
  }
};

/**
  * Sets up the page
  * @return {Void}
  */
_Page.SetupUI = function (Username) {
  _Page.isLoaded = true;
  _Setting.username = Username;
};

/**********************************
**                               **
**         Server Messages       **
**                               **
**********************************/

var _ServerMessage = _ServerMessage || {};

/**
  * List of all server Options
  * TODO: Finish adding server options
  */
  _ServerMessage.Options = {
  List: { /* List of known options */
    Connect:          "CONNECTED",
    SetName:          "SETNAME",
    SetTitleCount:    "SETTITLECOUNT",
    SetLevel:         "SETLVL",
    SetGold:          "SETGOLD",
    SetElements:      "SETME",
    SetRelics:        "SETRELIC",
    SetGems:          "SETGEM",
    SetKeys:          "SETKEY",
    SetBags:          "SETRESBOX",
    SetKingdom:       "SETKING",
    SetLocation:      "SETLOC",
    GetMinimap:       "LOADMINIMAP",
    GetKingdomMap:    "LOADKINGMINIMAP",
    CD:               "SETCD",
    ChatNotification: "CHATNOTIF",
    Notification:     "NOTIF",
    Captcha:          "CAPTCHA_CHALLENGE",
    LoadLog:          "LOGSTART",
    Log:              "NLOG",
    Message:          "CHATNEW",
    ChatStarted:      "CHATSTART",
    Channel:          "CHANNEL",
    LoadPage:         "LOADPAGE",
    TSData:           "TSLVL",
    TSOdds:           "TSODDS",
    TSBonus:          "TSBONUS",
    SetOre:           "SETORE",
    SetPlant:         "SETPLANT",
    SetWood:          "SETWOOD",
    SetFish:          "SETFISH",
    BoostTimer:       "TIMER",
    OpenChest:        "OPENR" /* It's the box that pops up when you open a bag/key */
  },
    Find: function (a_Command) {
      if (a_Command) {
        // Loop through all the objects in List
        for (var i = 0; i < Object.keys(this.List).length; i++) {
          var key = Object.keys(this.List)[i];
          var value = this.List[key];
          if (a_Command === value) {
            return key;
          } else if (i === Object.keys(this.List).length - 1) {
            return null;
          }
        }
      }
      else {
        return null;
      }
    }
};

/**
  * Finds the option of the Data
  * @param {String} a_Data
  * @return {Void}
  */
_ServerMessage.Compute = function (a_Data) {
  var RawData = a_Data.data;
  var Arr = RawData.split('|');

  var RawCommand = Arr[0];
  var Info = Arr[1];

  var Command = _ServerMessage.Options.Find(RawCommand);

  if (!Command) {
    ServerReceptionHandler(RawData);
  } else {
    if (_Page.isLoaded) {
      switch(Command) {
        case "TSData":
          _Work.HandleWork(RawData);
          ServerReceptionHandler(RawData);
        break;
        case "CD":
          _Work.HandleWork(RawData);
          ServerReceptionHandler(RawData);
        default:
          ServerReceptionHandler(RawData);
        break;
      }
    } else {
      // Since these ones will run the default handler, just put them here
      switch(Command) {
        case "SetName":
          ServerReceptionHandler(RawData);
          _Page.SetupUI(Info);
        break;
        case "CD":
          ServerReceptionHandler(RawData);
          _Page.SetupUI(Info);
        default:
          ServerReceptionHandler(RawData);
        break;
      }
    }
  }
};

/**********************************
**                               **
**         Work Handling         **
**                               **
**********************************/


var _Work = _Work || {};

/**
  * The work object. Still deciding how to handle this stuff
  */
_Work.isWorking = true; // Set it to true by default so its not annoying
_Work.CurrentWorkload = 0;
_Work.MaxWorkload = 0;
_Work.WorkType = "";

/**
  * Handle the Work Logic
  * @return {Void}
  */
_Work.HandleWork = function (Data) {
  var Arr = Data.split('|');
  var Command = Arr[0];

  switch (Command) {
    case "SETCD":
      // Check if the player is working
      if (Arr[3].length > 0) {
        // Set it to true since the player is
        if (!_Work.isWorking) {
          _Work.isWorking = true;
        }

        // Check what the workload is
        if (_Work.isWorking) {
          Workload = _Work.getWorkload(Arr[3]);
          _Work.CurrentWorkload = Workload[0];
          _Work.MaxWorkload = Workload[1];
          _Work.UpdateTitle();
        }
      } else {
        if (_Work.isWorking) {
          _Work.isWorking = false;
          _Work.UpdateTitle();
          _Page.Notify("Done Working!", "You have finished " + _Work.WorkType);
        }
      }
    break;
    case "TSLVL":
      _Work.WorkType = Arr[2];
    break;
  }
};

/**
  * Parse the workload string
  * @param {String} Workload
  * @return {Array} Min Max
  */
_Work.getWorkload = function (Workload) {
  var Min;
  var Max;
  var Arr = (Workload.split(' ')).pop(); // Get rid of the work type
  Min = Arr.split('/')[0];
  Max = Arr.split('/')[1];

// I know it's not efficient, but I'll keep it like this in case I ever need to get it elsewhere
  return [Min, Max];
};

/**
  * Update the title with the workload
  * @return {Void}
  */
_Work.UpdateTitle = function () {
  var Title;
  if (_Work.isWorking) {
    Title = _Work.WorkType + " " + _Work.CurrentWorkload + "/" + _Work.MaxWorkload;
  } else {
    Title = "Done " + _Work.WorkType;
  }
  _Page.SetTitle(Title);
};

/**
  * Listens to the server messages
  * @return {Void}
  */
ws.onmessage = _ServerMessage.Compute;
$.getScript('https://gregjacobs.github.io/Autolinker.js/dist/Autolinker.min.js');

/**
  * Fixes chat input length
  * @return {Void}
  */

    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
    }

    addGlobalStyle('#ZoneChat > div > #txtMessage { width: 800px !important; }');
