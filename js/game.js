let canvas;
let world;
let keyboard = new Keyboard();
let sound = false;
let music = new Audio('audio/bg-music.mp3');
music.volume = 0.1;

function initBody() {
    music.play(); 
}

function mute() {
    if (!sound) {
        music.pause();
        sound = true;
        document.getElementById('change-speaker').style.backgroundImage = "url('img/mute.png')";
    } else {
        music.play();
        sound = false;
        document.getElementById('change-speaker').style.backgroundImage = "url('img/audio.png')";
    }
}

function goFullscreen() {
    const canvas = document.getElementById('canvas');
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) { // Firefox
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) { // IE/Edge
        canvas.msRequestFullscreen();
    }
}

function initGame() {
    keyboard.touchBoardPress();
    canvas = document.getElementById('canvas');
    startGame();
    initLevel();
    world = new World(canvas, keyboard);
    music.play();
    goFullscreen(); // Vollbild aktivieren
}

// Event Listener für den "Play"-Button
document.getElementById('play-button').addEventListener('click', initGame);
