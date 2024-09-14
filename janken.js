'use strict';

let kachi = 0;
let make = 0;
let aiko = 0;

const audio = new Audio('パパッ.mp3');

function janken() {
    // プレイヤーの手
    let player = 0;
    let radios = document.querySelectorAll('[name=te]');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            player = radios[i].value;
            break;
        }
    }

    // コンピュータの手
    let cpu = Math.floor(Math.random() * 3);
    let img = document.querySelector('#cpu-img');

    img.src = 'te' + cpu + '-150x150.png';

    // 勝敗判定
    let result = (player - cpu + 3) % 3;
    console.log(player + ':' + cpu);

    // 表示
    let display = document.querySelector('#result');
    let rireki = document.querySelector(`#total`);

    if (result === 0) {
        display.textContent = 'あいこ';
        aiko++;
    } else if (result === 1) {
        display.textContent = '負け!';
        make++;
    } else if (result === 2) {
        display.textContent = '勝ち!';
        kachi++;
    }
    rireki.textContent = `${kachi}勝${make}敗${aiko}あいこ`;    
}