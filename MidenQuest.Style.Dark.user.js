// ==UserScript==
// @name         MidenQuest - Dark Theme
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1.3.6
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
	addGlobalStyle('#ZoneOptions { background-color: #444 !important;  }');
	addGlobalStyle('#ZoneChat { background-color: #444 !important;  }');
    addGlobalStyle('#InfoZone { border-bottom: 2px solid #000000 !important; }');
    addGlobalStyle('#MiniMap { border: 2px solid #000000 !important; }');
    addGlobalStyle('.ui-widget-content { border: 1px solid #111; background: #909090; color: #333333; }');
    addGlobalStyle('.prgactionwrapper > #prgactiontimer { border: 1px solid #111; background: #909090; color: #333333; }');
    addGlobalStyle('.prgactionwrapper > #prgactiontimer > .ui-widget-header { border: 1px solid #111; background: #646464; color: #333333; }');
	addGlobalStyle('.darkBtn { background: #343434 !important; border: 1px solid #FFFFFF !important; }');
	addGlobalStyle('.darkBtn:hover { background: #454545!important;    border: 1px solid #FFFFFF !important;    color: #FFFFFF !important; }');
    addGlobalStyle('.ui-widget-header { border: 1px solid #000000 !important; background: #666 !important; color: #ffffff; font-weight: bold; font-size: 1em !important; height: 20px !important; margin: 1px; padding-top: 2px; }');
	addGlobalStyle('#KingdomMap { border: 2px #000 solid !important; }');
	addGlobalStyle('#KingdomMap + div { border-left: 2px #000 solid !important; border-right: 2px #000 solid !important; border-bottom: 2px #000 solid !important; }');
	addGlobalStyle('.TradeskillSection { color: #999 !important; background-color: #333 !important; }');
	addGlobalStyle('.gmButtonBig { background-color: #858585 !important; color: #000 !important; border: solid 1px #000 !important;}');
	addGlobalStyle('.gmButtonMed { background-color: #858585 !important; color: #000 !important; border: solid 1px #000 !important;}');
    addGlobalStyle('.SearchLinkDiv { background-color: #858585 !important; color: #000 !important; border: solid 1px #000 !important;}');
	addGlobalStyle('#ChatLog { background-color: #333 }');
	addGlobalStyle('#ChatLog > div, #ChatLog > div > span { color: #999 !important; }');
	addGlobalStyle('.TabSel div {     background: #333 !important;    color: #999 !important; }');
	addGlobalStyle('.Tabs li:hover div {     background: #333 !important;    color: #999 !important; }');
	addGlobalStyle('.TabSel:hover div {    background: #333 !important;    color: #999 !important;}');
	addGlobalStyle('.Tabs li { text-shadow: 1px 1px 0 #777 !important; }');
	addGlobalStyle('#InfoZone .InfoLine:nth-of-type(2) {    border-bottom: 2px #000 solid; }');
	addGlobalStyle('#InfoZone .InfoLine div:nth-of-type(1) {    border-right: 0 !important;}');
	//Styling for Vibblez custom nav menu
	addGlobalStyle('.drop_menu li:hover ul { background-color: #555 !important;}');
	addGlobalStyle('.drop_menu li:hover ul li a:hover {    background: #777; }');
	//Basic styling for Derivagrals res tracker
	addGlobalStyle('#resourceLogContainer { padding: 10px; background-color: #333; } ul#resourceLogList li:nth-of-type(1) { padding-bottom: 10px; } #resourceLogList { padding: 10px; } #resourceLogList > li > div > a { color: #999; text-decoration: none; }');
})();
