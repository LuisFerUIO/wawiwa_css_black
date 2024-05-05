    // ==UserScript==
    // @name         wawiwa black
    // @namespace    http://tampermonkey.net/
    // @version      2024-05-04
    // @description  try to take over the world!
    // @author       ferchonet@gmai.com
    // @match        https://platform.blossom-kc.com/wawiwa_tech/
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=blossom-kc.com
    // @grant        none
    // ==/UserScript==

    (function() {
        'use strict';

        (function() {
            'use strict';
            const negro = "#1b1b1b", blanco = "#fff";

            function aplicarEstilo(elementos, fondo, texto) {
                for (let i = 0; i < elementos.length; i++) {
                    elementos[i].style.backgroundColor = fondo;
                    elementos[i].style.color = texto;
                }
            }

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.type === 'childList') {
                        const clases = ['widget-body', '_clickable', '_fore', '_subTitle', '_title', 'main-12y3zn1', 'day', 'subTitle', 'react_container'];
                        clases.forEach(clase => {
                            const elementos = document.getElementsByClassName(clase);
                            console.log(`${clase} count: ${elementos.length}`);
                            aplicarEstilo(elementos, negro, blanco);
                        });
                    }
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        })();


    })();

