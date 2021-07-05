class Predator {
    constructor() {
        if (keyIsDown(80)) {
            this.position = createVector(mouseX, mouseY);
        } else {
            this.position = createVector(random(width), random(height));
        }
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 1;
        this.maxSpeed = 4;
        this.perceptionRadius = 100;
        this.eatRadius = 2;
        
        this.energy = 1000;
    }

    // wrap the world on a torus
    edges() {
        if (this.position.x > width) {
            this.position.x = this.position.x - width;
        } else if (this.position.x < 0) {
            this.position.x = width + this.position.x;
        }

        if (this.position.y > height) {
            this.position.y = this.position.y - height;
        } else if (this.position.y < 0) {
            this.position.y = height + this.position.y;
        }
        // if (this.position.x > width) {
        //     this.position.x = 0;
        //   } else if (this.position.x < 0) {
        //     this.position.x = width;
        //   }
        //   if (this.position.y > height) {
        //     this.position.y = 0;
        //   } else if (this.position.y < 0) {
        //     this.position.y = height;
        //   }
    }
    
    flock(pack) {
    
        let separation = this.separation(pack);

        separation.mult(1.3); // difficult to tune but this value works well

        this.acceleration.add(separation);
    }

    //
    separation(pack) {
        let steering = createVector();
        let total = 0;
        for (let other of pack) {
          let d = dist(
            this.position.x,
            this.position.y,
            other.position.x,
            other.position.y
          );
          if (other != this && d < this.perceptionRadius) {
            let diff = p5.Vector.sub(this.position, other.position);
            diff.div(d);
            steering.add(diff);
            total++;
          }
        }
        if (total > 0) {
          steering.div(total);
          steering.setMag(this.maxSpeed);
          steering.sub(this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
    }

    // steer towards the nearest boid
    hunt(boids) {
        let steering = createVector();
        let numPrey = 0;
        for (let boid of boids) {
            let d = dist(this.position.x, this.position.y, boid.position.x, boid.position.y);
            if (d < this.perceptionRadius) {
                steering.add(boid.position);
                numPrey ++;
            }
        }
        if (numPrey > 0) {
            steering.div(numPrey); // average location
            steering.sub(this.position) // direction towards average location of nearby prey
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        this.acceleration.add(steering)
    }

    // remove boids that the predator is near enough
    eat(boids) {
        for (let boid of boids) {
            let d = dist(this.position.x, this.position.y, boid.position.x, boid.position.y);
            if (d < this.eatRadius) {
                boids.pop(boid);
                this.energy += boid.energy;
                console.log("Boids eaten by predator");
            }
        }
    }

    update(pack) {
        if (this.energy > 0) {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);

            this.acceleration.mult(0);
            this.energy -= 1;
        } else {
            pack.pop(this);
            console.log("Predators died of hunger!");
        }
    }

    show() {
        strokeWeight(8);
        stroke(255, 100, 100);
        point(this.position.x, this.position.y);
    }
}