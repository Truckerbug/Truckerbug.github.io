// Set initial cursor style to a dot
document.body.style.cursor = "none"; // This hides the default cursor

// Create a custom cursor element
const cursor = document.createElement("div");
cursor.id = "custom-cursor";
cursor.style.position = "absolute";
cursor.style.top = "0";
cursor.style.left = "0";
cursor.style.width = "5px";
cursor.style.height = "5px";
cursor.style.borderRadius = "50%";
cursor.style.backgroundColor = "white";
cursor.style.pointerEvents = "none"; // Prevent the cursor from interacting with elements

document.body.appendChild(cursor);


const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

const fallSpeed = 5; // Adjust for desired falling speed
const minimumSpacing = 50; // Adjust for desired spacing between stars
const rotationSpeed = .015; // Adjust for base rotation speed

window.addEventListener("mousemove", (event) => {
  cursor.style.top = event.clientY + "px";
  cursor.style.left = event.clientX + "px";

  const x = event.clientX;
  const y = event.clientY;

  // Check if there are any existing points
  if (!points.length) {
    points.push({ x, y, timestamp: Date.now(), rotation: Math.random() * Math.PI * 2 }); // Add first star with random rotation
    return;
  }

  // Calculate distance between the current and last point
  const lastPoint = points[points.length - 1];
  const distance = Math.sqrt(Math.pow(x - lastPoint.x, 2) + Math.pow(y - lastPoint.y, 2));

  // Add a new star only if the distance is greater than the minimum spacing
  if (distance > minimumSpacing) {
    points.push({ x, y, timestamp: Date.now(), rotation: Math.random() * Math.PI * 2 }); // Add new star with random rotation
  }
});

window.addEventListener("click", (event) => {
  // Add a star on every click
  points.push({
    x: event.clientX,
    y: event.clientY,
    timestamp: Date.now(),
    rotation: Math.random() * Math.PI * 2, // Random rotation
  });
});

const maxStars = 20; // Adjust the maximum number of stars
let currentStarCount = 0;
  

window.requestAnimationFrame(draw);

function draw() {
  ctx.clearRect(0, 0, width, height);

  // Loop through points and update their positions
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const elapsedTime = (Date.now() - point.timestamp) / 1000; // Time in seconds
    const opacity = 1 - elapsedTime; // Fading factor based on time

    if (opacity > 0) { // Only draw visible stars
      point.y += fallSpeed * elapsedTime; // Update y position for falling

      // Update rotation based on elapsed time and adjusted rotation speed
      point.rotation += (rotationSpeed + (1 - elapsedTime) * rotationSpeed) * elapsedTime; // Gradually decreasing rotation speed

      // Draw the star emoji with adjusted properties
      ctx.save();
      ctx.translate(point.x, point.y);
      ctx.rotate(point.rotation); // Apply accumulated rotation
      ctx.scale(1, 1); // No scaling in this version
      ctx.font = `20px sans-serif`; // Adjust font size as desired
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White with adjustable opacity
      ctx.fillText("⭐", 0, 0);
      ctx.restore();
    }
  }

  // Remove old points after 2 seconds
  points = points.filter(point => (Date.now() - point.timestamp) < 2000);

  window.requestAnimationFrame(draw);
}
