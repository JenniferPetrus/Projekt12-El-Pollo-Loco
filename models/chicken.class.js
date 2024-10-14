class Chicken extends MovableObject {
    width = 60;
    height = 60;
    y = 380;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    offset = {
        top: 0,
        bottom: 0,
        left: 5,
        right: 5,
    };

    isSplicable = false;
    deadSound = false;
    chicken_sound = new Audio('audio/chicken.mp3');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
        
    }

    animate() {
        setInterval(() => this.moveLeft(), 1000 / 60);
        setInterval(() => this.playChicken(), 200);
    }

    playChicken() {
        if (this.isDead()) {
            this.playDead();
            if (this.chickenIsDead()) {
                this.playDeadSound();
            }
            this.deleteFromMap();
        } else {
            this.chickenIsWalking();
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

    chickenIsDead() {
        return !this.deadSound;
    }

    playDeadSound() {
        if (!sound) {
            this.chicken_sound.play();
        }
        this.deadSound = true;
    }
    
    chickenIsWalking() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}