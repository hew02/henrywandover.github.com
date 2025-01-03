import {Matrix} from './hew.js';

export let asciiScale = null;
export let cols = null;
export let rows = null;
export let colSpacing = null;
export let rowSpacing = null;

let layerBG = [];
let layerFG = [];
let layer1 = [];
let layer2 = [];
let layer3 = [];


export function calculateGrid(p5) {
  asciiScale = Math.min(p5.width / 80, p5.height / 40);
	
  cols = Math.floor(p5.width / (asciiScale * 0.6));
	rows = Math.floor(p5.height / asciiScale);

  colSpacing = asciiScale * 0.6;
  rowSpacing = asciiScale;

  layerBG = new Matrix(rows, cols, " ");
  layerFG = new Matrix(rows, cols, " ");
}

export function spaceAvailable(x, y) {
		if(x > cols || x < 0 
				|| y > rows || y < 0) {
				return null;
		} else if (layerFG[y][x] === " ") {
				return true;
		} else {
				return false;
		}
}

export function addChar(c, col, row, color = 'palegreen') {
		if(col >= cols || col < 0 
				|| row >= rows || row < 0) {
				//console.log("attempt to add cell outside grid.");
				return false;
		} else {
				layerFG[row][col] = {
						"c": c,
						"color": color
				};
		}
		
		return true;
}

export function addCharBG(c, col, row, color = 'palegreen') {
		if(col >= cols || col < 0 
				|| row >= rows || row < 0) {
				//console.log("attempt to add cell outside grid.");
				return false;
		} else {
				layerBG[row][col] = {
						"c": c,
						"color": color
				};
		}
		
		return true;
}


/*
		* Shortcut for addChar
*/
export function addString(s, col, row, color = 'palegreen') {
	for (let c = 0; c < s.length; c++) {
		if(s[c] === " ") {continue;}
		addChar(s[c],col + c,row,color);
	}
}


export function drawBatch(p5) {
		for(let row = 0; row < rows; row++) {
				for(let col = 0; col < cols; col++) {
						if(layerFG[row][col] === " " &&
						   layerBG[row][col] === " ") {
								continue;
						}

						const x = col * colSpacing + colSpacing / 2;
						const y = row * rowSpacing + rowSpacing / 2;   					


						if(layerFG[row][col] === " ")
						{
								p5.fill(layerBG[row][col].color);
								p5.text(layerBG[row][col].c,x,y);
						} 
						else 
						{
								p5.fill(layerFG[row][col].color);
								p5.text(layerFG[row][col].c,x,y);
						}
				}
		}

			layerFG.clear();

			layerBG.clear();
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
