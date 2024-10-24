class Coinbar extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'

    ];

    percentage = 0;

    /**
     * Sets all start conditions for the object.
     */

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 25;
        this.y = 85;
        this.height = 50;
        this.width = 150;
        this.setPercantage(0);
    }

    /**
     * Add 10 percent more to the Bar.
     */

    collect() {
        this.percentage += 10;
    }

    /**
     * @param {number} percantage - Current percantage.
     * Sets the current percentage value. 
     */

    setPercantage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * @returns Shows the matching image to the percentage.
     */

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}