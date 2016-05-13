// ==UserScript==
// @name         MidenQuestStyle
// @namespace    https://github.com/Vibblez/MidenQuestStyle
// @version      0.2.3.1
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuestStyle.user.js
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
    addGlobalStyle('#MainPanel { height: 100% !important;  }');
    addGlobalStyle('#TopScreen { padding-top: 0px !important; height: 60%; }');
    addGlobalStyle('#ZoneContent { background-color: #555; width: 65% !important; height: 100% !important; border-right: 0 !important; overflow: auto; }');
    addGlobalStyle('.prgActionOverlay { margin-top: -20px; }');
    addGlobalStyle('#TitleEmbedded { height: 3%; border-bottom: 2px solid #000000 !important; }');
    addGlobalStyle('#ZoneOptions { background-color: #333; width: 35%; height: 100%; overflow-y: auto; overflow-x: hidden; }');
    addGlobalStyle('#InfoZone { border-bottom: 2px solid #000000 !important; }');
    addGlobalStyle('#MiniMap { border: 2px solid #000000 !important; }');
    addGlobalStyle('#BottomScreen {  height: 40%; width: 100% }');
    addGlobalStyle('#ZoneChat { height: 100%; width: 100%; border-radius: 0px 0px 0px 0px !imporant; -moz-border-radius: 0px 0px 0px 0px !important; -webkit-border-radius: 0px 0px 0px 0px !important; background-color: #333 !important; padding-top: 0.5% !important; padding-right: 0px !important; }');
    addGlobalStyle('#ZoneChat > .Tabs > ul > li, #ZoneChat > .Tabs > ul > li > div { width: 135px !important; font-size: 0.9em; background-color: #1F1E1E }');
    addGlobalStyle('#ZoneChat > .Tabs > ul > li.TabSel > div { width: 135px !important; font-size: 0.9em; background-color: #3E3C3C }');
    addGlobalStyle('#ChatLog { height: 80%; background-color: #1F1E1E !important; border-radius: 0px 0px 0px 0px !important; -moz-border-radius: 0px 0px 0px 0px !important; -webkit-border-radius: 0px 0px 0px 0px !important; }');
    addGlobalStyle('body > div:nth-child(2) { display: none; }');
    addGlobalStyle('#ChatLog > div, #ChatLog > div > span { color: #9A9A9A !important; }');
    addGlobalStyle('#ChatLog > div { padding: 1.5px }');
    addGlobalStyle('.TradeskillSection { color: #949494; background-color: #333;}');
    addGlobalStyle('.ui-widget-content { border: 1px solid #111; background: #909090; color: #333333; }');
    addGlobalStyle('.prgActionWrapper > #prgActionTimer { border: 1px solid #111; background: #909090; color: #333333; }');
    addGlobalStyle('.prgActionWrapper > #prgActionTimer > .ui-widget-header { border: 1px solid #111; background: #646464; color: #333333; }');

    addGlobalStyle('.ui-widget-header { border: 1px solid #000000; background: #555; color: #ffffff; font-weight: bold; font-size: 1em !important; height: 20px !important; margin: 1px; padding-top: 2px; }');

    $("#TitleEmbedded").html('<div style="text-align: center; margin: 10px auto; clear:both; color:#000; font-size:10pt; padding-top:3px;"><a class="aLink" href="Home.aspx" target="_blank">Home</a>&nbsp;|&nbsp;<a class="aLink" href="Terms.aspx" target="_blank">Terms of Service</a>&nbsp;|&nbsp;<a class="aLink" href="Credits.aspx" target="_blank">Credits</a>&nbsp;|&nbsp;<a class="aLink" href="FAQ.aspx" target="_blank">FAQ</a>&nbsp;|&nbsp;<a class="aLink" href="https://www.reddit.com/r/MidenQuestOnline/wiki/index" target="_blank">Wiki</a>&nbsp;|&nbsp;<a class="aLink" href="https://www.reddit.com/r/MidenQuestOnline/" target="_blank">Subreddit</a></div>');
    $("div.chatShout1 span").removeAttr("style");

    /*
    URL Parser provided by Shamadru
    */

    addGlobalStyle('#ChatLog  a:link { color: cyan; }');
    addGlobalStyle('#ChatLog  a:visited { color: magenta; }');
    addGlobalStyle('#ChatLog  a:hover { color: lime; }');

  //Creates a mutation observer, which triggers the callback each time the chat log changes. Then, a regexp replaces link-like text with actual links in the new nodes (and old ones if it's the first time it's triggered).

  MutationObserver.prototype.length = 0;
  var observer = new MutationObserver(function(mutations, obs) {
      mutations.forEach(function(mutation) {
          for (var i = 0; i < mutation.addedNodes.length - obs.length; i++) {
              var node = mutation.addedNodes.item(i);
              if (node.innerHTML) {
                  node.innerHTML = node.innerHTML.replace(/(https*:\/\/\S+)/ig, '<a href="$1">$1</a>');
              }
          }
      });
      obs.length = mutations[0].addedNodes.length;
  });
  observer.observe(document.getElementById("ChatLog"), {
      childList: true,
      characterData: true
  });
})();
