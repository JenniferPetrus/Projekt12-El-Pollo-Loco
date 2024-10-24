class ThrowableObject extends MovableObject {

    IMAGES_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    broken = false;
    hideAttack = false;

        /**
     * Constructor for ThrowableObject class.
     * @param {number} x - is the start coordinate from the image.
     * @param {number} y - is the start coordinate from the image.
     * @param {boolean} otherDirection - Flag indicating the direction of the object.
     * @param {number} world - Position where it starts.
     */

    constructor(x, y, otherDirection, world) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.world = world;
        this.height = 50;
        this.width = 50;
        this.animate();
        this.throw();
    }

    /**
     * Animates the Bottle.
     */

    animate() {
        setInterval(() => {
            if (this.broken == true) {
                this.playAnimation(this.IMAGES_SPLASH);
                
            } else if (this.broken == false) {

                this.playAnimation(this.IMAGES_THROW)
            }

        }, 60);
    }

    /**
     * Speed of Bottle.
     */

    throw() {
        this.speedY = 20;
        this.applyGravity();

        setInterval(() => this.moveBottle(), 25);
    }

    /**
     * Position and speed of Bottle.
     */

    moveBottle() {
        if (this.y >= 370) {
            this.speedY = 0;
            this.x += 10;
            this.y += 10;
            this.broken = true;
        } else if (this.otherDirection) {
            this.x -= 10;
        } else {
            this.x += 10;
        }
    }
}