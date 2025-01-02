var bannerImg;
var myShader;

var options = {
   disableTouchActions: true,
   freeRotation: false
};

function preload() {
	bannerImg = loadImage('/banner.png');
	if (bannerImg !== null) {
		console.log('Loaded image');
	}

  myShader = loadShader('/shader.vert', '/shader.frag');
}

function setup() {
	if (!WEBGL) 
  {
		console.error('WebGL is not available in this browser.');
	} 
  else 
  {
	  const container = select('#canvas-container');
		var cnv = createCanvas(container.width, container.height, WEBGL);
		cnv.parent(container);
		cnv.id('p5-canvas');
		console.log('WebGL Version: ' + webglVersion);
	}

	imageMode(CENTER);
  textureMode(NORMAL);

	noStroke();

  cam = createCamera();
  cam.setPosition(0, 0, 800);
  cam.lookAt(0, 0, 0);

	describe("Banner depicting a statuette 'chilling'.");
}

function draw() {
	background(6, 6, 6);
	cursor(HAND);



  orbitControl(1, 1, 0, options);

	push();
  texture(bannerImg);
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
