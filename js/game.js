let canvas;
let world;
let keyboard = new Keyboard();
sound = false;
music = new Audio('audio/bg-music.mp3');
music.volume = 0.1;

/**
 * Pauses the Backgroundmusic.
 */

function initBody() {
    music.play(); 
}

/**
 * Switches the background music & sound.
 */

function mute() {
    if (!sound) {
        this.music.pause();
        this.sound = true;
        document.getElementById('change-speaker').style.backgroundImage = "url('img/mute.png')";
    } else if (sound) {
        this.music.play();
        this.sound = false;
        document.getElementById('change-speaker').style.backgroundImage = "url('img/audio.png')";
    }
}

/**
 * Initializes the touch elements, the canvas & starts the Game.
 */

function initGame() {
    keyboard.touchBoardPress();
    canvas = document.getElementById('canvas');
    startGame();
    initLevel();
    world = new World(canvas, keyboard);
    this.music.play();
}