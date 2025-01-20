import { randInt } from './modules/hew.js';
import { calculateGrid, asciiScale, rows, cols, addChar, drawBatch } from './modules/p5ASCII.js';
import { Train } from './modules/train.js';
import { Chicken } from './modules/chicken.js';
import { Wolf } from './modules/wolf.js';
import { SmokePlume, drawAllSmokePixels, updateAllSmokePixels } from './modules/physics.js';

let t = null;
let s = null;
let f = null;

let spawnNewPlume = false;


var bannerImg;
var myShader;
let shaderLayer;
var gFont;

let renderLayer;


var options = {
	disableTouchActions: true,
	freeRotation: false
};

class Fader {
	constructor() {
		this.frameTimer = 0;
		this.frameDuration = 3;
		this.opacity = 255;
	}

	draw(p5) {
		this.frameTimer = (this.frameTimer + 1) % (this.frameDuration * 3);
		if (this.opacity >= 15 &&
			this.frameTimer < this.frameDuration * 4) {
			this.opacity = this.opacity - 10;
		}

		p5.fill(6, 6, 6, this.opacity);
		p5.rect(0, 0, p5.width, p5.height);
	}
}



let chickenTest;
let wolfTest;


var sketch = new p5(function (p5) {
	p5.setup = function () {
		if (!p5.WEBGL) {
			console.error('WebGL is not available in this browser.');
			return -1;
		}
		else {
			const container = p5.select('#canvas-container');
			var cnv = p5.createCanvas(container.width, container.height, p5.WEBGL);
			cnv.parent(container);
			cnv.id('p5-canvas');
			console.log('WebGL Version: ' + p5.webglVersion);
			shaderLayer = p5.createGraphics(p5.width, p5.height, p5.WEBGL);
			shaderLayer.noStroke();
		}

		renderLayer = p5.createGraphics(p5.width, p5.height);
		renderLayer.textAlign(p5.CENTER, p5.CENTER);
		gFont = p5.loadFont("/vga8.woff");
		renderLayer.textFont(gFont, 14);
		calculateGrid(p5);
		renderLayer.textSize(asciiScale);
		renderLayer.noStroke();
		p5.noStroke();
		p5.describe("Little ASCII train.");
		p5.frameRate(15);

		t = new Train(-15, 29);
		f = new Fader();
		chickenTest = new Chicken(3, rows - 4);
		wolfTest = new Wolf(cols - 4, rows - 4);
	}

	p5.draw = function () {
		p5.background(6, 6, 6);
		shaderLayer.shader(myShader);
		p5.translate(-p5.width / 2, -p5.height / 2);


		//drawCharacterGrid();

		if (!spawnNewPlume && t.x < 0) {
			spawnNewPlume = true;
		}

		if (spawnNewPlume) {
			s = new SmokePlume(t.x, t.y - 4, t.speed);
		}

		if (t.x > 0) {
			spawnNewPlume = false;
		}

		if (t.x > p5.width) {
			s = null;
		}


		t.update();
		s.update(p5);
		updateAllSmokePixels();


		s.draw();
		t.draw();

		//chickenTest.draw();
		//chickenTest.update();


		//wolfTest.draw();
		//wolfTest.update();

		for (let i = 0; i < cols; i++) {

			if (i % 26) {
				addChar('═', i, 30, '#D2B48C', 2);
			} else {
				if (i < cols / 2) {
					addChar('╔', i, 24, '#D2B48C', 1);
					addChar('╝', i + 1, 24, '#D2B48C', 1);
					addChar('╔', i + 1, 23, '#D2B48C', 1);
					addChar('╝', i + 2, 23, '#D2B48C', 1);
					addChar('╦', i + 2, 22, '#D2B48C', 1);
				} else {
					addChar('╗', i, 24, '#D2B48C', 1);
					addChar('╚', i - 1, 24, '#D2B48C', 1);
					addChar('╗', i - 1, 23, '#D2B48C', 1);
					addChar('╚', i - 2, 23, '#D2B48C', 1);
					addChar('╦', i - 2, 22, '#D2B48C', 1);
				}

				addChar('║', i, 25, '#D2B48C', 2);
				addChar('║', i, 26, '#D2B48C', 2);
				addChar('║', i, 27, '#D2B48C', 2);
				addChar('║', i, 28, '#D2B48C', 2);
				addChar('║', i, 29, '#D2B48C', 2);
				addChar('╬', i, 30, '#D2B48C', 2);
				addChar('╦', i - 3, 30, '#D2B48C', 2);

				for (let j = 31; j < 45; j++) {
					addChar('║', i - 3, j, '#73634d', 2);
					addChar('║', i, j, '#D2B48C', 2);
				}
			}

			addChar('═', i, 22, '#D2B48C', 2);
		}




		drawAllSmokePixels();

		myShader.setUniform("tex0", renderLayer);
		myShader.setUniform("resolution", [p5.width, p5.height]);
		myShader.setUniform("scale", rows * asciiScale);
		shaderLayer.rect(0,0,p5.width, p5.height);

		//t.drawTrackMarks(p5);
		drawBatch(renderLayer);

		let c = p5.color(255, 0, 0);
		p5.pointLight(c, 0, -150, 0);

		p5.image(shaderLayer, 0, 0, p5.width, p5.height);


		f.draw(p5);
	}


	p5.preload = function () {
		myShader = p5.loadShader('/shaders/shader.vert', '/shaders/shader.frag');
	}




	p5.mouseClicked = function (e) {
		/*if (p5.mouseY >= p5.height - 25) {
			const event = new CustomEvent('navigate-to');
			window.dispatchEvent(event);
		}*/
	}

	p5.mouseWheel = function (e) {
		return true;
	}

	p5.windowResized = function () {
		const container = p5.select('#canvas-container');
		p5.resizeCanvas(container.width, container.height);

		calculateGrid(p5);
		renderLayer = p5.createGraphics(p5.width, p5.height);
		renderLayer.textAlign(p5.CENTER, p5.CENTER);
		renderLayer.textFont(gFont, 14);
		renderLayer.noStroke();
		renderLayer.textSize(asciiScale);
	}

});

// https://www.youtube.com/watch?v=VtpF-m3KyEk
// grass (and tree): "ᴦ~↨₋ᴛ
// https://www.google.com/search?sca_esv=a11fe0c8493c2c3e&sxsrf=ADLYWILoapqBeLiSjug1y2A6WIDNlgkayA:1735873428926&q=dwarf+fortress+ascii&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyWp6w6_rxLPe8F8fpm5a57iruiBaetC-P1z8A1EgSEtGoKiI-tyuuiDuAjQZN76zQqJViCdF78ZMNlQqovfNwuIqqo1RsVD9GtUqCzkz0DVUQ4z-CimdBJ3tn6agrsB0C0fnR33H6lfurv4ZfC2xlrkF2CyxrCbQL4FaLHuYaKtlILmFg&sa=X&ved=2ahUKEwistey4yNiKAxUKFlkFHVhjBacQtKgLegQIDxAB&biw=564&bih=640&dpr=2#vhid=WDhrTbyJOlm0pM&vssid=mosaic

let map = null;

function makeMap() {
	map = [];
	for (let i = 0; i < p5.width; i++) {
		map[i] = [];
		for (let j = 0; j < p5.height; j++) {

		}
	}
}

function pickColor(i, j) {

}

function drawMap() {

}
