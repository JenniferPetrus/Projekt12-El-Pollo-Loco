/**
 * Displays the directions.
 */

function manage() {
    document.getElementById('manage').classList.add('d-flex');
    document.getElementById('manage').classList.remove('d-none');
    closePolicy();
}

/**
 * Closes the directions.
 */

function closeManager() {
    document.getElementById('manage').classList.add('d-none');
    document.getElementById('manage').classList.remove('d-flex');
}

/**
 * Displays the policy.
 */

function policy() {
    document.getElementById('policy').classList.add('d-flex');
    document.getElementById('policy').classList.remove('d-none');
    closeManager();
}

/**
 * Closes the policy.
 */

function closePolicy() {
    document.getElementById('policy').classList.add('d-none');
    document.getElementById('policy').classList.remove('d-flex');
}

/**
 * Starts the game.
 */

function startGame() {
    document.getElementById('start').style.display = "none";
    document.getElementById('canvas').style.display = "block";
    document.getElementById('gaming').classList.add('d-none');
    document.getElementById('gaming2').classList.add('d-none');
}

/**
 * Displays the game over screen.
 */

function gameOver() {
    document.getElementById('canvas').style.display = "none";
    document.getElementById('game-over').style.display = "block";
    clearAllIntervals();
}

/**
 * Displays the lost over screen.
 */

function youLost() {
    document.getElementById('canvas').style.display = "none";
    document.getElementById('you-lost').style.display = "block";
    clearAllIntervals();
}

/**
 * Restart the game.
 */

function restart() {
    document.getElementById('game-over').style.display = "none";
    document.getElementById('you-lost').style.display = "none";
    initGame();
    resetSpeakerImage();
}

/**
 * Changes the speaker image
 */

function resetSpeakerImage() {
    sound = false;
    document.getElementById('change-speaker').style.backgroundImage = "url('img/audio.png')";
}

/**
 * Refresh the page.
 */

function home() {
    window.location.reload();
}

/**
 * Stops the game.
 */

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}