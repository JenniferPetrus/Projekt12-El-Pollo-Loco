class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    SPACE = false;
    D = false;
  
    constructor() {
      this.keyBoardPress();
    }

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

    touchBoardPress() {
  
      document.getElementById('go-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.LEFT = true;
      });

      document.getElementById('go-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.LEFT = false;
      });

      document.getElementById('go-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.RIGHT = true;
      });

      document.getElementById('go-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.RIGHT = false;
      });
  
      document.getElementById('go-jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.SPACE = true;
      });

      document.getElementById('go-jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.SPACE = false;
      });
  
      document.getElementById('go-throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.D = true;
      });
 
      document.getElementById('go-throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.D = false;
      });
    }
  }