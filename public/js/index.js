const remote = require('electron').remote;
const main = remote.require('./main.js');

window.onload = function() {

    //button for a new game
    var button = document.getElementById('playGame');
    button.addEventListener('click', () => {
        main.startGame();
    }, false);

    var scoresBtn = document.getElementById('refreshScores');
    scoresBtn.addEventListener('click', () => {
        refreshScores();
    })

    refreshScores();

}

function refreshScores() {
    emptyList();

    //sort scores in order
    let scores = main.getScores().sort(function (a, b) {return b - a;});
    var ul = document.getElementById("hiscores");
    for (var i = 0; i < scores.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Pos " + (i + 1) + ": " + scores[i]));
        ul.appendChild(li);
    }
}

function emptyList() {
    var ul = document.getElementById("hiscores");

    ul.innerHTML = '';
}
