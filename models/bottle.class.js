class Bottle extends DrawableObject {
    height = 80;
    width = 80;

    offset = {
        top: 15,
        bottom: 25,
        left: 25,
        right: 25,
      };

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x + Math.random() * 500;
        this.y = y;
    }
}