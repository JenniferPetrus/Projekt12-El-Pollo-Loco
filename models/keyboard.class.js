class Keyboard {
  LEFT = false;
  RIGHT = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.keyBoardPress();
  }

  /**
   * Key down events for keyboard inputs.
   * @param {KeyboardEvent} event - The keyboard event.
   */

  keyBoardPress() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode == 32) {
        keyboard.SPACE = true;
      }
      if (event.keyCode == 37) {
        keyboard.LEFT = true;
      }
      if (event.keyCode == 39) {
        keyboard.RIGHT = true;
      }
      if (event.keyCode == 40) {
        keyboard.DOWN = true;
      }
      if (event.keyCode == 68) {
        keyboard.D = true;
      }
    });


    /**
     * Key up events for keyboard inputs.
     * @param {KeyboardEvent} event - The keyboard event.
     */


    window.addEventListener('keyup', (event) => {
      if (event.keyCode == 32) {
        keyboard.SPACE = false;
      }
      if (event.keyCode == 37) {
        keyboard.LEFT = false;
      }
      if (event.keyCode == 39) {
        keyboard.RIGHT = false;
      }
      if (event.keyCode == 40) {
        keyboard.DOWN = false;
      }
      if (event.keyCode == 68) {
        keyboard.D = false;
      }
    });
  }

  /**
   * Touchboard function
   */

  touchBoardPress() {

    /**
     * Touch start event for left button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-left').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.LEFT = true;
    });

    /**
     * Touch end event for left button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-left').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.LEFT = false;
    });

    /**
     * Touch start event for right button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-right').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.RIGHT = true;
    });

    /**
     * Touch end event for right button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-right').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.RIGHT = false;
    });

    /**
     * Touch start event for space button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-jump').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.SPACE = true;
    });

    /**
     * Touch end event for space button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-jump').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.SPACE = false;
    });

    /**
   * Touch start event for throw button.
   * @param {TouchEvent} e - The touch event.
   */

    document.getElementById('go-throw').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.D = true;
    });

    /**
     * Touch end event for throw button.
     * @param {TouchEvent} e - The touch event.
     */

    document.getElementById('go-throw').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.D = false;
    });
  }
}