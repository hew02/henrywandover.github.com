import { randInt, print } from '.hew.js';
import * as rogue from '../nSlash/nSlash.js';
import { Train } from './train.js';
import { SmokePlume, drawAllSmokePixels, updateAllSmokePixels } from './physics.js';
import { Chicken } from './chicken.js';

let t = null;
let s = null;
let f = null;

let spawnNewPlume = false;

function SetupTrainScene( p5 ) {
		p5.describe("Little ASCII train.");
		t = new Train(-15, 29);
}

function RunTrainScene( p5 ) {
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

}


		drawAllSmokePixels();


		//t.drawTrackMarks(p5);

let sim = new rogue.Rogue();

sim.Add( new Chicken( 3, sim.rows - 4) );

var sketch = sim.Start();

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
