class Endboss extends MovableObject {
    x = 0;
    y = 60;
    width = 250;
    height = 400;
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    offset = {
        top: 20,
        bottom: 40,
        left: 200,
        right: 60,
    };

    hadFirstContact = false;

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0])
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500;
        this.speed = 0.35
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (this.isDead()) {
                this.playDead();
            } else if (this.isHurt()) {
                this.playHurt();
            } else if (this.hadFirstContact) {
                i++;
                this.endbossRaiseAlarm(i);
            } else if (this.energy <= 90) {
                this.endbossAggressive(i);
            } else if (this.energy < 70) {
                this.endbossGoesOnNuts(i);
            }
        }, 300);
    }

    playDead() {
        this.playAnimation(this.IMAGES_DEAD);
        this.speed = 0;
        setTimeout(() => {
            gameOver();
        }, 1500);
    }

    playHurt() {
        return this.playAnimation(this.IMAGES_HURT);
    }

    endbossRaiseAlarm(i) {
        if (i < 4) {
            this.playAnimation(this.IMAGES_ALERT);
        } if (i > 5) {
            this.playAnimation(this.IMAGES_WALKING);
            setInterval(() => {
                if (!this.otherDirection) {
                    this.moveLeft();
                } else {
                    this.moveRight();
                    this.otherDirection = true;
                }
            }, 100);
        } if (i >= 15) {
            this.playAnimation(this.IMAGES_ATTACK);
        }
    }

    endbossAggressive(i) {
        setInterval(() => {
            this.endbossRaiseAlarm(i);
        }, 1000);
    }

    endbossGoesOnNuts(i) {
        setInterval(() => {
            this.endbossRaiseAlarm(i);
        }, 2000);
    }

}