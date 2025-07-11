const ball = document.getElementById('ball');

let isDragging = false;

ball.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - ball.offsetWidth / 2;
    const y = e.clientY - ball.offsetHeight / 2;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
  }
});

