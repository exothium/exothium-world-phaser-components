import BaseScene from "./BaseScene";

class HeaderButtonsScene extends BaseScene {

    constructor(config) {
        super("HeaderButtonsScene", config);
    }

    create() {
        var thisCopy = this;
        this.Authbutton = this.add.image(this.config.width / 2 / 2, this.config.height / 2, 'AuthBtt').setScale(0.8);
        this.AuthbuttonIsOn = false;
        this.AuthbuttonIsHover = false;
        this.AuthbuttonIsOut = false;
        this.ArrowsButton = this.add.image(this.config.width / 2 + 320, this.config.height / 2, 'ArrowsBtt').setScale(0.8);
        this.ArrowsButtonIsOn = false;
        this.ArrowsButtonIsHover = false;
        this.SlotsButton = this.add.image(this.config.width / 2 + 320, this.config.height / 2, 'SlotsBtt').setScale(0.8);
        this.SlotsButtonIsOn = false;
        this.SlotsButtonIsHover = false;
        this.ActionButton = this.add.image(this.config.width / 2 + 320, this.config.height / 2, 'ActionBtt').setScale(0.8);
        this.ActionButtonIsOn = false;
        this.ActionButtonIsHover = false;

        //Close Button
        const CloseButton = this.add.image(this.config.width / 2 + 600, this.config.height / 2 - 335, 'CloseButton').setScale(2);

        //Header GridBbuttons 
        const Header = this.rexUI.add.gridButtons(
            {
                x: this.config.width / 2 + 100, y: this.config.height / 2 - 320,
                //width: 182, height: 62,
                width: 91, height: 31,
                anchor: undefined,
                createCellContainerCallback: function () {
                    return cellContainer;
                },
                expand: true,
                //List of buttons
                buttons: [
                    [this.Authbutton, this.ArrowsButton, this.SlotsButton, this.ActionButton],
                ],
                space: {
                    left: 0, right: 0, top: 0, bottom: 0,
                    row: 10, column: 10 //espacamento entre os botoes
                }
            })
            .layout()
            .on('button.click', function (Button) {
                if (Button === thisCopy.Authbutton) {
                    thisCopy.AuthbuttonIsOn = !thisCopy.AuthbuttonIsOn;
                    thisCopy.SlotsButtonIsOn = false;
                    thisCopy.ArrowsButtonIsOn = false;
                    thisCopy.ActionButtonIsOn = false;
                    thisCopy.scene.stop('ArrowsScene');
                    thisCopy.scene.stop('ActionScene');
                    thisCopy.scene.stop('SlotsScene');
                    thisCopy.scene.launch('LoginButtonsScene');
                    thisCopy.Authbutton.setTint(0xff0000);
                }
                if (Button === thisCopy.ArrowsButton) {
                    thisCopy.ArrowsButtonIsOn = !thisCopy.ArrowsButtonIsOn;
                    thisCopy.AuthbuttonIsOn = false;
                    thisCopy.SlotsButtonIsOn = false;
                    thisCopy.ActionButtonIsOn = false;
                    console.log("Button Clicked 2");
                    thisCopy.scene.stop('LoginButtonsScene');
                    thisCopy.scene.stop('SlotsScene');
                    thisCopy.scene.stop('ActionScene');
                    thisCopy.scene.launch('ArrowsScene');
                    thisCopy.ArrowsButton.setTint(0xff0000);
                }
                if (Button === thisCopy.SlotsButton) {
                    thisCopy.SlotsButtonIsOn = !thisCopy.SlotsButtonIsOn;
                    thisCopy.AuthbuttonIsOn = false;
                    thisCopy.ArrowsButtonIsOn = false;
                    thisCopy.ActionButtonIsOn = false;
                    console.log("Button Clicked 3");
                    thisCopy.scene.stop('LoginButtonsScene');
                    thisCopy.scene.stop('ArrowsScene');
                    thisCopy.scene.stop('ActionScene');
                    thisCopy.scene.launch('SlotsScene');
                    thisCopy.SlotsButton.setTint(0xff0000);
                }
                if (Button === thisCopy.ActionButton) {
                    thisCopy.ActionButtonIsOn = !thisCopy.ActionButtonIsOn;
                    thisCopy.AuthbuttonIsOn = false;
                    thisCopy.ArrowsButtonIsOn = false;
                    thisCopy.SlotsButtonIsOn = false;
                    console.log("Button Clicked 4");
                    thisCopy.scene.stop('LoginButtonsScene');
                    thisCopy.scene.stop('ArrowsScene');
                    thisCopy.scene.stop('SlotsScene');
                    thisCopy.scene.launch('ActionScene');
                    thisCopy.ActionButton.setTint(0xff0000);
                }
            })
        Header.on('button.over', function (Button, index, pointer, event) {
            if (Button === thisCopy.Authbutton) {
                thisCopy.AuthbuttonIsHover = !thisCopy.AuthbuttonIsHover;
                thisCopy.Authbutton.setTint(0x00ff00);
            }

            if (Button === thisCopy.ArrowsButton) {
                thisCopy.ArrowsButtonIsHover = !thisCopy.ArrowsButtonIsHover;
                thisCopy.ArrowsButton.setTint(0x00ff00);
            }
            if (Button === thisCopy.SlotsButton) {
                thisCopy.SlotsButtonIsHover = !thisCopy.SlotsButtonIsHover;
                thisCopy.SlotsButton.setTint(0x00ff00);
            }
            if (Button === thisCopy.ActionButton) {
                thisCopy.ActionButtonIsHover = !thisCopy.ActionButtonIsHover;
                thisCopy.ActionButton.setTint(0x00ff00);
            }


        })
        Header.on('button.out', function (Button, index, pointer, event) {
            //stop on over button and button is clicked
            if (Button === thisCopy.Authbutton) {
                thisCopy.AuthbuttonIsHover = false;
                thisCopy.Authbutton.clearTint();
            }
            if (Button === thisCopy.ArrowsButton) {
                thisCopy.ArrowsButtonIsHover = false;
                thisCopy.ArrowsButton.clearTint();
            }
            if (Button === thisCopy.SlotsButton) {
                thisCopy.SlotsButtonIsHover = false;
                thisCopy.SlotsButton.clearTint();
            }
            if (Button === thisCopy.ActionButton) {
                thisCopy.ActionButtonIsHover = false;
                thisCopy.ActionButton.clearTint();
            }
        });
        //Button Close RexUI Design
        const Closebtt = this.rexUI.add.buttons({
            orientation: 0,
            buttons: [
                CloseButton,
            ],
            expand: false,
            align: undefined,
            click: {
                mode: 'pointerup',
                clickInterval: 100
            },
        });
        //Button Fuction
        Closebtt.on('button.click', (Button, index, pointer, event) => {
            //alert("asdasd");
            this.scene.stop("LoginButtonsScene");
            this.scene.stop("HeaderButtonsScene");
            this.scene.stop("ArrowsScene");
            this.scene.stop("SlotsScene");
            this.scene.stop("ActionScene");
        });
    }
    //UpdateFunction
    update() {
        if (this.AuthbuttonIsOn) {
            this.Authbutton.setTint(0xff0000);
        } else {
            this.Authbutton.clearTint();
        }

        if (this.SlotsButtonIsOn) {
            this.SlotsButton.setTint(0xff0000);
        } else {
            this.SlotsButton.clearTint();
        }
        if (this.ArrowsButtonIsOn) {
            this.ArrowsButton.setTint(0xff0000);
        } else {
            this.ArrowsButton.clearTint();
        }
        if (this.ActionButtonIsOn) {
            this.ActionButton.setTint(0xff0000);
        } else {
            this.ActionButton.clearTint();
        }

        if (this.AuthbuttonIsHover) {
            this.Authbutton.setTint(0x00ff00);
        }

        if (this.SlotsButtonIsHover) {
            this.SlotsButton.setTint(0x00ff00);
        }
        if (this.ArrowsButtonIsHover) {
            this.ArrowsButton.setTint(0x00ff00);
        }
        if (this.ActionButtonIsHover) {
            this.ActionButton.setTint(0x00ff00);
        }

        // if is clicked butto on over button dont change color
        if (this.AuthbuttonIsOn && this.AuthbuttonIsHover) {
            this.Authbutton.setTint(0xff0000);
        }
        if (this.SlotsButtonIsOn && this.SlotsButtonIsHover) {
            this.SlotsButton.setTint(0xff0000);
        }
        if (this.ArrowsButtonIsOn && this.ArrowsButtonIsHover) {
            this.ArrowsButton.setTint(0xff0000);
        }
        if (this.ActionButtonIsOn && this.ActionButtonIsHover) {
            this.ActionButton.setTint(0xff0000);
        }
    }

}


export default HeaderButtonsScene;