import Phaser from 'phaser'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

export default class HelloWorldScene extends Phaser.Scene {
	rexUI: RexUIPlugin;
	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.setBaseURL('https://labs.phaser.io')
		this.load.image('sky', 'assets/skies/space3.png')
		this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		this.load.image('red', 'assets/particles/red.png')
		
	}

	create() {
		
		
		const background = this.add.image(20, 20, 'sky')
		const buttons = this.rexUI.add.buttons({
				 x: 250,
				 y: 250,
				orientation: 0,
				background:background,
				buttons: [
					background
				],
				expand: false,
				align: undefined,
				click: {
					mode: 'pointerup',
					clickInterval: 100
				},

			});

		buttons.on('button.click', ()=> {
				alert("asdasd");
			})
	}
	
	

}
