// ==UserScript==
// @name         MidenQuest - Dark Theme
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1.2
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuest.Style.Dark.user.js
// @author       Vibblez
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
    }

    addGlobalStyle('body { background-color: #000 !important;  }');
    addGlobalStyle('#ZoneContent { background-color: #555 !important;  }');
    addGlobalStyle('#TitleEmbedded { border-bottom: #000 2px solid;  }');
	addGlobalStyle('#ZoneOptions { background-color: #333 !important;  }');
	addGlobalStyle('#ZoneChat { background-color: #333 !important;  }');
    addGlobalStyle('#InfoZone { border-bottom: 2px solid #000000 !important; }');
    addGlobalStyle('#MiniMap { border: 2px solid #000000 !important; }');
    addGlobalStyle('.ui-widget-content { border: 1px solid #111; background: #909090; color: #333333; }');
    addGlobalStyle('.prgactionwrapper > #prgactiontimer { border: 1px solid #111; background: #909090; color: #333333; }');
    addGlobalStyle('.prgactionwrapper > #prgactiontimer > .ui-widget-header { border: 1px solid #111; background: #646464; color: #333333; }');
	addGlobalStyle('.darkBtn { background: #343434 !important; border: 1px solid #FFFFFF !important; }');
	addGlobalStyle('.darkBtn:hover { background: #454545!important;    border: 1px solid #FFFFFF !important;    color: #FFFFFF !important; }');
    addGlobalStyle('.ui-widget-header { border: 1px solid #000000 !important; background: #555 !important; color: #ffffff; font-weight: bold; font-size: 1em !important; height: 20px !important; margin: 1px; padding-top: 2px; }');
	addGlobalStyle('#KingdomMap { border: 2px #000 solid !important; }');
	addGlobalStyle('#KingdomMap + div { border-left: 2px #000 solid !important; border-right: 2px #000 solid !important; border-bottom: 2px #000 solid !important; }');
})();
