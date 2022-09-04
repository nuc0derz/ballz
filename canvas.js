const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.initialRadius = radius;
    this.colors = ["#323050", "#21445B", "#1A6566", "#5D8A66"];
    this.color = this.colors[Math.floor(Math.random() * 4)];

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.fill();
    };

    this.update = function () {
      if (this.x <= 0 + this.radius || this.x >= canvas.width - this.radius)
        this.dx = -this.dx;
      if (this.y <= 0 + this.radius || this.y >= canvas.height - this.radius)
        this.dy = -this.dy;
      this.x += this.dx;
      this.y += this.dy;

      if (
        mouse.x - this.x < 100 &&
        mouse.x - this.x > -100 &&
        mouse.y - this.y < 100 &&
        mouse.y - this.y > -100
      ) {
        this.radius += this.radius < 50 ? 2 : 0;
      } else if (this.radius > this.initialRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  }
}

var circle1 = new Circle(100, 75, 4, 4, 30);
var circles = [];
for (var i = 0; i < 300; i++) {
  let x = Math.random() * (canvas.width - 60) + 30;
  let y = Math.random() * (canvas.height - 60) + 30;
  let dx = Math.random() * 2;
  let dy = Math.random() * 2;
  let radius = Math.random() * 10 + 1;
  circles.push(new Circle(x, y, dx, dy, radius));
}
console.log(circles);
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "#45214A";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle) => circle.update());
}

animate();
