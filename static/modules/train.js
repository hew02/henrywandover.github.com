import {calculateGrid, asciiScale, rows, cols, drawChar, drawString} from './p5ASCII.js';
 
import {randInt} from './hew.js';

export class Train {
		constructor(x, y) {
				this.x = x;
				this.y = y;
				this.speed = 2;

				this.frameTimer = 0;
				this.frameDuration = 3;

				this.trackMarks = [
						{
								"x": x,
								"y": y
						}
				]
		}

		update() {
				if(this.x > cols + 30) {
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

				if (this.trackMarks.length > 2000) {
						this.trackMarks.shift();
				}
		}

		draw(p5) {

		  const x = this.x;
		  const y = this.y;



				//drawString("oooo", x-3, y-5);
				//drawString("   o", x-2, y-4);


		   


				drawString(p5, "_╗__", x, y-3);
				drawString(p5, "| ☻|____T_", x, y-2);
				drawString(p5, "|_―|_©HW_|≤", x, y-1);
		 
			if(this.frameTimer < this.frameDuration * 1.5) {
				drawString(p5, "  O-O-O-øø\\", x, y);
			} else {
				drawString(p5, "  ⌀-⌀-⌀-oo\\", x, y);
			}
      


			/*text("o O___ _________\
		 _][__|o| |O O O O|\
		<_______|-|_______|\
		 /O-O-O     o   o", trainX, height - 40, 100);*/

		}


		drawTrackMarks(p5) {
			for (let mark = 0; mark < this.trackMarks.length; mark++) {
					drawChar(p5, "_", this.trackMarks[mark].x, this.trackMarks[mark].y);
			}
		}
}
