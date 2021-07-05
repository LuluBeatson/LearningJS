class Food {
    constructor() {
        this.position = createVector(mouseX, mouseY);
        this.nutrients= 100;
    }

    show() {
        strokeWeight(2);
        stroke(100, 255, 100);
        point(this.position.x, this.position.y);
    }
}
