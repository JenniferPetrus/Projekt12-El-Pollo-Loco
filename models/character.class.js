class Character extends MovableObject {
    x = 0;
    y = 200;
    width = 130;
    height = 250;
    speed = 10;
    lastMove = 0;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_INACTIVE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_SLEEP = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    world;

    offset = {
        top: 80,
        bottom: 10,
        left: 10,
        right: 10,
    };

    walking_sound = new Audio('audio/walking.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    throwing_sound = new Audio('audio/audio_throw.mp3');
    loosing_sound = new Audio('audio/game-over-sound.mp3');
    snoring_sound = new Audio('audio/snore.mp3');

    /**
     * Sets all start conditions for the object.
     */

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_INACTIVE);
        this.loadImages(this.IMAGES_SLEEP);
        this.applyGravity();
        this.animate();
        this.passive();
        this.stand();
        this.playDead();
    }

    /**
     * Animates the Character.
     */

    animate() {
        this.walking_sound.pause();
        setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.playCharacter(), 50);
        setInterval(() => this.jumpCharacter(), 100);
    }

    /**
     * Moves the Character in the desired direction.
     */

    moveCharacter() {
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveLeft())
            this.moveLeft();
        if (this.canJump())
            this.jump();
        this.world.camera_x = -this.x + 100;
    }

    /**
     * 
     * @returns when the right button is pressed.
     */

    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    /**
     * The Character moves right.
     */

    moveRight() {
        super.moveRight();
        this.snoring_sound.pause();
        this.otherDirection = false;
        this.lastMove = 0;
        if (!sound && !this.isAbovGround()) {
            this.walking_sound.play();
        }
    }

    /**
     * 
     * @returns when the left button is pressed.
     */

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0;
    }

    /**
     * The Character moves left.
     */

    moveLeft() {
        super.moveLeft();
        this.snoring_sound.pause();
        this.otherDirection = true;
        this.lastMove = 0;
        if (!sound && !this.isAbovGround()) {
            this.walking_sound.play();
        }
    }

    /**
     * 
     * @returns when the space button is pressed.
     */

    canJump() {
        return this.world.keyboard.SPACE && !this.isAbovGround();
    }

    /**
     * The Character jumps.
     */

    jump() {
        super.jump();
        this.snoring_sound.pause();
        this.lastMove = 0;
        if (!sound) {
            this.jumping_sound.play();
        }
    }

    /**
     * Shows the animation.
     */

    playCharacter() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }

    /**
     *  Shows the animation when character jump.
     */

    jumpCharacter() {
        if (this.isAbovGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        }
    }

    /**
     * Sets the time for beeing passive.
     */

    passive() {
        setInterval(() => {
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.SPACE && !this.world.keyboard.D) {
                this.lastMove++;
            }
        }, 1000);
    }

    /**
     * Plays the animation when the character is inactive.
     */

    stand() {
        setInterval(() => {
            if (this.lastMove > 1) {
                this.playAnimation(this.IMAGES_INACTIVE);
            } if (this.lastMove > 10) {
                this.playAnimation(this.IMAGES_SLEEP);
                if (!sound) {
                    this.snoring_sound.play();
                } else {
                    this.snoring_sound.pause();
                }
            }
        }, 1000);
    }

    /**
     * Plays the animation when the character is dead and shows the lost Screen.
     */

    playDead() {
        setInterval(() => {
            if (this.isDead()) {
                this.snoring_sound.pause();
                this.playAnimation(this.IMAGES_DEAD);
                if (!sound) {
                    this.loosing_sound.play();
                }
                setTimeout(() => {
                    youLost();
                }, 1500);
            }
        }, 200);
    }

}