import Phaser from "phaser";

class PreloadScene extends Phaser.Scene 
{
  constructor() 
  {
    super("PreloadScene");
  }

    preload()
    {
        this.load.image('background', 'assets/Bg_Phaser_test.png');
        this.load.image('button', 'assets/clickme_btt.png');
        this.load.image("Text_Window", "assets/Text_Window.png");
        this.load.image("BaseWindowSmall", "assets/Base_Window_Small.png");
        this.load.image("BaseWindowLarge", "assets/Base_Window_big.png");

        this.load.image("GridButtonImage", "assets/Grid.png");
        this.load.image("Buttons", "assets/Buttons_btt.png");
        this.load.image("Scroll", "assets/Scroll.png");
        this.load.image("InputButton", "assets/Input.png");
        
        //Header Buttons
        this.load.image("AuthBtt", "assets/Auth.png");
        this.load.image("ArrowsBtt", "assets/Arrows.png");
        this.load.image("SlotsBtt", "assets/Slots.png");
        this.load.image("ActionBtt", "assets/Action.png");

        //Close Buttons
        this.load.image("CloseButton", "assets/Close_Button.png");

        //Login Buttons
        this.load.image("LogDiscord", "assets/Login_Btt/Login_Discord.png");
        this.load.image("LogWallet", "assets/Login_Btt/Login_Wallet.png");

        // Arrows Buttons
        this.load.image("ArrowLeft", "assets/Arrows_Btt/Arrow_Left.png");
        this.load.image("ArrowRight", "assets/Arrows_Btt/Arrow_Right.png");
        this.load.image("ArrowUp", "assets/Arrows_Btt/Arrow_Up.png");
        this.load.image("ArrowDown", "assets/Arrows_Btt/Arrow_Down.png");
        this.load.image("ArrowLeftSmall", "assets/Arrows_Btt/Arrow_Left_Small.png");
        this.load.image("ArrowRightSmall", "assets/Arrows_Btt/Arrow_Right_Small.png");
        this.load.image("ArrowUpSmall", "assets/Arrows_Btt/Arrow_Up_Small.png");
        this.load.image("ArrowDownSmall", "assets/Arrows_Btt/Arrow_Down_Small.png");

        //Slots Buttons
        this.load.image("BlockedSlot", "assets/slots/Blocked_Slot.png");
        this.load.image("HexSlot", "assets/slots/Empty_Slot.png");
        this.load.image("SelectedSlot", "assets/slots/Selected_Icon.png");
        this.load.image("BasicSlot", "assets/slots/Basic_Slot.png");
        this.load.image("BasicSelectedSlot", "assets/slots/Basic_Slot_Selected.png");

        //Action Buttons
        this.load.image("CraftBtt", "assets/Action_Btt/Craft_Btt.png");
        this.load.image("EatBtt", "assets/Action_Btt/Eat_Btt.png");
        this.load.image("FishBtt", "assets/Action_Btt/Fish_Btt.png");
        this.load.image("HarvestBtt", "assets/Action_Btt/Harvest_Btt.png");
        this.load.image("HuntBtt", "assets/Action_Btt/Hunt_Btt.png");
        this.load.image("MineBtt", "assets/Action_Btt/Mine_Btt.png");
        this.load.image("SleepBtt", "assets/Action_Btt/Sleep_Btt.png");
        this.load.image("ChopBtt", "assets/Action_Btt/Chop_Btt.png");

        //Action Buttons selected
        this.load.image("CraftBttSelected", "assets/Action_Btt/Craft_Selected_Btt.png");
        this.load.image("EatBttSelected", "assets/Action_Btt/Eat_Selected_Btt.png");
        this.load.image("FishBttSelected", "assets/Action_Btt/Fish_Selected_Btt.png");
        this.load.image("HarvestBttSelected", "assets/Action_Btt/Harvest_Selected_Btt.png");
        this.load.image("HuntBttSelected", "assets/Action_Btt/Hunt_Selected_Btt.png");
        this.load.image("MineBttSelected", "assets/Action_Btt/Mine_Selected_Btt.png");
        this.load.image("SleepBttSelected", "assets/Action_Btt/Sleep_Selected_Btt.png");
        this.load.image("ChopBttSelected", "assets/Action_Btt/Chop_Selected_Btt.png");

        //Actions Buttons Type 2
        this.load.image("CraftBtt2", "assets/Action_Btt/Craft_Btt_Type2.png");
        this.load.image("EatBtt2", "assets/Action_Btt/Eat_Btt_Type2.png");
        this.load.image("FishBtt2", "assets/Action_Btt/Fishing_Btt_Type2.png");
        this.load.image("HarvestBtt2", "assets/Action_Btt/Harvest_Btt_Type2.png");
        this.load.image("HuntBtt2", "assets/Action_Btt/Hunt_Btt_Type2.png");
        this.load.image("MineBtt2", "assets/Action_Btt/Mine_Btt_Type2.png");
        this.load.image("SleepBtt2", "assets/Action_Btt/Sleep_Btt_Type2.png");
        this.load.image("ChopBtt2", "assets/Action_Btt/Chop_Btt_Type2.png");

    }

    create()
    {
        this.scene.start("GridButtonsScene");
        console.log ("PreloadScene IS WORKING");
        
    }

}
export default PreloadScene;