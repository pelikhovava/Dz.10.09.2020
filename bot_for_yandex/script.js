// ==UserScript==
// @name         Bot for yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementsByName('text')[0];
let keywords = ['Гобой', 'Как звучит флейта', 'Кларнет', 'Скрипка', 'Тромбон', 'Валторна'];
let keyword = keywords[getRandom(0,keywords.length)];
let button = document.getElementsByTagName('button')[0];
let i = 0;
let links = document.links;


   let timerId = setInterval(()=>{
       yandexInput.value += keyword[i];
       i++;
       if (i==keyword.length){
           clearInterval(timerId);
           button.click();
       }
   },1000);
if(location.hostname=="xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
    setInterval(()=>{
        let index = getRandom(0,links.length);
        if (getRandom(0,101)>70){
        location.href = 'https://www.yandex.ru/';
        }
        else if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") !=-1){
            links[index].click();
        }
    },getRandom(3000,7000));


}else{
    let nextYandexPage = true;
    for(let i=0; i<links.length;i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            let link = links[i];
            nextYandexPage = false;
            setTimeout(()=>{
                links[i].removeAttribute('target');
                link.click();
            },getRandom(1000,4000));
            break;
        }
    }
    if (document.querySelector('.pager__item_current_yes').innerText=="5"){
        nextYandexPage = false;
        location.href = 'https://www.yandex.ru/';
    }

    if (nextYandexPage){
        setTimeout(()=>{document.querySelectorAll('.pager__item_kind_next')[0].click();},getRandom(1000,4000));
    }
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
