import BaseScene from "./BaseScene";

class ArrowsScene extends BaseScene {

    constructor(config) {
        super("ArrowsScene", config);
    }

    create() {
        //Tittle Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 - 200, 'Arrow Buttons', {
            fontSize: '40px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        //SubTittle 1 Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 - 150, 'Type 1', {
            fontSize: '28px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        //SubTittle 2 Text
        this.add.text(this.config.width / 2 + 200, this.config.height / 2 + 100, 'Type 2', {
            fontSize: '28px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);

        //Arrows Buttons
        const ArrowButtonLeft = this.add.image(this.config.width / 2 + 50, this.config.height / 2 - 100, 'ArrowLeft').setScale(2);
        const ArrowButtonRight = this.add.image(this.config.width / 2 + 150, this.config.height / 2 - 100, 'ArrowRight').setScale(2);
        const ArrowButtonUp = this.add.image(this.config.width / 2 + 250, this.config.height / 2 - 100, 'ArrowUp').setScale(2);
        const ArrowButtonDown = this.add.image(this.config.width / 2 + 350, this.config.height / 2 - 100, 'ArrowDown').setScale(2);

        const ArrowButtonLeftSmall = this.add.image(this.config.width / 2 + 50, this.config.height / 2 + 200, 'ArrowLeftSmall').setScale(2);
        const ArrowButtonRightSmall = this.add.image(this.config.width / 2 + 150, this.config.height / 2 + 200, 'ArrowRightSmall').setScale(2);
        const ArrowButtonUpSmall = this.add.image(this.config.width / 2 + 250, this.config.height / 2 + 200, 'ArrowUpSmall').setScale(2);
        const ArrowButtonDownSmall = this.add.image(this.config.width / 2 + 350, this.config.height / 2 + 200, 'ArrowDownSmall').setScale(2);

        const Type1Arrows = this.rexUI.add.gridButtons(
            {
                x: this.config.width / 2 + 200, y: this.config.height / 2 - 50,
                width: 22, height: 17,
                anchor: undefined,
                createCellContainerCallback: function () {
                    return cellContainer;
                },
                expand: true,
                buttons: [[null, ArrowButtonUp,], [ArrowButtonLeft, null, ArrowButtonRight], [null, ArrowButtonDown],],
                space: {
                    left: 0, right: 0, top: 0, bottom: 0,
                    row: 10, column: 10
                }
            })
            .layout()
            .on('button.click', function (Button) {
                if (Button === ArrowButtonUp) {
                    alert("Type 1 Arrow Up Clicked");
                }
                if (Button === ArrowButtonLeft) {
                    alert("Type 1 Arrow Left Clicked");
                }
                if (Button === ArrowButtonRight) {
                    alert("Type 1 Right Arrow Clicked");
                }
                if (Button === ArrowButtonDown) {
                    alert("Type 1 Arrow Down Clicked");
                }
            });

        const Type2Arrows = this.rexUI.add.gridButtons(
            {
                x: this.config.width / 2 + 200, y: this.config.height / 2 + 200,
                width: 22, height: 17,
                anchor: undefined,

                createCellContainerCallback: function () {
                    return cellContainer;
                },
                expand: true,
                buttons: [[null, ArrowButtonUpSmall], [ArrowButtonLeftSmall, null, ArrowButtonRightSmall], [null, ArrowButtonDownSmall]],
                space: {
                    left: 0, right: 0, top: 0, bottom: 0,
                    row: 10, column: 10
                }
            })
            .layout()
            .on('button.click', function (Button, index, pointer, event) {
                if (Button === ArrowButtonUpSmall) {
                    alert("Type 2 Arrow Up Clicked");
                }
                if (Button === ArrowButtonLeftSmall) {
                    alert("Type 2 Arrow Left Clicked");
                }
                if (Button === ArrowButtonRightSmall) {
                    alert("Type 2 Right Arrow Clicked");
                }
                if (Button === ArrowButtonDownSmall) {
                    alert("Type 2 Arrow Down Clicked");
                }
            });
    }
}

export default ArrowsScene;