import { Matrix } from './hew.js';

export let asciiScale = null;
export let cols = null;
export let rows = null;
export let colSpacing = null;
export let rowSpacing = null;

let layer1 = [];
let layer2 = [];

export let entities = [];

export function calculateGrid(p5) {
	asciiScale = Math.min(p5.width / 80, p5.height / 40);

	cols = Math.floor(p5.width / (asciiScale * 0.6));
	rows = Math.floor(p5.height / asciiScale);

	colSpacing = asciiScale * 0.6;
	rowSpacing = asciiScale;

	layer1 = new Matrix(rows, cols, " ");
	layer2 = new Matrix(rows, cols, " ");
}

export function spaceAvailable(x, y, layer_num = 1) {
	if (x > cols || x < 0
		|| y > rows || y < 0) {
		return null;
	}

	switch(layer_num) {
		case 1: if (layer1[y][x] == " ") {return true;} break;
		case 2: if (layer2[y][x] == " ") {return true;} break;
		default: return false;
	}
}

export function addChar(c, col, row, color = 'palegreen', layer_num = 1) {
	if (col >= cols || col < 0
		|| row >= rows || row < 0) {
		return false;
	} else {		
		switch(layer_num) {
			case 1: layer1[row][col] = {"c": c,"color": color}; break;
			case 2: layer2[row][col] = {"c": c,"color": color}; break;
			default: console.log("Pass a reference");
		}
	}

	return true;
}


/*
		* Shortcut for addChar
*/
export function addString(s, col, row, color = 'palegreen', layer_num = 1) {
	for (let c = 0; c < s.length; c++) {
		if (s[c] == " ") { continue; }
		addChar(s[c], col + c, row, color, layer_num);
	}
}


export function drawBatch(p5) {
	p5.background(6, 6, 6);

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const x = col * colSpacing + colSpacing / 2;
			const y = row * rowSpacing + rowSpacing / 2;

			if (layer1[row][col] != " ") {
				if ( layer2[row][col] != " ") {
					p5.fill(p5.lerpColor(p5.color(layer1[row][col].color), p5.color(0), 0.33));
				} else {
					p5.fill(layer1[row][col].color);
				}
				p5.text(layer1[row][col].c, x, y);
			}
			if (layer2[row][col] != " ") {
				p5.fill(layer2[row][col].color);
				p5.text(layer2[row][col].c, x, y);
			}
		}
	}

	layer1.clear();
	layer2.clear();
}



export function drawCharacterGrid() {
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {

			// Alternate characters for variety
			const char = (col + row) % 2 === 0 ? '#' : '@';

			addChar(char, col, row);
		}
	}
}
