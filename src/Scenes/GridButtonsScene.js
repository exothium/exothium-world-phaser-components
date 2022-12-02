import BaseScene from "./BaseScene";
import HeaderButtonsScene from "./HeaderButtonsScene";

class GridButtonsScene extends BaseScene {
    constructor(config) {
        super("GridButtonsScene", config);
    }

    create() {
        let thisCopy = this;

        //Text on center of screen
        this.add.text(this.config.width / 2 - 450, this.config.height / 2 - 320, 'Samples Scene', {
            fontSize: '40px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        //text window
        this.add.image(this.config.width / 2 - 450, this.config.height / 2, 'BaseWindowSmall');
        this.add.image(this.config.width / 2 + 190, this.config.height / 2 + 15, 'BaseWindowLarge');

        //Buttons
        this.ButtonGrid = this.add.image(this.config.width / 2 / 2, this.config.height / 2, "Buttons");
        this.ButtonGridIsOn = false;
        this.ButtonGridIsHover = false;

        this.InputBtt = this.add.image(this.config.width / 2 / 2, this.config.height / 2, 'InputButton');
        this.InputBttIsOn = false;
        this.InputBttIsHover = false;

        this.ScrollBtt = this.add.image(this.config.width / 2 / 2, this.config.height / 2, 'Scroll');
        this.ScrollBttIsOn = false;
        this.ScrollBttIsHover = false;

        // Grid Vertical buttons
        const VerticalGridButtons = this.rexUI.add.gridButtons(
            {
                x: this.config.width / 2 - 450, y: this.config.height / 2,
                width: 182, height: 62,
                anchor: undefined,
                createCellContainerCallback: function () {
                    return cellContainer;
                },
                expand: true,
                buttons: [[this.ButtonGrid], [this.InputBtt], [this.ScrollBtt],],
                space: {
                    left: 0, right: 0, top: 0, bottom: 0,
                    row: 10, column: 10 //espacamento entre os botoes
                }
            })
            .layout()
            //Button Functions
            .on('button.click', function (Button) {
                if (Button === thisCopy.ButtonGrid) {
                    thisCopy.ButtonGridIsOn = !thisCopy.ButtonGridIsOn;
                    thisCopy.InputBttIsOn = false;
                    thisCopy.ScrollBttIsOn = false;
                    thisCopy.SceneChange();
                    console.log("Show Header Buttons");
                    thisCopy.ButtonGrid.setTint(0xff0000);
                }
                if (Button === thisCopy.InputBtt) {
                    thisCopy.InputBttIsOn = !thisCopy.InputBttIsOn;
                    thisCopy.ButtonGridIsOn = false;
                    thisCopy.ScrollBttIsOn = false;
                    thisCopy.SceneChangeToInput();
                    console.log("Show Input");
                    thisCopy.InputBtt.setTint(0xff0000);
                }
                if (Button === thisCopy.ScrollBtt) {
                    thisCopy.ScrollBtt = !thisCopy.ScrollBttIsOn;
                    thisCopy.InputBttIsOn = false;
                    thisCopy.ButtonGridIsOn = false;
                    thisCopy.SceneChangeToScroll();
                    console.log("Show Header Buttons");
                    thisCopy.ButtonGrid.setTint(0xff0000);
                }
            })
            .on('button.over', function (Button) {
                if (Button === thisCopy.ButtonGrid) {
                    thisCopy.ButtonGridIsHover = !thisCopy.ButtonGridIsHover;
                    thisCopy.ButtonGrid.setTint(0x00ff00);
                }
                if (Button === thisCopy.InputBtt) {
                    thisCopy.InputBttIsHover = !thisCopy.InputBttIsHover;
                    thisCopy.InputBtt.setTint(0x00ff00);

                }
                if (Button === thisCopy.ScrollBtt) {
                    thisCopy.ScrollBttIsHover = !thisCopy.ScrollBttIsHover;
                    thisCopy.ScrollBtt.setTint(0x00ff00);
                }
            })
            .on('button.out', function (Button) {
                if (Button === thisCopy.ButtonGrid) {
                    thisCopy.ButtonGridIsHover = false;
                    thisCopy.ButtonGrid.clearTint();
                }
                if (Button === thisCopy.InputBtt) {
                    thisCopy.InputBttIsHover = false;
                    thisCopy.InputBtt.clearTint();
                }
                if (Button === thisCopy.ScrollBtt) {
                    thisCopy.ScrollBttIsHover = false;
                    thisCopy.ScrollBtt.clearTint();
                }
            });
    }

    update() {
        if (this.ButtonGridIsOn) {
            this.ButtonGrid.setTint(0xff0000);
        } else {
            this.ButtonGrid.clearTint();
        }
        if (this.InputBttIsOn) {
            this.InputBtt.setTint(0xff0000);
        } else {
            this.InputBtt.clearTint();
        }
        if (this.ScrollBttIsOn) {
            this.ScrollBtt.setTint(0xff0000);
        }

        if (this.ButtonGridIsHover) {
            this.ButtonGrid.setTint(0x00ff00);
        }

        if (this.InputBttIsHover) {
            this.InputBtt.setTint(0x00ff00);
        }

        if (this.ButtonGridIsOn && this.ButtonGridIsHover) {
            this.ButtonGrid.setTint(0xff0000);
        }
        if (this.InputBttIsOn && this.InputBttIsHover) {
            this.InputBtt.setTint(0xff0000);
        }
    }

    SceneChange() {
        this.scene.launch('LoginButtonsScene');
        this.scene.launch('HeaderButtonsScene');
        this.scene.stop("ActionScene");
        this.scene.stop("SlotsScene");
        this.scene.stop("ArrowsScene");
        this.scene.stop("InputTextScene");
        console.log("Scene Change");
    }

    SceneChangeToInput() {
        this.scene.launch('InputTextScene');
        this.scene.stop('HeaderButtonsScene');
        this.scene.stop("ActionScene");
        this.scene.stop("SlotsScene");
        this.scene.stop("ArrowsScene");
        this.scene.stop('LoginButtonsScene');
        console.log("Scene Change");
    }

    SceneChangeToScroll() {
        this.scene.launch('ScrollScene');
        this.scene.stop('HeaderButtonsScene');
        this.scene.stop("ActionScene");
        this.scene.stop("SlotsScene");
        this.scene.stop("ArrowsScene");
        this.scene.stop('LoginButtonsScene');
        console.log("Scene Change");
    }
}


export default GridButtonsScene;