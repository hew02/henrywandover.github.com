import {addChar, spaceAvailable} from './p5ASCII.js';

export class Pixel {
		constructor(x, y) {
				this.x = x;
				this.y = y;
				this.c = " ";
		}

		draw() {
				this.pos = addChar(this.c, this.x, this.y);
		}

		update() {

		}
}
