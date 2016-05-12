// ==UserScript==
// @name         MidenQuestStyle
// @namespace    https://github.com/Vibblez/MidenQuestStyle
// @version      0.2
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuestStyle.js
// @author       Vibblez
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
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

    addGlobalStyle('.body { background-color: #fff !important;  }');
})();
