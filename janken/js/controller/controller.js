import {DOM} from '../model/class.js'

export class Controller {
    static setGame(game) {
        game.firstWinTimes = Number(DOM.settingTimes.value);
        DOM.submitBtn.removeAttribute('disabled');
        DOM.setBtn.setAttribute("disabled", "true");
    }
    static showHand(player1, player2){
        for (let i = 0; i < 3; i +=1 ){
            if (DOM.inputHand[i].checked){
                player1.hand = DOM.inputHand[i].value;
                // DOM.imgMyHand.setAttribute("src",`./img/${player1.hand}.jpg`);
            }
        }
        let num = Math.floor(Math.random() * 3);
        if(num === 0) {
            player2.hand = "stone";
            // DOM.imgCpuHand.setAttribute("src",`./img/${player2.hand}.jpg`);
        }
        if(num === 1) {
            player2.hand = "scissors";
            // DOM.imgCpuHand.setAttribute("src",`./img/${player2.hand}.jpg`);
        }
        if(num === 2) {
            player2.hand = "paper";
            // DOM.imgCpuHand.setAttribute("src",`./img/${player2.hand}.jpg`);
        }
    }

    static _incrementTimes(player) {
        DOM.totalGameTimes += 1;
        player.winTimes += 1;
        player.totalWinTimes += 1;
    }

    static judgeHand(player1, player2) {
        if((player1.hand === "stone" && player2.hand === "scissors")
        ||(player1.hand === "scissors" && player2.hand === "paper")
        ||(player1.hand === "paper" && player2.hand === "stone")) {
            this._incrementTimes(player1);
        }
        if((player2.hand === "stone" && player1.hand === "scissors")
        ||(player2.hand === "scissors" && player1.hand === "paper")
        ||(player2.hand === "paper" && player1.hand === "stone")){
            this._incrementTimes(player2);
        }
    }

    static culcWinRate(player1, player2, game) {
        player1.winRate = Math.round(player1.totalWinTimes / game.totalGameTimes *10000) / 100;
        player2.winRate = Math.round(player2.totalWinTimes / game.totalGameTimes *10000) / 100;
        console.log(player1.winRate);
        console.log(player2.winRate);
    }

    static resetGame(player1, player2, game){
        player1.hand = "stone";
        player2.hand = "stone";
        player1.winTimes = 0;
        player2.winTimes = 0;
        game.firstWinTimes = 1;
        DOM.submitBtn.setAttribute("disabled", "true");
        DOM.setBtn.removeAttribute('disabled');

    }

    static initRadio() {
        DOM.inputHand.forEach (elem => {
            elem.checked = false;
        });
        DOM.inputHand[0].checked = true;
    }
}