const field = document.getElementById("field");
const ball = document.getElementById("ball");

let isTracking = false;
let lastMousePos = { x: 0, y: 0 };
let speedLimit = 20;

field.addEventListener("mousemove", (e) => {
  const fieldRect = field.getBoundingClientRect();

  const mouseX = e.clientX - fieldRect.left;
  const mouseY = e.clientY - fieldRect.top;

  const dx = e.clientX - lastMousePos.x;
  const dy = e.clientY - lastMousePos.y;
  const speed = Math.sqrt(dx * dx + dy * dy);

  if (isTracking && speed < speedLimit) {
    // Limit ball to field bounds
    const maxX = field.clientWidth - ball.offsetWidth;
    const maxY = field.clientHeight - ball.offsetHeight;

    const newX = Math.max(0, Math.min(mouseX - ball.offsetWidth / 2, maxX));
    const newY = Math.max(0, Math.min(mouseY - ball.offsetHeight / 2, maxY));

    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
  }

  lastMousePos = { x: e.clientX, y: e.clientY };
});

ball.addEventListener("mouseenter", () => {
  isTracking = true;
});

ball.addEventListener("mouseleave", () => {
  isTracking = false;
});
