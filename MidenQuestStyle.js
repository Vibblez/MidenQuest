// ==UserScript==
// @name         MidenQuestStyle
// @namespace    https://github.com/Vibblez/MidenQuestStyle
// @version      0.1.4
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

    function generateLayout(){
      var body;
      body = document.getElementsByTagName('body')[0];
      if(!body) { return; }
      body.innerHTML("");
    }

    generateLayout();
})();
