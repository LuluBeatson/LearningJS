class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        // this.maxAcceleration = 100;
        this.mouseForce = 1;
        this.maxForce = 1;
        this.maxSpeed = 4;
        this.perceptionRadius = 50;
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

    flock(boids) {
        // this.acceleration.set(0,0);

        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        alignment.mult(alignSlider.value());
        cohesion.mult(cohesionSlider.value());
        separation.mult(separationSlider.value());

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    // Steer to match the average velocity direction of it neighbours
    align(boids) {
        let steering = createVector();
        let numNeighbors = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && d < this.perceptionRadius) {
                steering.add(other.velocity);
                numNeighbors ++;
            }
        }
        if (numNeighbors > 0) {
            steering.div(numNeighbors);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering
    }

    // Head towards the average position of its neighbours
    cohesion(boids) {
        let perceptionRadius = 100;
        let steering = createVector();
        let numNeighbors = 0;
        for (let other of boids) {
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && d < this.perceptionRadius) {
                steering.add(other.position);
                numNeighbors ++;
            }
        }
        if (numNeighbors > 0) {
            steering.div(numNeighbors); // average location
            steering.sub(this.position) // direction towards average location
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering
    }

    // Attracted to the mouse if it is in the canvas and within perception
    attract() {
        let attractForce = createVector();
        let mousePosition = createVector(mouseX, mouseY);
        let d = dist(this.position.x, this.position.y, mousePosition.x, mousePosition.y)
        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && d < this.perceptionRadius) {
            attractForce.add(this.position);
            attractForce.sub(mousePosition);
            attractForce.limit(this.maxForce);
        }
        return attractForce
    }

    //
    separation(boids) {
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
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
    
    update() {
        let attractForce = this.attract();

        attractForce.mult(mouseAttractionSlider.value());

        this.acceleration.sub(attractForce);
        // this.acceleration.limit(this.maxAcceleration);
        // this.velocity.sub(attractForce);
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
        
    }

    show() {
        strokeWeight(4);
        stroke(255);
        point(this.position.x, this.position.y);
    }

}

class Predator {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 1;
        this.maxSpeed = 4;
        this.perceptionRadius = 50;
        
        this.energy = 500;
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
    
    hunt(boids) {
        let steering = createVector();
    }

    update() {
        if (this.energy > 0) {

        }
    }

    show() {
        strokeWeight(8);
        stroke(255, 100, 100);
        point(this.position.x, this. position.y);
    }
}