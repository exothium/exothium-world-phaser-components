import BaseScene from "./BaseScene";

class Table2Scene extends BaseScene {
    constructor(config, RexUIPlugin) {
        super("Table2Scene", config);
    }

    create() {
        this.tittleObject = this.add.text(this.config.width / 2 + 320, this.config.height / 2 - 200, "Table 2", this.fontOptions)
            .setOrigin(0.5, 0.5);

        const ButtonClickMe = this.add.image(this.config.width / 2 + 320, this.config.height / 2, 'button');

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

        buttons.on('button.click', () => {
            this.scene.sleep("StructureScene");
        });

    }
}

export default Table2Scene;