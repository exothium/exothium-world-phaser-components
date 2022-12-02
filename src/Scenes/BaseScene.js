import Phaser from "phaser";

class BaseScene extends Phaser.Scene {
    constructor(Key, config) {
        super(Key);
        this.config = config;
        this.screenCenter = [config.width / 2, config.height / 2];
        this.fontSize = 34;
    }
}

export default BaseScene;