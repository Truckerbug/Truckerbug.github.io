const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Add a new point to the trail
  points.push({ x, y });

  // Limit the number of points for performance
  points = points.slice(-20);

  ctx.clearRect(0, 0, width, height);

  // Draw the trail
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];

    ctx.beginPath();
    ctx.moveTo(current.x, current.y);
    ctx.lineTo(next.x, next.y);
    ctx.strokeStyle = "white"; // Trail color
    ctx.lineWidth = 2; // Trail thickness
    ctx.stroke();
  }

  // Draw the star
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2); // Star size and shape
  ctx.fillStyle = "yellow"; // Star color
  ctx.fill();
});
