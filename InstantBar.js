

    // ==UserScript==
    // @name         YouTube Always Hoverable ProgressBar
    // @namespace    https://github.com/Amadeus-AI
    // @version      1.0
    // @description  Makes progressbar hoverable from the very beginning (also works when paused).
    // @author       AmadeusAI
    // @match        *://www.youtube.com/*
    // @license      MIT
    // ==/UserScript==
    /*jshint esversion: 6 */
     
    var InstantBar =
    {
        css :
    `
    .ytp-chrome-bottom { opacity: 0 }
    .ytp-gradient-bottom { opacity: 0 }
    .html5-video-player:hover .ytp-chrome-bottom{ opacity: 1 }
    .html5-video-player:hover .ytp-gradient-bottom{ opacity: 1 }
     
    `,
     
        apply : function()
        {
            if (typeof GM_addStyle !== "undefined")
            {
                GM_addStyle(InstantBar.css);
            }
            else
            {
                let styleNode = document.createElement("style");
                styleNode.appendChild(document.createTextNode(InstantBar.css));
                (document.querySelector("head") || document.documentElement).appendChild(styleNode);
            }
        },
     
        start : function()
        {
            // To overwrite youtube's default behavior
            setTimeout(InstantBar.apply, 0);
        }
    };
     
    InstantBar.start();

