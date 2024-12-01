var bannerImg;

function preload() {
	bannerImg = loadImage('/banner.png');
	if (bannerImg !== null) {
		console.log('Loaded image');
	}
}

function setup() {
	imageMode(CENTER);
	if (!WEBGL) {
		console.error('WebGL is not available in this browser.');
	} else {
	  const container = select('#canvas-container');
		var cnv = createCanvas(container.width, container.height, WEBGL);
		cnv.parent(container);
		cnv.id('p5-canvas');
		console.log('WebGL Version: ' + webglVersion);
	}

  cam = createCamera();
  cam.setPosition(0, 0, 800);
  cam.lookAt(0, 0, 0);

	describe("Banner depicting a statuette 'chilling'.");
}

function draw() {
	background(17, 24, 39);
	cursor(HAND);

  orbitControl(1, 1, 0);

	push();
	texture(bannerImg);
	noStroke();
	plane(bannerImg.width, bannerImg.height);
	pop();
}

function mouseClicked(e) {
	if (mouseY <= height) {
		const event = new CustomEvent('navigate-to');
		window.dispatchEvent(event);
	}
}

function mouseWheel(e) {
   return true;
}

function windowResized() {
	const container = select('#canvas-container');
	resizeCanvas(container.width, container.height);
}
