//Kylien Le, Rocket PatrolMods 4/28/2021/ It took me about 9-10 hours to figure out the project
//I've implemented a background music to Play Scene
//I allowed the player to control the rocket after it being fired.
//I created a new animated sprite for the SpaceShip enemies
//I changed the game's artwork making a stream of water with fish and a bobber to create a theme about fishing.
//I changed the sfx to make
//And I implemented a two player mode. There are two bobbers which you are teaming up with another player to get more points
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT,keyA, keyD, keySPACE;