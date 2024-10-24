class Bottle extends DrawableObject {
    height = 80;
    width = 80;

    offset = {
        top: 15,
        bottom: 25,
        left: 25,
        right: 25,
      };

    /**
     * Sets all start conditions for the object.
     * @param {string} imagePath is the path from the image.
     * @param {number} x is the start coordinate from the image.
     * @param {number} y is the start coordinate from the image.
     */

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x + Math.random() * 500;
        this.y = y;
    }
}