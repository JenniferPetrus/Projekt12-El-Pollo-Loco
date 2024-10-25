class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();
    enemieBar = new Enemiebar();
    throwableObjects = [];
    oneMoreShot = false;
    throw_sound = new Audio('audio/audio_throw.mp3');
    hurt_sound = new Audio('audio/oof-sound.mp3');
    coins_sound = new Audio('audio/audio_coins.mp3');
    bottle_sound = new Audio('audio/bottle.mp3')
    boss_sound = new Audio('audio/bossChick.mp3');

    lastHurtTime = 0;
    hurtDelay = 1000;

    /**
     * Creates an instance of World.
     * @param {HTMLCanvasElement} canvas - Canvas element.
     * @param {Keyboard} keyboard - Keyboard controller.
     */

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Set the World.
     */

    setWorld() {
        this.character.world = this;
    }

    /**
     * Game loop.
     */

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectingCoins();
            this.collectingBottles();
            this.catchedByBoss();
            this.bossFollowCharacter();
        }, 50);
    }

    /**
     * Checks if throwable objects are thrown.
     */

    checkThrowObjects() {
        if (this.keyboard.D && this.character.amountOfBottle > 0 && !this.oneMoreShot) {
            this.character.lastMove = 0;
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection);
            this.throwableObjects.push(bottle);
            this.attackEndboss();
            this.attackChickenWithBottle();
            this.character.amountOfBottle--;
            this.bottleBar.setPercantage(this.character.amountOfBottle * 10);
            this.oneMoreShot = true;
            if (!sound) {
                this.throw_sound.play();
            }
            setTimeout(() => {
                this.oneMoreShot = false;
            }, 900);
        }
    }


    /**
     * Checks collisions between character and enemies or endboss.
     */

    checkCollisions() {
        this.level.enemies.forEach((enemy, i) => {
            this.level.endboss.forEach(endboss => {
                if (this.characterJumpToKill(enemy) && this.character.speedY < 0) {
                    enemy.lost();
                } else
                    if (this.characterCollidingWithEnemies(enemy, endboss)) {
                        this.characterGetsHurt();
                    }
                if (enemy.isSplicable) {
                    this.level.enemies.splice(i, 1);
                }
            });
        });
    }

    /**
     * @param {string} enemy - One of all enemies.
     * @returns If character jumps to kill enemy.
     */

    characterJumpToKill(enemy) {
        return this.character.isColliding(enemy) && this.character.isAbovGround();
    }

    /**
     * @param {string} enemy - One of all enemies.
     * @param {string} endboss - the endboss.
     * @returns If character is colliding with one of them.
     */

    characterCollidingWithEnemies(enemy, endboss) {
        return this.character.isColliding(enemy) && enemy.energy > 0 || this.character.isColliding(endboss);
    }

    /**
     * When character gets hurt.
     */

    characterGetsHurt() {
        const currentTime = Date.now();
        if (currentTime - this.lastHurtTime >= this.hurtDelay) {
            this.character.hit();
            this.lastHurtTime = currentTime;
            if (!sound) {
                this.hurt_sound.play();
            }
            this.statusBar.setPercantage(this.character.energy);
        }
    }

    /**
     * When character is arrives the Endstation.
     */

    catchedByBoss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.arriveEndStation()) {
                endboss.hadFirstContact = true;
            }
        });
    }

    /**
     * Character is attacking the endboss.
     */

    attackEndboss() {
        this.throwableObjects.forEach(bottle => {
            this.level.endboss.forEach(endboss => {
                let distance = Math.abs(bottle.x - endboss.x);

                if (bottle.isColliding(endboss) || distance <= 200)
                    this.endbossGetsHurt(bottle, endboss);
            });
        });
    }
        
    /**
     * When endboss gets hurt.
     */

    endbossGetsHurt(bottle, endboss) {
        bottle.broken = true;
        endboss.injured();
        if (!sound) {
            this.boss_sound.play();
        }
        this.enemieBar.setPercantage(endboss.energy)
    }

    /**
     * When endboss follows character to attack him.
     */
    
    bossFollowCharacter() {
        let endboss = this.level.endboss[0]
        if (this.character.x > endboss.x + endboss.width) {
            endboss.otherDirection = true;
        } else if (this.character.x < endboss.x) {
            endboss.otherDirection = false;
        }
    }

    /**
     * Character is attacking enemies.
     */

    attackChickenWithBottle() {
        this.throwableObjects.forEach(bottle => {
            this.level.enemies.forEach(enemy => {
                if (bottle.isColliding(enemy)) {
                    bottle.broken = true;
                    enemy.lost();
                }
            });
        });
    }

    /**
     * Character collecting Coins.
     */

    collectingCoins() {
        this.level.coins.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                if (!sound) {
                    this.coins_sound.play();
                }
                this.level.coins.splice(i, 1);
                this.coinBar.setPercantage(this.character.amountOfCoins);
            }
        });
    }

    /**
     * Character collecting Bottles.
     */

    collectingBottles() {
        this.level.bottles.forEach((bottle, i) => {
            if (this.character.isColliding(bottle) && this.character.amountOfBottle < 10) {
                this.character.collectBottle();
                if (!sound) {
                    this.bottle_sound.play();
                }
                this.level.bottles.splice(i, 1);
                this.bottleBar.setPercantage(this.character.amountOfBottle * 10);
            }
        });
    }

    /**
     * Draw the World.
     */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        // ---- Space for fixed Objects ---- //
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.enemieBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

   /**
    * 
    * @param {string} objects - The array that add to the map.
    * Add multiple objects to map.
    */

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * 
     * @param {string} mo - The object that add to the map.
     * Add single object to map.
     */

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flips the image horizontally.
     * @param {Object} mo - The object whose image needs to be flipped.
     */

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }

    /**
     * Reverts the flipped image back to its original state.
     * @param {Object} mo - The object whose image needs to be reverted.
     */

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1
    }
}