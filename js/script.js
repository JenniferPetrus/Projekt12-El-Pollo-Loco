function manage() {
    document.getElementById('manage').classList.add('d-flex');
    document.getElementById('manage').classList.remove('d-none');
    closePolicy();
}

function closeManager() {
    document.getElementById('manage').classList.add('d-none');
    document.getElementById('manage').classList.remove('d-flex');
}

function policy() {
    document.getElementById('policy').classList.add('d-flex');
    document.getElementById('policy').classList.remove('d-none');
    closeManager();
}

function closePolicy() {
    document.getElementById('policy').classList.add('d-none');
    document.getElementById('policy').classList.remove('d-flex');
}

function startGame() {
    document.getElementById('start').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    document.getElementById('gaming').classList.add('d-none');
    document.getElementById('gaming2').classList.add('d-none');
}

function gameOver() {
    document.getElementById('canvas').style.display = "none";
    document.getElementById('game-over').style.display = "block";
    clearAllIntervals();
}

function youLost() {
    document.getElementById('canvas').style.display = "none";
    document.getElementById('you-lost').style.display = "block";
    clearAllIntervals();
}

function restart() {
    document.getElementById('game-over').style.display = "none";
    document.getElementById('you-lost').style.display = "none";
    initGame();
    resetSpeakerImage();
}

function resetSpeakerImage() {
    sound = false;
    document.getElementById('change-speaker').style.backgroundImage = "url('img/audio.png')";
}
function home() {
    window.location.reload();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}