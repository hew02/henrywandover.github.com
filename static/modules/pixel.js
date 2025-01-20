import {addChar, spaceAvailable} from './p5ASCII.js';

export class Pixel {
		constructor(x, y) {
				this.x = x;
				this.y = y;
				this.c = " ";
				this.color = "palegreen";
				this.layer = 2;
		}

		draw() {
				this.pos = addChar(this.c, this.x, this.y, this.color, this.layer);
		}

		update() {

		}
}
