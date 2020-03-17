document.addEventListener('DOMContentLoaded', function() {
    const setBtn = document.querySelector('[data-js=set-btn]');
    const inputHand = document.querySelectorAll('[data-js=input-hand]');
    const resetBtn = document.querySelector('[data-js=reset-btn]');
    const submitBtn = document.querySelector('[data-js=submit-btn]');
    const gameTitle = document.querySelector('[data-js=game-title]');
    const gameMessage = document.querySelector('[data-js=game-message]');
    const myStatus = document.querySelector('[data-js=game-myStatus]');
    const cpuStatus = document.querySelector('[data-js=game-cpuStatus]');
    const imgMyHand = document.querySelector('[data-js=my-hand]');
    const imgCpuHand = document.querySelector('[data-js=cpu-hand]');
    const settingTimes = document.querySelector('[data-js=setting-times]');
    // const myWinRate = document.querySelector('[data-js=my-winRate]');
    // const cpuWinRate = document.querySelector('[data-js=cpu-winRate]');


    let firstWinTimes = 1;
    let myHand;
    let cpuHand;
    let myWinTimes = 0;
    let cpuWinTimes = 0;
    let myTotalWinTimes = 0;
    let cpuTotalWinTimes = 0;
    let totalGameTimes = 0;

    function setGame() {
        firstWinTimes = Number(settingTimes.value);
        submitBtn.removeAttribute('disabled');
        setBtn.setAttribute("disabled", "true");
        gameTitle.textContent = `${firstWinTimes}本先取`;
        gameMessage.textContent = "じゃんけんを始めてください";
    }

    function showMyHnad() {
        for (let i = 0; i < 3; i +=1 ){
            if (inputHand[i].checked){
                myHand = inputHand[i].value;
                imgMyHand.setAttribute("src",`./img/${myHand}.jpg`);
            }
        }
    }

    function showCpuHnad() {
        let num = Math.floor(Math.random() * 3);
        if(num === 0) {
            cpuHand = "stone";
            imgCpuHand.setAttribute("src",`./img/${cpuHand}.jpg`);
        }
        if(num === 1) {
            cpuHand = "scissors";
            imgCpuHand.setAttribute("src",`./img/${cpuHand}.jpg`);
        }
        if(num === 2) {
            cpuHand = "paper";
            imgCpuHand.setAttribute("src",`./img/${cpuHand}.jpg`);
        }
    }

    // function culcWinRate(winTotalTimes, totalGameTimes) {
    //     let winRate = Math.round((winTotalTimes/totalGameTimes)*10000)/100;
    //     return winRate;
    // }

    function judgeHand() {
        if((myHand === "stone" && cpuHand === "scissors")
        ||(myHand === "scissors" && cpuHand === "paper")
        ||(myHand === "paper" && cpuHand === "stone")) {
            myWinTimes += 1;
            myTotalWinTimes += 1;
            totalGameTimes +=1;
            gameMessage.textContent = "あなたの勝ちです！";
            myStatus.textContent = `${myWinTimes}勝`;
            // myWinRate.textContent = `あなた：通算${myTotalWinTimes}勝／勝率${culcWinRate(myTotalWinTimes, totalGameTimes)}％`
        }
        if((cpuHand === "stone" && myHand === "scissors")
        ||(cpuHand === "scissors" && myHand === "paper")
        ||(cpuHand === "paper" && myHand === "stone")){
            cpuWinTimes += 1;
            cpuTotalWinTimes += 1;
            totalGameTimes +=1;
            gameMessage.textContent = "コンピュータの勝ちです！";
            cpuStatus.textContent = `${cpuWinTimes}勝`;
            // cpuWinRate.textContent = `CPU：通算${cpuTotalWinTimes}勝／勝率${culcWinRate(cpuTotalWinTimes, totalGameTimes)}％`
        }
        if(myHand === cpuHand){
            gameMessage.textContent = "あいこです！";
        }
    }

    function judgeGame(){
        if(myWinTimes === firstWinTimes) {
            gameMessage.textContent = "おめでとうございます！勝ちました！";
            submitBtn.setAttribute("disabled", "true");
            resetBtn.textContent = "もう一度遊ぶ";
        }
        if(cpuWinTimes  === firstWinTimes) {
            gameMessage.textContent = "残念、負けました！";
            submitBtn.setAttribute("disabled", "true");
            resetBtn.textContent = "もう一度遊ぶ";
        }
    }

    function resetGame() {
        myHand = "";
        cpuHand = "";
        myWinTimes = 0;
        cpuWinTimes = 0;
        firstWinTimes = 1;
        gameTitle.textContent = `${firstWinTimes}本先取`;
        gameMessage.textContent = "先取回数を設定してください";
        myStatus.textContent = `${myWinTimes}勝`;
        cpuStatus.textContent = `${cpuWinTimes}勝`;
        imgMyHand.setAttribute("src","./img/stone.jpg");
        imgCpuHand.setAttribute("src","./img/stone.jpg");
        resetBtn.textContent = "じゃんけんをリセット";
        submitBtn.setAttribute("disabled", "true");
        setBtn.removeAttribute('disabled');
    }

    function initRadio() {
        inputHand.forEach (elem => {
            elem.checked = false;
        });
        inputHand[0].checked = true;
    }

    setBtn.addEventListener('click', () => {
        setGame();
    });

    submitBtn.addEventListener('click', () => {
        showMyHnad();
        showCpuHnad();
        judgeHand();
        judgeGame();
    });

    resetBtn.addEventListener('click', () => {
        resetGame();
        initRadio();
    });
});