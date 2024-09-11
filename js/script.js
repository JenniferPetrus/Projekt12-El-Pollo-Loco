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

function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    document.getElementById('open-fullscreen').classList.add('d-none');
    document.getElementById('close-fullscreen').classList.remove('d-none');
    enterFullscreen(fullscreen);
}

function closefullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    document.getElementById('open-fullscreen').classList.remove('d-none');
    document.getElementById('close-fullscreen').classList.add('d-none');
    exitFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
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