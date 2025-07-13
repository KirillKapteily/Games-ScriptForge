const field = document.querySelector(".game_2");
const player = document.getElementById("player");
const ball = document.getElementById("ball");
const goal = document.getElementById("goal");
const scoreEl = document.getElementById("score_2");

let score_football = 0;
let speed = 2;
const enemies = [];

let playerPos = { x: 50, y: 180 };
let ballPos = { x: 200, y: 185 };
const step = 4;

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

// Generate enemies dynamically
function createEnemy(x, y) {
  const el = document.createElement("div");
  el.classList.add("enemy");
  field.appendChild(el);
  enemies.push({ el, pos: { x, y } });
  move(el, { x, y });
}

createEnemy(300, 100);
createEnemy(400, 250); // Add more if desired

function gameLoop() {
  movePlayer();
  moveEnemies();
  checkGoal();
  requestAnimationFrame(gameLoop);
}

function movePlayer() {
  if (keys.ArrowUp) playerPos.y -= step;
  if (keys.ArrowDown) playerPos.y += step;
  if (keys.ArrowLeft) playerPos.x -= step;
  if (keys.ArrowRight) playerPos.x += step;

  // Boundaries
  playerPos.x = clamp(playerPos.x, 0, field.clientWidth - 40);
  playerPos.y = clamp(playerPos.y, 0, field.clientHeight - 40);

  move(player, playerPos);

  // Ball interaction
  if (isTouching(player, ball)) {
    ballPos.x += (playerPos.x - ballPos.x) * 0.2;
    ballPos.y += (playerPos.y - ballPos.y) * 0.2;
    ballPos.x = clamp(ballPos.x, 0, field.clientWidth - 30);
    ballPos.y = clamp(ballPos.y, 0, field.clientHeight - 30);
    move(ball, ballPos);
  }
}

function moveEnemies() {
  enemies.forEach((enemy) => {
    const dx = ballPos.x - enemy.pos.x;
    const dy = ballPos.y - enemy.pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 5) {
      enemy.pos.x += (dx / dist) * speed;
      enemy.pos.y += (dy / dist) * speed;
      enemy.pos.x = clamp(enemy.pos.x, 0, field.clientWidth - 40);
      enemy.pos.y = clamp(enemy.pos.y, 0, field.clientHeight - 40);
      move(enemy.el, enemy.pos);
    }

    // Collision with player
    if (isTouching(enemy.el, player)) {
      alert("⚠️ Caught by a defender!");
      resetPositions();
    }
  });
}

function checkGoal() {
  if (isTouching(ball, goal)) {
    score_football++;
    speed += 0.3; // AI gets faster
    scoreEl.textContent = score_football;
    resetPositions();
  }
}

function move(element, pos) {
  element.style.left = `${pos.x}px`;
  element.style.top = `${pos.y}px`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function isTouching(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();
  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

function resetPositions() {
  playerPos = { x: 50, y: 180 };
  ballPos = { x: 200, y: 185 };
  move(player, playerPos);
  move(ball, ballPos);
  enemies.forEach((enemy, i) => {
    let baseX = 300 + i * 60;
    let baseY = 100 + (i % 2) * 150;
    enemy.pos = { x: baseX, y: baseY };
    move(enemy.el, enemy.pos);
  });
}

function resetGame() {
  score_football = 0;
  speed = 2;
  scoreEl.textContent = score_football;
  resetPositions();
}

gameLoop();
