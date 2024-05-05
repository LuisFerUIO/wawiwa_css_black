    // ==UserScript==
    // @name         wawiwa black
    // @namespace    http://tampermonkey.net/
    // @version      2024-05-04
    // @description  try to take over the world!
    // @author       You
    // @match        https://platform.blossom-kc.com/wawiwa_tech/
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=blossom-kc.com
    // @grant        none
    // ==/UserScript==

    (function() {
        'use strict';
        console.log("Colores-----------------------------------------");
        var negro = "#1b1b1b";
        var blanco ="#fff";
        document.getElementById("bchat_bg").style.backgroundColor = negro;
        //document.getElementsByClassName("react_container").style.backgroundColor = negro;

        //document.documentElement.style.setProperty('react_container', negro);
        document.addEventListener('DOMContentLoaded', function() {
        var elementos = document.getElementsByClassName("widget-body");
        console.log("Colores-----------------2------------------------"+elementos);
        console.log("Colores-----------------3------------------------"+elementos.length);
        for (var i = 0; i < elementos.length; i++) {

            elementos[i].style.backgroundColor = negro;  // Cambia "blue" por cualquier color CSS válido
        }
        });

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    var elementos = document.getElementsByClassName('widget-body');
                    console.log('widget-body'+elementos.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos.length; i++) {
                        elementos[i].style.backgroundColor = negro;
                        elementos[i].style.color = blanco;
                    }
                    var elementos1 = document.getElementsByClassName('_clickable');
                    console.log("clickable"+elementos1.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos1.length; i++) {
                        elementos1[i].style.backgroundColor = negro;
                        elementos1[i].style.color = blanco;
                    }
                    var elementos2 = document.getElementsByClassName('_fore');
                    console.log("_fore"+elementos2.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos2.length; i++) {
                        elementos2[i].style.backgroundColor = negro;
                        elementos2[i].style.color = blanco;
                    }
                    var elementos3 = document.getElementsByClassName('_subTitle');
                    console.log("_subTitle"+elementos3.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos3.length; i++) {
                        elementos3[i].style.backgroundColor = negro;
                        elementos3[i].style.color = blanco;
                    }
                    var elementos4 = document.getElementsByClassName('_title');
                    console.log("_title"+elementos4.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos4.length; i++) {
                        elementos4[i].style.backgroundColor = negro;
                        elementos4[i].style.color = blanco;
                    }
                    var elementos5 = document.getElementsByClassName('main-12y3zn1');
                    console.log("main-12y3zn1"+elementos5.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos5.length; i++) {
                        elementos5[i].firstChild.style.backgroundColor = negro;
                        elementos5[i].firstChild.style.color = blanco;
                    }
                    var elementos6 = document.getElementsByClassName('day');
                    console.log("day"+elementos6.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos6.length; i++) {
                        elementos6[i].firstChild.style.backgroundColor = negro;
                        elementos6[i].firstChild.style.color = blanco;
                    }
                    var elementos7 = document.getElementsByClassName('subTitle');
                    console.log("subTitle"+elementos7.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos7.length; i++) {
                        elementos7[i].style.backgroundColor = negro;
                        elementos7[i].style.color = blanco;
                    }
                    var elementos8 = document.getElementsByClassName('react_container');
                    console.log("subTitle"+elementos8.length);  // Verificar cuántos elementos se encuentran después de cada mutación
                    for (var i = 0; i < elementos8.length; i++) {
                        elementos8[i].style.backgroundColor = negro;
                        elementos8[i].style.color = blanco;
                    }
                }
            });
        });





        observer.observe(document.body, {
            childList: true,
            subtree: true
        });


    })();

