import {addChar, spaceAvailable} from './p5ASCII.js';
import * as hw from './hew.js';
import {Pixel} from './pixel.js';

class SmokePixel extends Pixel {
		constructor(x, y, vX = 0, spawnMod = 0.0) {
				super(x, y);

				this.c = "ó";
				this.age = 0;

				this.vX = vX;

				this.lifetime = hw.randInt(12, 15);

				this.dead = false;
				
				this.spawn = false;
				this.spawnMod = spawnMod;
		}

		draw() {
				this.pos = addChar(this.c, this.x, this.y, 'gray');
		}

		update() {
				let shouldSpawn = false;

				if(this.age < 2) {
						shouldSpawn = Math.random() < (0.5 + this.spawnMod);
				}
				else if(this.age < (this.lifetime * 0.7) && this.age > 2) {
						shouldSpawn = Math.random() < (0.01);
						this.c = "Ő";
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
				this.x = moveX ? this.x - this.vX : this.x;


				this.age++;
		}
}

// global
let smokePixels = [];
let smokeClouds = [];

class SmokeCloud {
		constructor(maxSize) {
				this.maxSize = maxSize;
				this.totalPixels = 0;
				this.pixels = [];
		}

		add(x, y) {
				let _x = x;
				let _y = y;

				if(spaceAvailable(x, y)) {

				} 
				else if(spaceAvailable(x-1, y)) {
						_x = _x - 1;
				} 
				else if(spaceAvailable(x+1, y)) {
						_x = _x + 1;
				}
				else {
						return;
				}

					this.totalPixels.push(
							new SmokePixel(_x, _y, -0.05)
					);

		}

}



export class SmokePlume {
		constructor(startX, startY, velocityX = 0) {
				this.x = startX;
				this.y = startY;

				this.velocityX = velocityX;

				this.frameTimer = 0;
				this.frameDuration = 3;

				this.newSmokePixels = [];

				this.spawner = new SmokePixel(this.x, this.y);
		}

		addSmoke(x, y) {
				let _x = x;
				let _y = y;

				if(spaceAvailable(x, y)) {

				} 
				else if(spaceAvailable(x-1, y)) {
						_x = _x - 1;
				} 
				else if(spaceAvailable(x+1, y)) {
						_x = _x + 1;
				}
				else {
						return;
				}

					this.newSmokePixels.push(
							new SmokePixel(_x, _y, this.velocityX, -0.05)
					);

					smokePixels.push(
							new SmokePixel(_x, _y, this.velocityX, -0.05)
					);
		}


		draw() 
		{
		  this.spawner.draw();
		}

		update(p5) {
				if(p5 == null) {
						console.log("Pass the `p5` object.");
						return;
				}

				//console.log(smokeClouds.length);

				this.frameTimer = (this.frameTimer + 1) % (this.frameDuration * 3);




				this.x = this.x + this.velocityX;
				this.spawner.x = this.x;


					// from spawner
					if(this.frameTimer < this.frameDuration * 3)
					{
						this.addSmoke(this.x + 1, this.y);
						this.spawner.c = "O";
					}	 
					else 
					{
						this.spawner.c = "o";
						
						/*if(this.newSmokePixels.length != 0) {
								let x = new SmokeCloud(40);
								x.pixels = this.newSmokePixels;
								smokeClouds.push(x);
						}*/
					}
		}
}

function addSmoke(x, y, vX) {
		let _x = x;
		let _y = y;

		if(spaceAvailable(x, y)) {

		} 
		else if(spaceAvailable(x-1, y)) {
				_x = _x - 1;
		} 
		else if(spaceAvailable(x+1, y)) {
				_x = _x + 1;
		}
		else {
				return;
		}

			smokePixels.push(
					new SmokePixel(_x, _y, vX)
			);
}

export function updateAllSmokePixels() {
		const l = smokePixels.length;

		for(let i = 0; i < l; i++) {
				smokePixels[i].update();

				if(smokePixels[i].spawn) {
						addSmoke(
								smokePixels[i].x, 
								smokePixels[i].y,
								smokePixels[i].vX
						);
				}
		}	

		for(let i = l - 1; i >= 0; i--) {
				if(smokePixels[i].dead 
						|| smokePixels[i].x < 0 // cull
						|| smokePixels[i].y < 0) {
						smokePixels.splice(i,1);
				}
		}	

		//console.log("Number of smoke particles: " + l);
}



export function drawAllSmokePixels() {
		const l = smokePixels.length;
		for(let i = 0; i < l; i++) {
				smokePixels[i].draw();

		}	
}
