class DrawableObject {
    x = 120;
    y = 250;
    width = 150;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * @param {string} path - Path of images.
     * Load image of objects.
     */
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    
    /**
     * @param {string} ctx - Image of object 
     * Draw the image in canvas.
     */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
    * @param {Array} arr - Array with many Images path.
    * Load images of the objects.
    */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
}