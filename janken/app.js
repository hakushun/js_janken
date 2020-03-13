document.addEventListener('DOMContentLoaded', function() {
    const inputHand = document.querySelectorAll('[data-js=input-hand]');
    const resetBtn = document.querySelector('[data-js=reset-btn]');
    const submitBtn = document.querySelector('[data-js=submit-btn]');
    const gameTitle = document.querySelector('[data-js=game-title]');
    const gameMessage = document.querySelector('[data-js=game-message]');
    const myStatus = document.querySelector('[data-js=game-myStatus]');
    const cpuStatus = document.querySelector('[data-js=game-cpuStatus]');
    const imgMyHand = document.querySelector('[data-js=my-hand]');
    const imgCpuHand = document.querySelector('[data-js=cpu-hand]');

    let myHand;
    let cpuHand;
    let myWinTimes = 0;
    let cpuWinTimes = 0;
    let gameTimes = 1;

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

    function judgeHand() {
        if((myHand === "stone" && cpuHand === "scissors")
        ||(myHand === "scissors" && cpuHand === "paper")
        ||(myHand === "paper" && cpuHand === "stone")) {
            myWinTimes += 1;
            gameMessage.textContent = "あなたの勝ちです！";
            myStatus.textContent = `${myWinTimes}勝`;
        }
        if((cpuHand === "stone" && myHand === "scissors")
        ||(cpuHand === "scissors" && myHand === "paper")
        ||(cpuHand === "paper" && myHand === "stone")){
            cpuWinTimes += 1;
            gameMessage.textContent = "コンピュータの勝ちです！";
            cpuStatus.textContent = `${cpuWinTimes}勝`;
        }
        if(myHand === cpuHand){
            gameMessage.textContent = "あいこです！";
        }
        gameTitle.textContent = `${gameTimes}回戦`;
        gameTimes += 1;

    }

    function judgeGame(){
        if(myWinTimes === 2) {
            gameMessage.textContent = "コンピュータに勝ちました！";
            submitBtn.setAttribute("disabled", "true");
            resetBtn.textContent = "もう一度遊ぶ";
        }
        if(cpuWinTimes === 2) {
            gameMessage.textContent = "コンピュータに負けました！";
            submitBtn.setAttribute("disabled", "");
            resetBtn.textContent = "もう一度遊ぶ";
        }
    }

    function resetGame() {
        myHand = "";
        cpuHand = "";
        myWinTimes = 0;
        cpuWinTimes = 0;
        gameTimes = 1;
        gameTitle.textContent = `${gameTimes}回戦`;
        gameMessage.textContent = "じゃんけんを始めてください";
        myStatus.textContent = `${myWinTimes}勝`;
        cpuStatus.textContent = `${cpuWinTimes}勝`;
        imgMyHand.setAttribute("src","./img/stone.jpg");
        imgCpuHand.setAttribute("src","./img/stone.jpg");
        submitBtn.removeAttribute("disabled");
        resetBtn.textContent = "じゃんけんをリセット";
    }

    function initRadio() {
        inputHand.forEach (elem => {
            elem.checked = false
        });
        inputHand[0].checked = true;

    }

    submitBtn.addEventListener('click', ()=> {
        showMyHnad();
        showCpuHnad();
        judgeHand();
        judgeGame();
        initRadio();
    });

    resetBtn.addEventListener('click', ()=> {
        resetGame();
        initRadio();
    });
});