const numBoids = 200;
const numPredators = 5;
const flock = []; // boids
const pack = []; // predators
const food = [];
let alignSlider, cohesionSlider, separationSlider;
let stop = true;

function setup() {
	console.log("Click anywhere an the canvas to start or pause the simulation.\nHold p, b or f while clicking to add a predator, boid or food.")

	let canvas = createCanvas(750, 750);

	alignSlider = createSlider(0, 2, 1, 0.1);
	alignSlider.position(20, 20);
	cohesionSlider = createSlider(0, 2, 1, 0.1);
	cohesionSlider.position(20, 50);
	separationSlider = createSlider(0, 2, 1, 0.1);
	separationSlider.position(20, 80);
	mouseAttractionSlider = createSlider(-1, 1, 0, 0.1);
	mouseAttractionSlider.position(20, 110);

	// create a flock of boids
	for (let i = 0; i < numBoids; i++) {
		flock.push(new Boid);
	}

	// create a pack of predators
	for (let i = 0; i < numPredators; i++) {
		pack.push(new Predator);
	}

	// Pause by clicking anywhere in the canvas
	if(stop) noLoop();
	canvas.mousePressed(function() {
		if (keyIsDown(70)) {
			f = new Food;
			food.push(f);
			f.show();
		} else if (keyIsDown(80)) {
			p = new Predator;
			pack.push(p);
			p.show();
		} else if (keyIsDown(66)) {
			b = new Boid;
			flock.push(b);
			b.show();
		} else {
			stop = !stop;
			stop ? noLoop() : loop()
		}
	})
}

function draw() {
	background(51);
	textSize(12);
	noStroke();
	text("Boid Alignment Factor", alignSlider.x + alignSlider.width, alignSlider.y);
	text("Boid Cohesion Factor", cohesionSlider.x + cohesionSlider.width, cohesionSlider.y);
	text("Boid Separation Factor", separationSlider.x + separationSlider.width, separationSlider.y);
	text("Boid Pointer Attraction Factor", mouseAttractionSlider.x + mouseAttractionSlider.width, mouseAttractionSlider.y);
	

	for (let boid of flock) {
		boid.edges();
		boid.flock(flock);
		boid.flee(pack);
		boid.scavenge(food);
		boid.eat(food);
		boid.update(flock);
		boid.show();
	}

	for (let predator of pack) {
		predator.edges();
		predator.hunt(flock);
		predator.eat(flock);
		predator.flock(pack);
		predator.update(pack);
		predator.show();
	}

	for (let bit of food) {
		bit.show();
	}
}
