const numBoids = 100
const numPredators = 5
const flock = []; // boids
const pack = []; // predators
let alignSlider, cohesionSlider, separationSlider;
let stop = true;

function setup() {
	let canvas = createCanvas(600, 400);

	alignSlider = createSlider(0, 2, 1, 0.1);
	alignSlider.position(620, 20);
	cohesionSlider = createSlider(0, 2, 1, 0.1);
	cohesionSlider.position(620, 50);
	separationSlider = createSlider(0, 2, 1, 0.1);
	separationSlider.position(620, 80);
	mouseAttractionSlider = createSlider(0, 2, 1, 0.1);
	mouseAttractionSlider.position(620, 110);

	for (let i = 0; i < numBoids; i++) {
		flock.push(new Boid)
	}

	for (let i = 0; i < numPredators; i++) {
		pack.push(new Predator)
	}

	// Pause by clicking anywhere in the canvas
	if(stop) noLoop();
	canvas.mousePressed(function() {
		stop = !stop;
		stop ? noLoop() : loop()
	})
}

function draw() {
	background(51);
	textSize(12);
	fill(0);
	text("Alignment Factor", alignSlider.x + alignSlider.width, alignSlider.y);
	

	for (let boid of flock) {
		boid.edges();
		boid.flock(flock);
		boid.update();
		boid.show();
	}

	for (let predator of pack) {
		predator.edges();
		predator.show();
	}
}
