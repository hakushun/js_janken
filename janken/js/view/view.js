import {DOM} from '../model/class.js'

export class View {
    static viewTitle(game) {
        DOM.gameTitle.textContent = `${game.firstWinTimes}本先取`;
        DOM.gameMessage.textContent = "じゃんけんを始めてください";
    }

    static changeImg(player1, player2) {
        DOM.imgMyHand.setAttribute("src",`./img/${player1.hand}.jpg`);
        DOM.imgCpuHand.setAttribute("src",`./img/${player2.hand}.jpg`);
    }

    static viewResult(player1, player2) {
        if((player1.hand === "stone" && player2.hand === "scissors")
        ||(player1.hand === "scissors" && player2.hand === "paper")
        ||(player1.hand === "paper" && player2.hand === "stone")) {
            DOM.gameMessage.textContent = "あなたの勝ちです！";
            DOM.myStatus.textContent = `${player1.winTimes}勝`;
        }
        if((player2.hand === "stone" && player1.hand === "scissors")
        ||(player2.hand === "scissors" && player1.hand === "paper")
        ||(player2.hand === "paper" && player1.hand === "stone")){
            DOM.gameMessage.textContent = "コンピュータの勝ちです";
            DOM.cpuStatus.textContent = `${player2.winTimes}勝`;
        }
        if(player1.hand === player2.hand){
            DOM.gameMessage.textContent = "あいこです！";
        }
    }

    static viewGameResult(player1, player2, game){
        if(player1.winTimes === game.firstWinTimes || player2.winTimes  === game.firstWinTimes) {
            DOM.submitBtn.setAttribute("disabled", "true");
            DOM.resetBtn.textContent = "もう一度遊ぶ";
        }
        if(player1.winTimes === game.firstWinTimes) {
            DOM.gameMessage.textContent = "おめでとうございます！勝ちました！";
        }
        if(player2.winTimes  === game.firstWinTimes) {
            DOM.gameMessage.textContent = "残念、負けました！";
        }
    }

    static viewWinStatus(player1, player2){
        DOM.myWinRate.textContent = `あなた：通算${player1.totalWinTimes}勝／勝率${player1.winRate}％`
        DOM.cpuWinRate.textContent = `CPU：通算${player2.totalWinTimes}勝／勝率${player2.winRate}％`
    }

    static viewReset(player1, player2, game){
        DOM.gameTitle.textContent = `${game.firstWinTimes}本先取`;
        DOM.gameMessage.textContent = "先取回数を設定してください";
        DOM.myStatus.textContent = `${player1.winTimes}勝`;
        DOM.cpuStatus.textContent = `${player2.winTimes}勝`;
        DOM.imgMyHand.setAttribute("src","./img/stone.jpg");
        DOM.imgCpuHand.setAttribute("src","./img/stone.jpg");
        DOM.resetBtn.textContent = "じゃんけんをリセット";

    }
}