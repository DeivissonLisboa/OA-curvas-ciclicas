// TO-DO: PLOTAR A FUNÇÂO PARAMETRICA E TRANSLADAR

const ESCALA = 50,
  WIDTH = 720,
  HEIGHT = 480;

let angle = 0;

function cicloide(raio, distancia) {
  line(-width, raio, width, raio);

  fill(255);
  circle(0, 0, 2 * raio);

  let x = 0,
    y = 0,
    dx = (raio + distancia) * cos(angle + PI / 2),
    dy = (raio + distancia) * sin(angle + PI / 2);

  fill(255, 215, 0);
  circle(x + dx, y + dy, 10);

  if (animation) {
  }
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  textSize(16);
}

function draw() {
  background(255);

  translate(width / 2, HEIGHT / 2);

  let raio = document.getElementById("range-raio").value,
    distancia = document.getElementById("range-distancia").value,
    velocidade = document.getElementById("range-velocidade").value;

  cicloide(raio * ESCALA, distancia * ESCALA);

  if (animation) {
    angle += 0.005 * velocidade;

    fill(0, 0, 0, 50);
    text(
      `frameRate: ${parseInt(frameRate())}`,
      -WIDTH / 2 + 10,
      -HEIGHT / 2 + 25
    );
  }
}
