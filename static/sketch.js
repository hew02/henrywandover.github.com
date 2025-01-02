var bannerImg;
var myShader;
var gFont;

function randInt(lower = 0, upper = Number.MAX_SAFE_INTEGER) {
		return Math.floor(Math.random() * upper) + lower; 
}


var options = {
   disableTouchActions: true,
   freeRotation: false
};


let asciiScale = null;
let cols = null;
let rows = null;
let colSpacing = null;
let rowSpacing = null;
function calculateGrid() {
  asciiScale = Math.min(width / 80, height / 40);
	
  cols = Math.floor(width / (asciiScale * 0.6));
	rows = Math.floor(height / asciiScale);

  colSpacing = asciiScale * 0.6;
  rowSpacing = asciiScale;
}


function drawChar(c, col, row) {
		const x = col * colSpacing + colSpacing / 2;
		const y = row * rowSpacing + rowSpacing / 2;    

    fill('palegreen');
		text(c,x,y);
}


function drawString(s, col, row) {
	for (let c = 0; c < s.length; c++) {
		fill('palegreen');
		drawChar(s[c],col + c,row);
	}
}
 

function drawCharacterGrid() {
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {

			// Alternate characters for variety
			const char = (col + row) % 2 === 0 ? '#' : '@';

			drawChar(char, col, row);
		}
	}
}

class Train {
		constructor(x, y) {
				this.x = x;
				this.y = y;
				this.speed = 1;

				this.frameTimer = 0;
				this.frameDuration = 2;

				this.trackMarks = [
						{
								"x": x,
								"y": y
						}
				]
		}

		update() {
				if(this.x > cols) {
						this.x = -15;
						this.y = randInt(8, rows - 8);
				}
				this.x = this.x + this.speed;

				this.frameTimer = (this.frameTimer + 1) % (this.frameDuration * 3);
		
				let newMark = {
						"x": this.x,
						"y": this.y
				};
				this.trackMarks.push(newMark);

				if (this.trackMarks.length > 500) {
						this.trackMarks.pop();
				}
		}

		draw() {

		  const x = this.x;
		  const y = this.y;



				//drawString("oooo", x-3, y-5);
				//drawString("   o", x-2, y-4);


		   


				drawString("_╗__", x, y-3);
				drawString("| ☻|____T_", x, y-2);
				drawString("|_―|_©HW_|≤", x, y-1);
		 
			if(this.frameTimer < this.frameDuration * 1.5) {
				drawString("  O-O-O-øø\\", x, y);
			} else {
				drawString("  ⌀-⌀-⌀-oo\\", x, y);
			}
      


			/*text("o O___ _________\
		 _][__|o| |O O O O|\
		<_______|-|_______|\
		 /O-O-O     o   o", trainX, height - 40, 100);*/

		}


		drawTrackMarks() {
			for (let mark = 0; mark < this.trackMarks.length; mark++) {
					drawChar("_", this.trackMarks[mark].x, this.trackMarks[mark].y);
			}
		}
}

let t = null;

function preload() {
 //myShader = loadShader('/shader.vert', '/shader.frag');
}


function setup() {
	if (!WEBGL) 
  {
		console.error('WebGL is not available in this browser.');
	} 
  else 
  {
	  const container = select('#canvas-container');
		var cnv = createCanvas(container.width, container.height, P2D);
		cnv.parent(container);
		cnv.id('p5-canvas');
		console.log('WebGL Version: ' + webglVersion);
	}

  textAlign(CENTER, CENTER);
  gFont = loadFont("/vga8.woff");
  textFont(gFont, 14);

  calculateGrid();

	textSize(asciiScale);

	noStroke();

	describe("Little ASCII train.");

  frameRate(5);

  t = new Train(-15, randInt(8, rows - 8));
}


function draw() {
	background(6,6,6);

  //drawCharacterGrid();




  t.update();
  t.draw();
  t.drawTrackMarks();
  
  if(mouseY >= height - 25) {
		cursor(HAND);
	} else {
			cursor(ARROW);
	}
}

function mouseClicked(e) {
	if (mouseY >= height - 25) {
		const event = new CustomEvent('navigate-to');
		window.dispatchEvent(event);
	}
}

function mouseWheel(e) {
   return true;
}

function windowResized() {
	const container = select('#canvas-container');
	resizeCanvas(container.width, container.height);
}

