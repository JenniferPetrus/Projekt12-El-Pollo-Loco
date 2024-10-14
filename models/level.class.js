class Level {
    enemies;
    endboss;
    clouds;
    backgrounds;
    coins;
    bottles;
    level_end_x = 2250;

    /**
     * Creates an instance of Level.
     * @param {MovableObject[]} enemies - Array of enemies in the level.
     * @param {MovableObject[]} endboss - Array of endboss in the level.
     * @param {MovableObject[]} clouds - Array of clouds in the level.
     * @param {BackroundObject[]} backgroundObjects - Array of background objects in the level.
     * @param {Coin[]} coins - Array of coins in the level.
     * @param {Bottle[]} bottles - Array of bottles in the level.
     */

    constructor(enemies, endboss, clouds, backgrounds, coins, bottles) {
        this.enemies = enemies,
        this.endboss = endboss,
        this.clouds = clouds,
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.bottles = bottles;
    }
}