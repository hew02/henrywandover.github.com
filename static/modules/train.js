import {calculateGrid, asciiScale, rows, cols, addChar, addString} from './p5ASCII.js';
 
import * as hw from './hew.js';

export class Train {
		constructor(x, y) {
				this.x = x;
				this.y = y;
				this.speed = 1;

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
				// random spawn
				/*if(this.x > cols + 30) {
						this.x = -15;
						this.y = hw.randInt(8, rows - 8);
				}*/
				if(this.x > cols + 15) {
						this.x = -15;
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

		draw() {

		  const x = this.x;
		  const y = this.y;


				addString("_╗__", x, y-3, 'palegreen', 2);
				addString("| ☻|____T_", x, y-2, 'palegreen', 2);
				addString("|_―|_©HW_|►", x, y-1, 'palegreen', 2);
		 
			if(this.frameTimer < this.frameDuration * 1.5) {
				addString("  O-O-O-øø\\", x, y, 'palegreen', 2);
			} else {
				addString("  ⌀-⌀-⌀-oo\\", x, y, 'palegreen', 2);
			}
      


			/*text("o O___ _________\
		 _][__|o| |O O O O|\
		<_______|-|_______|\
		 /O-O-O     o   o", trainX, height - 40, 100);*/

		}


		drawTrackMarks() {
			for (let mark = 0; mark < this.trackMarks.length; mark++) {
					addChar("_", this.trackMarks[mark].x, this.trackMarks[mark].y, 'palegreen', 3);
			}
		}
}
