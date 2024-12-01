let img;

function preload() {
    img = loadImage('/src/lib/banner.png');
    if (img !== null) {
        console.log('Loaded image');
    }
}

function setup() {
    imageMode(CENTER);
    const container = select("#canvas-container");
    if (!WEBGL) {
        console.error("WebGL is not available in this browser.");
    } else {
        var cnv = createCanvas(container.width, container.height, WEBGL);
        cnv.parent(container);
        cnv.id('p5-canvas');
    }

    console.log("WebGL Version: " + webglVersion)

    describe('Banner depicting a statuette \'chilling\'.');
}

function draw() {
    background(17, 24, 39);
    cursor(HAND);

    orbitControl();

    push();
    texture(img);
    noStroke();
    plane(img.width,img.height);
    pop();

}

function mouseClicked() {
    if(mouseY <= height) {
        const event = new CustomEvent('navigate-to');
        window.dispatchEvent(event);
    }
}

function windowResized() {
    const container = select("#canvas-container");
    resizeCanvas(container.width, container.height);
}
