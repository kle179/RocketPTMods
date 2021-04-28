// Bobber 2 prefab
class Bobber2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxSplash = scene.sound.add('casting')  // add rocket sfx
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyA.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.isFiring) {
            this.isFiring = true;
            this.sfxSplash.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}