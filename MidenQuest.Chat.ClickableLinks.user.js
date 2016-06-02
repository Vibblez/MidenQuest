// ==UserScript==
// @name         MidenQuest - Clickable Chat Links
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuest.Chat.ClickableLinks.user.js
// @author       Shamadru
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

     var observer = new MutationObserver(function(mutations, obs) {
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length - obs.length; i++) {
                var node = mutation.addedNodes.item(i);
                if(node.innerHTML){
                    node.innerHTML = node.innerHTML.replace(/(goo.gl\/\w{6})|https?:\/\/(\S+(?=<|[^<\S+>]))|(\w+(?:\.com|\.net|\.edu|\.org|\.co|\.uk|\.gov)\S*(?=<|[^<\S+>]))/g, '<a href="http://' + ("$1" + "$2" + "$3") + '" target="_blank">' + ("$1" + "$2" + "$3") + '</a>');
                }
            }
        });
        obs.length = mutations[0].addedNodes.length;
    });
    observer.length = 0;
    observer.observe(document.getElementById("ChatLog"), {
        childList: true,
        characterData: true
    });
	
})();
