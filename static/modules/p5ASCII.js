export let asciiScale = null;
export let cols = null;
export let rows = null;
export let colSpacing = null;
export let rowSpacing = null;

export function calculateGrid(p5) {
  asciiScale = Math.min(p5.width / 80, p5.height / 40);
	
  cols = Math.floor(p5.width / (asciiScale * 0.6));
	rows = Math.floor(p5.height / asciiScale);

  colSpacing = asciiScale * 0.6;
  rowSpacing = asciiScale;
}


export function drawChar(p5, c, col, row) {
		const x = col * colSpacing + colSpacing / 2;
		const y = row * rowSpacing + rowSpacing / 2;    

    p5.fill('palegreen');
		p5.text(c,x,y);
}


export function drawString(p5, s, col, row) {
	for (let c = 0; c < s.length; c++) {
		drawChar(p5,s[c],col + c,row);
	}
}
 

export function drawCharacterGrid() {
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {

			// Alternate characters for variety
			const char = (col + row) % 2 === 0 ? '#' : '@';

			drawChar(char, col, row);
		}
	}
}
