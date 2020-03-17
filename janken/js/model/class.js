export class Player {
    constructor(name){
        this.name = name;
        this.hand = "stone";
        this.winTimes = 0;
        this.totalWinTimes = 0;
        this.winRate = 0;
    }
}

export class Game {
    constructor(){
        this.firstWinTimes = 1;
        this.totalGameTimes = 0;
    }
}

export class DOM {
    static setBtn =document.querySelector('[data-js=set-btn]');
    static inputHand = document.querySelectorAll('[data-js=input-hand]');
    static resetBtn = document.querySelector('[data-js=reset-btn]');
    static submitBtn = document.querySelector('[data-js=submit-btn]');
    static settingTimes = document.querySelector('[data-js=setting-times]');
    static gameTitle = document.querySelector('[data-js=game-title]');
    static gameMessage = document.querySelector('[data-js=game-message]');
    static myStatus = document.querySelector('[data-js=game-myStatus]');
    static cpuStatus = document.querySelector('[data-js=game-cpuStatus]');
    static imgMyHand = document.querySelector('[data-js=my-hand]');
    static imgCpuHand = document.querySelector('[data-js=cpu-hand]');
    static myWinRate = document.querySelector('[data-js=my-winRate]');
    static cpuWinRate = document.querySelector('[data-js=cpu-winRate]');
}