// TO-DO: PLOTAR A FUNÇÂO PARAMETRICA E TRANSLADAR

const ESCALA = 50,
  HEIGHT = 480;
let width,
  angle = 0,
  points = [];

function cicloide(raio, distancia) {
  line(-width, raio, width, raio);

  fill(255);
  circle(0, 0, 2 * raio);

  noFill();
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let pos = points[i];
    vertex(pos.x - points.length + i, pos.y);
  }
  endShape();

  let x = 0,
    y = 0,
    dx = (raio + distancia) * cos(angle + PI / 2),
    dy = (raio + distancia) * sin(angle + PI / 2);

  fill(209, 156, 29);
  circle(x + dx, y + dy, 10);

  if (animation) {
    let v = createVector(x + dx, y + dy);
    points.push(v);
  }

  if (points.length > 1000) {
    points.splice(0, 1);
  }
}

function setup() {
  width = windowWidth;
  let canvas = createCanvas(width, HEIGHT);
  canvas.parent("simulator");
  textSize(16);
}

function draw() {
  background(255);

  fill(0, 0, 0, 60);
  text(`frameRate: ${parseInt(frameRate())}`, 10, 25);

  translate(width / 2, HEIGHT / 2);

  let raio = document.getElementById("range-raio").value,
    distancia = document.getElementById("range-distancia").value,
    velocidade = document.getElementById("range-velocidade").value;

  cicloide(raio * ESCALA, distancia * ESCALA, velocidade);

  if (animation) {
    angle += 0.0065;
  }
}
