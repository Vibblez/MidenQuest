// ==UserScript==
// @name         MidenQuest - Chat Extender
// @namespace    https://github.com/Vibblez/MidenQuestStyle
// @version      0.1.1
// @description  MidenQuest Chat Extender
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuest.ChatExtender.user.js
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

    addGlobalStyle('#ZoneChat { height: 360px; } #ChatLog { height: 300px; }');

})();
