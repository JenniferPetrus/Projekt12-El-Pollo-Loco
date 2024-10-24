class Coin extends MovableObject {
    height = 130;
    width = 130;
    IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    offset = {
        top: 45,
        bottom: 90,
        left: 45,
        right: 45,
      };

    /**
     * Sets all start conditions for the object.
     * @param {number} x is the start coordinate from the image.
     * @param {number} y is the start coordinate from the image.
     */

    constructor(x, y) {
        super().loadImage('img/8_coin/coin_2.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Animates the Coins.
     */

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }
}