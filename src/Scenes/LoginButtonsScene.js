import Phaser from "phaser";
import BaseScene from "./BaseScene";

class LoginButtonsScene extends BaseScene {

    constructor(config) {
        super("LoginButtonsScene", config);
    }

    create() {
        //Login Buttons
        const LogDiscord = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'LogDiscord');
        const LogWallet = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'LogWallet');

        //Tittle Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 - 200, 'Login Buttons', {
            fontSize: '40px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        // Begin Login GridBbuttons 
        const LoginButtons = this.rexUI.add.gridButtons(
            {
                x: this.config.width / 2 + 200, y: this.config.height / 2,
                width: 463, height: 54,
                anchor: undefined,
                createCellContainerCallback: function () {
                    return cellContainer;
                },
                expand: true,
                buttons: [
                    [LogDiscord],
                    [LogWallet],
                ],
                space: {
                    left: 0, right: 0, top: 0, bottom: 0,
                    row: 10, column: 10 //espacamento entre os botoes
                }
            })
            .layout()
            .on('button.click', function (Button, index, pointer, event) {
                if (Button === LogDiscord) {
                    alert("Login With Discord");
                }
                else {
                    alert("Login With Wallet");
                }

            });
        this.input.keyboard.on('keydown_ENTER', function (event) {
            console.log("ENTER IS PRESSED");
        });

        this.keys = this.input.keyboard.addKeys({
            w: Phaser.Input.Keyboard.KeyCodes.W,
        });

        this.input.keyboard.on('keydown_W', function (event) {
            console.log("W IS PRESSED");
        });
    }
}

export default LoginButtonsScene;