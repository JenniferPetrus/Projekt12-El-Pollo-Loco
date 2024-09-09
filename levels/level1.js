let level1;

function initLevel() {

level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicks(),
        new Chicks(),
        new Chicks()
    ],
    [
        new Endboss()
    ],
    [
        new Cloud(),
        new Cloud()
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),
    ],
    [
        new Coin(400, 280),
        new Coin(500, 230),
        new Coin(600, 280),
        new Coin(900, 180),
        new Coin(1000, 130),
        new Coin(1100, 180),
        new Coin(1500, 310),
        new Coin(1600, 260),
        new Coin(1700, 220),
        new Coin(1800, 180)
    ],
        [
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 40, 350),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 110, 360),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 130, 355),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 190, 350),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 270, 370),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 590, 350),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 630, 365),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 710, 365),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 840, 360),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 950, 370),
        new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1400, 355),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1540, 360),
        new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1700, 350)
    ]

);
}