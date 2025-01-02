import {addChar, spaceAvailable} from './p5ASCII.js';
import * as hew from './hew.js';

class SmokePixel {
		constructor(x, y, spawnMod = 0.0) {
				this.x = x;
				this.y = y;
				this.c = "o";
				this.age = 0;

				this.lifetime = hew.randInt(6, 15);

				this.dead = false;
				
				this.spawn = false;
				this.spawnMod = spawnMod;
		}

		draw() {
				this.pos = addChar(this.c, this.x, this.y);
		}

		update(vX) {
				let shouldSpawn = false;

				if(this.age < 1) {
						shouldSpawn = Math.random() < (0.15 + this.spawnMod);
				}
				else if(this.age < 10 && this.age > 2) {
						shouldSpawn = Math.random() < (0.02);
						this.c = "O";
				} 
				else {
						this.c = "o";
				}

				if(this.age >= this.lifetime) {
						this.dead = true;
				}

				this.spawn = shouldSpawn ? true : false;

				const moveUp = Math.random() < 0.5;
				const moveX = Math.random() < 0.9;
				this.y = moveUp ? this.y - 1 : this.y;
				this.x = moveX ? this.x - vX : this.x;


				this.lifetime++;
		}
}

export class SmokePlume {
		constructor(startX, startY, velocityX) {
				this.x = startX;
				this.y = startY;

				this.velocityX = velocityX;

				this.frameTimer = 0;
				this.frameDuration = 3;

				this.spawner = new SmokePixel(this.x, this.y);
				this.pixels = [];
		}

		addSmoke(x, y) {
				if(spaceAvailable) {
					this.pixels.push(
							new SmokePixel(x, y, -0.05)
					);
				} else {
					this.pixels.push(
							new SmokePixel(x+1, y, -0.05)
					);
				}
		}
		
		draw() {
				this.spawner.draw();

			// from spawner
			if(this.frameTimer < this.frameDuration * 1.25) {
				this.addSmoke(this.x, this.y - 1);
				this.spawner.c = "O";
			} else {
				this.spawner.c = "o";
			}

				const l = this.pixels.length;
				for(let i = 0; i < l; i++) {
						this.pixels[i].draw();
						if(this.pixels[i].spawn) {
								this.addSmoke(
										this.pixels[i].x, 
										this.pixels[i].y
								);
						}
				}	
		}

		update(p5) {
				this.frameTimer = (this.frameTimer + 1) % (this.frameDuration * 3);

				this.x = this.x + this.velocityX;
				this.spawner.x = this.x;

				const l = this.pixels.length;
				for(let i = 0; i < l; i++) {
						this.pixels[i].update(this.velocityX);
				}	

				for(let i = l - 1; i >= 0; i--) {
						if(this.pixels[i].dead 
								|| this.pixels[i].x < 0 // cull
						    || this.pixels[i].y < 0) {
								this.pixels.splice(i,1);
						}
				}	


				console.log("Number of smoke particles: " + l);
		}
}

export function fallingPixel(x, y) {

}
