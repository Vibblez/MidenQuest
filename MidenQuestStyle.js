// ==UserScript==
// @name         MidenQuestStyle
// @namespace    https://github.com/Vibblez/MidenQuestStyle
// @version      0.2.1
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuestStyle.js
// @author       Vibblez
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js
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
    addGlobalStyle('#ZoneContent { background-color: #555 }');
    addGlobalStyle('.prgActionOverlay { margin-top: -20px; }');
    addGlobalStyle('#ZoneOptions { background-color: #333 }');
    addGlobalStyle('#TitleEmbedded { height: 20px; border-bottom: 2px solid #000000 !important; margin-bottom: 5px !important; }');
    addGlobalStyle('#ZoneOptions { background-color: #333 }');
    addGlobalStyle('#InfoZone { border-bottom: 2px solid #000000 !important; }');
    addGlobalStyle('#MiniMap { border: 2px solid #000000 !important; }');
    addGlobalStyle('#ZoneChat { height: 330px; border-radius: 0px 0px 10px 10px; -moz-border-radius: 0px 0px 10px 10px; -webkit-border-radius: 0px 0px 10px 10px; background-color: #333 !important; }');
    addGlobalStyle('#ZoneChat > .Tabs > ul > li, #ZoneChat > .Tabs > ul > li > div { width: 135px !important; font-size: 0.9em; background-color: #1F1E1E }');
    addGlobalStyle('#ZoneChat > .Tabs > ul > li.TabSel > div { width: 135px !important; font-size: 0.9em; background-color: #3E3C3C }');
    addGlobalStyle('#ChatLog { height: 270px; background-color: #1F1E1E !important; border-radius: 0px 0px 10px 10px; -moz-border-radius: 0px 0px 10px 10px; -webkit-border-radius: 0px 0px 10px 10px; }');
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
})();
