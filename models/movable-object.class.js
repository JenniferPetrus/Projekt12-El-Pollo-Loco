class MovableObject extends DrawableObject {
    speed = 0.25;
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

    applyGravity() {
        setInterval(() => {
            if (this.isAbovGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAbovGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 200;
        }
    }

    isColliding(mo) {
        return (this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom)
    }

    arriveEndStation() {
        return this.x >= 1900;
    }

    collectBottle() {
        this.amountOfBottle += 1;
    }

    collectCoin() {
        this.amountOfCoins += 10;
        if (this.amountOfCoins > 100) {
            this.amountOfCoins = 100;
        }
    }

    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    injured() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    lost() {
        return this.energy = 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;

    }

    jump() {
        this.speedY = 30;
    }
}