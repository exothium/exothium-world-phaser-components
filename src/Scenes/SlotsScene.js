import BaseScene from "./BaseScene";

class SlotsScene extends BaseScene 
{
    constructor(config)
    {
        super("SlotsScene", config);
    }

    create()
    {
        //Tittle Text
        this.add.text(this.config.width/2+200, this.config.height/2-200, 'Slot Buttons', { fontSize: '40px', fill: '#FFFFFF' }).setOrigin(0.5);

        //SubTittle 1 Text
        this.add.text(this.config.width/2+200, this.config.height/2-150, 'Blocked Slots', { fontSize: '28px', fill: '#FFFFFF' }).setOrigin(0.5);

        //SubTittle 2 Text
        this.add.text(this.config.width/2+200, this.config.height/2, 'Unselected Slot', { fontSize: '28px', fill: '#FFFFFF' }).setOrigin(0.5);

        // subtittle 3 text
        this.add.text(this.config.width/2+200, this.config.height/2+150, 'Selected Slot', { fontSize: '28px', fill: '#FFFFFF' }).setOrigin(0.5);

        //Blocked Slot
        this.add.image(this.config.width/2+200,this.config.height/2-70, 'BlockedSlot');

        //Unselected Slot
        this.add.image(this.config.width/2+150,this.config.height/2+60, 'HexSlot');
        this.add.image(this.config.width/2+250,this.config.height/2+60, 'BasicSlot');

        //Selected Slot
        this.add.image(this.config.width/2+150,this.config.height/2+210, 'HexSlot');
        this.add.image(this.config.width/2+150,this.config.height/2+210, 'SelectedSlot');
        this.add.image(this.config.width/2+250,this.config.height/2+210, 'BasicSlot');
        this.add.image(this.config.width/2+250,this.config.height/2+210, 'BasicSelectedSlot');
    }
}

export default SlotsScene;