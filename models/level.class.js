class Level {
    enemies;
    endboss;
    clouds;
    backgrounds;
    coins;
    bottles;
    level_end_x = 2250;

    constructor(enemies, endboss, clouds, backgrounds, coins, bottles) {
        this.enemies = enemies,
        this.endboss = endboss,
        this.clouds = clouds,
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.bottles = bottles;
    }
}