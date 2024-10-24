class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    amountOfCoins = 0;
    amountOfBottle = 0;
    offsetY = 0;
    offsetX = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    /**
     * Controlls the gravity if the character jump.
     * Decreasing speed above the ground and
     * increasing speed to the ground.
     */

    applyGravity() {
        setInterval(() => {
            if (this.isAbovGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }
    /**     
     * @returns true or false.
     * Checks the start position in y against the is position and
     * ensures that thrown objects simply fall.
     */

    isAbovGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 200;
        }
    }

    /**
     * @param {object} mo is the current enemy.
     * @returns true or false.
     * Check if somebody collided with another figure.
     */

    isColliding(mo) {
        return (this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom)
    }

    /**
     * Character arriving endstation.
     */

    arriveEndStation() {
        return this.x >= 1900;
    }

    /**
     * Collecting Bottle.
     */

    collectBottle() {
        this.amountOfBottle += 1;

    }

    /**
     * Collecting Coin.
     */

    collectCoin() {
        this.amountOfCoins += 10;
        if (this.amountOfCoins > 100) {
            this.amountOfCoins = 100;
        }
    }

    /**
     * When somebody hit.
     */

    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * When somebody injured.
     */

    injured() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * When somebody lost.
     */

    lost() {
        return this.energy = 0;
    }

    /**
     * When somebody getting hurt.
     */

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * When somebodys energy is zero.
     */

    isDead() {
        return this.energy == 0;
    }
    /**
     * Loads different images in the img value,
     * to animate the figures movements.
     * @param {object} images - Current image from the figure.
     */

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * When moving right.
     */

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * When moving left.
     */

    moveLeft() {
        this.x -= this.speed;

    }

    /**
     * When jumping.
     */

    jump() {
        this.speedY = 30;
    }

}