import BaseScene from "./BaseScene";

class ActionScene extends BaseScene {
    constructor(config) {
        super("ActionScene", config);
    }

    create() {
        //Tittle Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 - 200, 'Action Buttons', {
            fontSize: '40px', fill: '#FFFFFF'
        }).setOrigin(0.5);

        //SubTittle 1 Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 - 150, 'Icons Action Buttons', {
            fontSize: '28px', fill: '#FFFFFF'
        }).setOrigin(0.5);

        //SubTittle 2 Text
        this.add.text(this.config.width / 2, this.config.height / 2 - 100, 'Unselected Buttons', {
            fontSize: '28px', fill: '#FFFFFF'
        }).setOrigin(0.5);

        //SubTittle 3 Text
        this.add.text(this.config.width / 2 + 400, this.config.height / 2 - 100, 'Selected Buttons', {
            fontSize: '28px', fill: '#FFFFFF'
        }).setOrigin(0.5);

        //SubTittle 4 Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 + 120, 'Type 2', {
            fontSize: '28px', fill: '#FFFFFF'
        }).setOrigin(0.5);

        //Buttons
        const CraftButton = this.add.image(this.config.width / 2, this.config.height / 2, 'CraftBtt');
        const EatButton = this.add.image(this.config.width / 2, this.config.height / 2, 'EatBtt');
        const FishButton = this.add.image(this.config.width / 2, this.config.height / 2, 'FishBtt');
        const HarvestButton = this.add.image(this.config.width / 2, this.config.height / 2, 'HarvestBtt');
        const HuntButton = this.add.image(this.config.width / 2, this.config.height / 2, 'HuntBtt');
        const MineButton = this.add.image(this.config.width / 2, this.config.height / 2, 'MineBtt');
        const SleepButton = this.add.image(this.config.width / 2, this.config.height / 2, 'SleepBtt');
        const ChopButton = this.add.image(this.config.width / 2, this.config.height / 2, 'ChopBtt');

        //Selected Buttons
        const CraftButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'CraftBttSelected');
        const EatButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'EatBttSelected');
        const FishButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'FishBttSelected');
        const HarvestButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'HarvestBttSelected');
        const HuntButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'HuntBttSelected');
        const MineButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'MineBttSelected');
        const SleepButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'SleepBttSelected');
        const ChopButtonSelected = this.add.image(this.config.width / 2 + 400, this.config.height / 2, 'ChopBttSelected');

        // action buttons Type 2
        const CraftButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'CraftBtt2');
        const EatButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'EatBtt2');
        const FishButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'FishBtt2');
        const HarvestButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'HarvestBtt2');
        const HuntButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'HuntBtt2');
        const MineButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'MineBtt2');
        const SleepButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'SleepBtt2');
        const ChopButton2 = this.add.image(this.config.width / 2 + 200, this.config.height / 2, 'ChopBtt2');


        const ActionHexButtons = this.rexUI.add.gridButtons({
            x: this.config.width / 2,
            y: this.config.height / 2,
            width: 46,
            height: 46,
            anchor: undefined,
            createCellContainerCallback: function () {
                return cellContainer;
            },
            expand: true,
            buttons: [[CraftButton, EatButton, FishButton], [HarvestButton, HuntButton, MineButton], [ChopButton, SleepButton]],
            space: {
                left: 0, right: 0, top: 0, bottom: 0, row: 10, column: 10
            }

        })
            .layout()
            .on('button.click', function (Button) {
                if (Button === CraftButton) {
                    alert("Craft Button Clicked");
                }
                if (Button === EatButton) {
                    alert("Eat Button Clicked");
                }
                if (Button === FishButton) {
                    alert("Fish Button Clicked");
                }
                if (Button === HarvestButton) {
                    alert("Harvest Button Clicked");
                }
                if (Button === HuntButton) {
                    alert("Hunt Button Clicked");
                }
                if (Button === MineButton) {
                    alert("Mine Button Clicked");
                }
                if (Button === SleepButton) {
                    alert("Sleep Button Clicked");
                }
                if (Button === ChopButton) {
                    alert("Chop Button Clicked");
                }
            });

        const ActionHexSelectedButtons = this.rexUI.add.gridButtons({
            x: this.config.width / 2 + 400,
            y: this.config.height / 2,
            width: 46,
            height: 46,
            anchor: undefined,
            createCellContainerCallback: function () {
                return cellContainer;
            },
            expand: true,
            buttons: [[CraftButtonSelected, EatButtonSelected, FishButtonSelected], [HarvestButtonSelected, HuntButtonSelected, MineButtonSelected], [ChopButtonSelected, SleepButtonSelected,],],
            space: {
                left: 0, right: 0, top: 0, bottom: 0, row: 10, column: 10
            }

        })
            .layout()
            .on('button.click', function (Button) {
                if (Button === CraftButtonSelected) {
                    alert("Craft Button Selected Clicked");
                }
                if (Button === EatButtonSelected) {
                    alert("Eat Button Selected Clicked");

                }
                if (Button === FishButtonSelected) {
                    alert("Fish Button Selected Clicked");
                }
                if (Button === HarvestButtonSelected) {
                    alert("Harvest Button Selected Clicked");

                }
                if (Button === HuntButtonSelected) {
                    alert("Hunt Button Selected Clicked");
                }
                if (Button === MineButtonSelected) {
                    alert("Mine Button Selected Clicked");

                }
                if (Button === SleepButtonSelected) {
                    alert("Sleep Button Selected Clicked");
                }
                if (Button === ChopButtonSelected) {
                    alert("Chop Button Selected Clicked");
                }
            });

        const ActionButtonsType2 = this.rexUI.add.gridButtons({
            x: this.config.width / 2 + 200,
            y: this.config.height / 2 + 250,
            anchor: undefined,
            createCellContainerCallback: function () {
                return cellContainer;
            },
            expand: true,
            buttons: [[CraftButton2, EatButton2, FishButton2], [HarvestButton2, HuntButton2, MineButton2], [ChopButton2, SleepButton2,],],
            space: {
                left: 0, right: 0, top: 0, bottom: 0, row: 10, column: 10 //espacamento entre os botoes
            }
        })
            .layout()
            .on('button.click', function (Button) {
                if (Button === CraftButton2) {
                    alert("Craft Button Type 2 Clicked");
                }
                if (Button === EatButton2) {
                    alert("Eat Button Type 2 Clicked");
                }
                if (Button === FishButton2) {
                    alert("Fish Button Type 2 Clicked");
                }
                if (Button === HarvestButton2) {
                    alert("Harvest Button Type 2 Clicked");
                }
                if (Button === HuntButton2) {
                    alert("Hunt Button Type 2 Clicked");
                }
                if (Button === MineButton2) {
                    alert("Mine Button Type 2 Clicked");
                }
                if (Button === SleepButton2) {
                    alert("Sleep Button Type 2 Clicked");
                }
                if (Button === ChopButton2) {
                    alert("Chop Button Type 2 Clicked");
                }
            });
    }
}

export default ActionScene;
