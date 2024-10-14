class Chicks extends MovableObject {
    width = 50;
    height = 50;
    y = 390;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    offset = {
        top: 0,
        bottom: 0,
        left: 5,
        right: 5,
    };

    isSplicable = false;
    deadSound = false;
    chick_sound = new Audio('audio/chick.mp3');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveRight();
            this.otherDirection = true;
        }, 1000 / 60);

        setInterval(() => this.playChick(), 200);
    }

    playChick() {
        if (this.isDead()) {
            this.playDead();
            if (this.chickIsDead()) {
                this.playDeadSound();
            }
            this.deleteFromMap();
        } else {
            this.chickIsWalking();
        }
    }

    playDead() {
        this.playAnimation(this.IMAGES_DEAD);
        this.speed = 0;
    }

    deleteFromMap() {
        setTimeout(() => {
            this.isSplicable = true;
        }, 250);
    }

    chickIsDead() {
        return !this.deadSound;
    }

    playDeadSound() {
        if (!sound) {
            this.chick_sound.play();
        }
        this.deadSound = true;
    }

    chickIsWalking() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}