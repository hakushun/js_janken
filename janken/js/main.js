import {Player, Game, DOM} from './model/class.js';
import {Controller} from './controller/controller.js';
import {View} from './view/view.js';

document.addEventListener('DOMContentLoaded', function() {
    const my = new Player('my');
    const cpu = new Player('cpu');
    const game = new Game();

    DOM.setBtn.addEventListener('click', () => {
        Controller.setGame(game);
        View.viewTitle(game);
    });

    DOM.submitBtn.addEventListener('click', () => {
        Controller.showHand(my, cpu);
        View.changeImg(my, cpu);
        Controller.judgeHand(my, cpu);
        View.viewResult(my, cpu);
        View.viewGameResult(my, cpu, game);
        Controller.culcWinRate(my, cpu, game);
        View.viewWinStatus(my, cpu);
    });

    DOM.resetBtn.addEventListener('click', () => {
        Controller.resetGame(my, cpu, game);
        View.viewReset(my, cpu, game);
        Controller.initRadio();
    });
});