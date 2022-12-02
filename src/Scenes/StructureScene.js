import BaseScene from "./BaseScene";

class StructureScene extends BaseScene {
    constructor(config) {
        super("StructureScene", config);
    }

    create() {
        //Background Image
        this.add.image(...this.screenCenter, 'background');

        //text window
        this.add.image(this.config.width / 2 / 2, this.config.height / 2, 'Text_Window').scale = 1.5;
        this.add.image(this.config.width / 2 + 320, this.config.height / 2, 'Text_Window').scale = 1.5;

        const ButtonClickMe = this.add.image(this.config.width / 2 / 2, this.config.height / 2, 'button');
        console.log("StructureScene IS WORKING");
        const buttons = this.rexUI.add.buttons({
            orientation: 0,
            background: ButtonClickMe,
            buttons: [
                ButtonClickMe,
            ],
            expand: false,
            align: undefined,
            click: {
                mode: 'pointerup',
                clickInterval: 100
            },
        });

        //Button Fuction
        buttons.on('button.click', () => {
            //alert("asdasd");
            this.scene.launch("Table2Scene");
        });
    }
}


export default StructureScene;