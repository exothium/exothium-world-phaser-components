import BaseScene from "./BaseScene";

class InputTextScene extends BaseScene {
    constructor(config) {
        super("InputTextScene", config);
    }

    create() {
        //Tittle Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 - 200, 'Input Text', {
            fontSize: '40px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);
        const text = this.add.text(this.config.width / 2 + 200, this.config.height / 2 + 200, 'Write Something', /*{ fixedWidth: 150, fixedHeight: 36 }*/)
        text.setOrigin(0.5, 0.5)
        const text1 = this.add.text(this.config.width / 2, this.config.height / 2, "...", /*{ fixedWidth: 150, fixedHeight: 36 }*/)
        text.setInteractive().on('pointerdown', () => {
            this.rexUI.edit(text)
        })
        const editor = this.rexUI.edit(text)
        //Create a button to confirm the text and replace the text1 with the text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 + 300, 'Confirm', {
            fontSize: '40px',
            fill: '#FFFFFF'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => {
            text1.setText(text.text)
        })
        //Create a button to cancel the text and replace the text1 with the text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 + 400, 'Cancel', {
            fontSize: '40px',
            fill: '#FFFFFF'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => {
            text.setText(text1.text)
        })
        this.input.keyboard.on('keydown_ENTER', function (event) {
            Console.log("ENTER IS PRESSED");
            text1.setText(text.text)
        });
    }

    update() {
    }

}


export default InputTextScene;
