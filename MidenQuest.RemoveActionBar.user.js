// ==UserScript==
// @name         MidenQuest Remove Action Bar
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuest.RemoveActionBar.user.js
// @author       Vibblez
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    
    $("#ActionCD").html('\<span id="prgActionOverlay"></span>');

     function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }

        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('#ActionCD { margin-top: 5px !important; }');    
})();