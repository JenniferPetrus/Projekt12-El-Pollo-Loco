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

    constructor(x, y) {
        super().loadImage('img/8_coin/coin_2.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }
}