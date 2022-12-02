import Phaser from "phaser";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import TextEditPlugin from "phaser3-rex-plugins/plugins/textedit-plugin";
import PreloadScene from "./Scenes/PreloadScene";
import Table2Scene from "./Scenes/Table2Scene";
import StructureScene from "./Scenes/StructureScene";
import GridButtonsScene from "./Scenes/GridButtonsScene";
import LoginButtonsScene from "./Scenes/LoginButtonsScene";
import ArrowsScene from "./Scenes/ArrowsScene";
import SlotsScene from "./Scenes/SlotsScene";
import HeaderButtonsScene from "./Scenes/HeaderButtonsScene";
import ActionScene from "./Scenes/ActionScene";
import InputTextScene from "./Scenes/InputTextScene";
import ScrollScene from "./Scenes/ScrollScene";

const WIDTH = 1280;
const HEIGHT = 720;


const SHARED_CONFIG = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
};

const Scenes = [PreloadScene, StructureScene, Table2Scene, GridButtonsScene, HeaderButtonsScene, LoginButtonsScene, ArrowsScene, SlotsScene, ActionScene, InputTextScene, ScrollScene]; //ordem conta
const createScene = Scene => new Scene(SHARED_CONFIG);
const InitScenes = () => Scenes.map(createScene);

const config =
    {
        type: Phaser.AUTO,
        ...SHARED_CONFIG,
        pixelArt: true,
        parent: 'phaser-container',
        dom: {
            createContainer: true
        },
        scene: InitScenes(),
        plugins: {
            scene: [{
                key: 'rexUI',
                plugin: RexUIPlugin,
                mapping: 'rexUI'
            }]
        },
        global: [{
            key: 'rexTextEdit',
            plugin: TextEditPlugin,
            start: true
        }]
    }


new Phaser.Game(config);
