import {randInt} from './modules/hew.js';
import {calculateGrid, asciiScale, rows, cols, addChar, addCharBG, drawBatch} from './modules/p5ASCII.js';

import {Train} from './modules/train.js';

import {SmokePlume, drawAllSmokePixels, updateAllSmokePixels} from './modules/physics.js';

let t = null;
let s = null;
let f = null;

let spawnNewPlume = false;


var bannerImg;
var myShader;
var gFont;


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
				if(this.opacity >= 120 && 
						this.frameTimer < this.frameDuration * 4) {
						this.opacity = this.opacity - 10;
				}

				p5.fill(6, 6, 6, this.opacity);
				p5.rect(0,0,p5.width,p5.height);
		}
}






var sketch = new p5(function(p5)
		{
				p5.setup = function() {
					if (!p5.WEBGL) 
					{
						console.error('WebGL is not available in this browser.');
					} 
					else 
					{
						const container = p5.select('#canvas-container');
						var cnv = p5.createCanvas(container.width, container.height, p5.P2D);
						cnv.parent(container);
						cnv.id('p5-canvas');
						console.log('WebGL Version: ' + p5.webglVersion);
					}

					p5.textAlign(p5.CENTER, p5.CENTER);
					gFont = p5.loadFont("/vga8.woff");
					p5.textFont(gFont, 14);

					calculateGrid(p5);

					p5.textSize(asciiScale);

					p5.noStroke();

					p5.describe("Little ASCII train.");

					p5.frameRate(10);

					t = new Train(-15, 29);
				 
				  f = new Fader();

				}

				p5.draw = function() {
					p5.background(6,6,6);

				  

					//drawCharacterGrid();

				  if(!spawnNewPlume && t.x < 0) {
							spawnNewPlume = true;
					}

				  if(spawnNewPlume) {
						s = new SmokePlume(t.x, t.y-4, t.speed);
					}

				  if(t.x > 0) {
							spawnNewPlume = false;
					}

				  if(t.x > p5.width) {
						s = null;
					}


					t.update();
				  s.update(p5);
				  updateAllSmokePixels();


				  s.draw();
					t.draw(p5);
				  
				  for(let i = 0; i < cols; i++) {

							if(i % 26) {
								addCharBG('═', i, 30, 'tan');
							} else {
								if(i < cols / 2) {
										addChar('╔', i, 24, 'tan');
										addChar('╝', i+1, 24, 'tan');
										addChar('╔', i+1, 23, 'tan');
										addChar('╝', i+2, 23, 'tan');
										addChar('╦', i+2, 22, 'tan');
								} else {
										addChar('╗', i, 24, 'tan');
										addChar('╚', i-1, 24, 'tan');
										addChar('╗', i-1, 23, 'tan');
										addChar('╚', i-2, 23, 'tan');
										addChar('╦', i-2, 22, 'tan');
								}

								addChar('║', i, 25, 'tan');
								addChar('║', i, 26, 'tan');
								addChar('║', i, 27, 'tan');
								addChar('║', i, 28, 'tan');
								addChar('║', i, 29, 'tan');
								addChar('╬', i, 30, 'tan');
							for(let j = 31; j < 45; j++) {
								addChar('║', i-3, j, ('tan', 70));
								addChar('║', i, j, 'tan');
							}
							}

						  addCharBG('═', i, 22, 'tan');
					}




				  drawAllSmokePixels();


					//t.drawTrackMarks(p5);

				  drawBatch(p5);

				  f.draw(p5);

					
					if(p5.mouseY >= p5.height - 25) {
						p5.cursor(p5.HAND);
					} else {
							p5.cursor(p5.ARROW);
					}
				}


				p5.preload = function() {
						//myShader = loadShader('/shader.vert', '/shader.frag');
				}




				p5.mouseClicked = function(e) {
					if (p5.mouseY >= p5.height - 25) {
						const event = new CustomEvent('navigate-to');
						window.dispatchEvent(event);
					}
				}

				p5.mouseWheel = function(e) {
					 return true;
				}

				p5.windowResized = function() {
					const container = p5.select('#canvas-container');
					p5.resizeCanvas(container.width, container.height);

					calculateGrid(p5);

					p5.textSize(asciiScale);
				}

});

// https://www.youtube.com/watch?v=VtpF-m3KyEk
// grass (and tree): "ᴦ~↨₋ᴛ
// https://www.google.com/search?sca_esv=a11fe0c8493c2c3e&sxsrf=ADLYWILoapqBeLiSjug1y2A6WIDNlgkayA:1735873428926&q=dwarf+fortress+ascii&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyWp6w6_rxLPe8F8fpm5a57iruiBaetC-P1z8A1EgSEtGoKiI-tyuuiDuAjQZN76zQqJViCdF78ZMNlQqovfNwuIqqo1RsVD9GtUqCzkz0DVUQ4z-CimdBJ3tn6agrsB0C0fnR33H6lfurv4ZfC2xlrkF2CyxrCbQL4FaLHuYaKtlILmFg&sa=X&ved=2ahUKEwistey4yNiKAxUKFlkFHVhjBacQtKgLegQIDxAB&biw=564&bih=640&dpr=2#vhid=WDhrTbyJOlm0pM&vssid=mosaic

let map = null;

function makeMap() {
		map = [];
		for(let i = 0; i < p5.width; i++) {
				map[i] = [];
				for(let j = 0; j < p5.height; j++) {

				}
		}
}

function pickColor(i, j) {

}

function drawMap() {

}
