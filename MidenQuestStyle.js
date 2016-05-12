// ==UserScript==
// @name         MidenQuestStyle
// @namespace    https://github.com/Vibblez/MidenQuestStyle
// @version      0.1.3
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuestStyle.js
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

    addGlobalStyle('body { background-color: #fff !important;  }');
    addGlobalStyle('#ZoneChat > .Tabs > ul > li { width: 135px !important; font-size: 0.9em;  }');
})();
