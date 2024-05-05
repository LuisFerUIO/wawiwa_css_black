    // ==UserScript==
    // @name         wawiwa black
    // @namespace    http://tampermonkey.net/
    // @version      2024-05-04
    // @description  try to take over the world!
    // @author       ferchonet@gmail.com
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
                        const clases = ['widget-body', '_clickable', '_fore', '_subTitle', '_title', 'main-12y3zn1', 'day', 'subTitle', 'react_container', 'main-hj1q89','_btn','_children','_main_narrow','_main_op','container-header','main-12y3zn1','main-1msxvtn','SidePanel','item-name','main-uukuit','inner-drawer','inner-drawer','main-1rr7s6m','SideCont','MainCol','.main-vmx6u8','main-1digpu7'];
                        clases.forEach(clase => {
                            const elementos = document.getElementsByClassName(clase);
                            console.log(`${clase} count: ${elementos.length}`);
                            aplicarEstilo(elementos, negro, blanco);
                        });
                        /*-------------------------------------------------------------*/
                        var elementos5 = document.getElementsByClassName('_main_narrow');
                        console.log("_main_op"+elementos5.length);
                        for (var i = 0; i < elementos5.length; i++) {
                            console.log("_main_op = hijos ="+i);
                            elementos5[i].parentNode.style.backgroundColor = negro;
                            elementos5[i].parentNode.style.color = blanco;
                            const negro2="#1b1b1b !important";
                            console.log(negro+'*******************');
                            console.log(negro2+'/////////////////');
                        }
                        document.getElementById("html_theme").style.backgroundColor = negro;
                    }
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        })();


    })();

