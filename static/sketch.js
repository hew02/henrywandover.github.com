import {randInt} from './modules/hew.js';
import {calculateGrid, asciiScale, rows, cols, addChar, drawBatch} from './modules/p5ASCII.js';

import {Train} from './modules/train.js';

import {SmokePlume, drawAllSmokePixels, updateAllSmokePixels} from './modules/physics.js';

let t = null;
let s = null;

let spawnNewPlume = false;


var bannerImg;
var myShader;
var gFont;


var options = {
   disableTouchActions: true,
   freeRotation: false
};


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

					t = new Train(-15, randInt(8, rows - 8));

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

				  
				  drawAllSmokePixels();
				  s.draw();
					t.draw(p5);

					t.drawTrackMarks(p5);

				  drawBatch(p5);

				  p5.fill(6, 6, 6, 50);
				  p5.rect(0,0,p5.width,p5.height);
					
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
				}

});

