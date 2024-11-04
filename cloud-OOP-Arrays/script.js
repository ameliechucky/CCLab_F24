let x;
let y;
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(220);
    drawCloud(x, y, 100);
    move();
}

function drawCloud(u, v, s) {
    push();
    translate(u, v);
    noStroke();
    circle(0, 0, s);
    for (let a = 0; a < 2 * PI; a += PI / 6) {
        push();
        translate(0, 0);
        rotate(a);
        circle(s * 0.5, s * 0.3, s * 0.5);
        pop();
    }
    fill(0);
    circle(-s * 0.3, 0, s * 0.05);
    circle(s * 0.3, 0, s * 0.05);
    arc(0, 0, s * 0.3, s * 0.3, 0, PI);
    pop();
}

function move() {
    x += random(-5, 5);
    y += random(-3, 3);
}

