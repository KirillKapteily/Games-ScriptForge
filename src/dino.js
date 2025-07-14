// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");
// const scoreText = document.getElementById("score");
// const startBtn = document.getElementById("startBtn");

// let score = 0;
// let isJumping = false;
// let gameOver = false;
// let gameLoop_dino = null;

// // Jump on mouse click
// function jump() {
//   if (isJumping || gameOver || !gameLoop_dino) return;
//   isJumping = true;
//   let top = parseInt(getComputedStyle(dino).bottom);

//   let upInterval = setInterval(() => {
//     if (top >= 100) {
//       clearInterval(upInterval);
//       let downInterval = setInterval(() => {
//         if (top <= 0) {
//           clearInterval(downInterval);
//           isJumping = false;
//         }
//         top -= 5;
//         dino.style.bottom = top + "px";
//       }, 20);
//     } else {
//       top += 5;
//       dino.style.bottom = top + "px";
//     }
//   }, 20);
// }

// // Move cactus
// function moveCactus() {
//   let cactusLeft = parseInt(getComputedStyle(cactus).left);

//   if (cactusLeft <= -20) {
//     cactus.style.left = "600px";
//     score++;
//     scoreText.innerText = `Score: ${score}`;
//   } else {
//     cactus.style.left = cactusLeft - 5 + "px";
//   }

//   // Collision detection
//   let dinoBottom = parseInt(getComputedStyle(dino).bottom);
//   if (cactusLeft <= 90 && cactusLeft >= 50 && dinoBottom < 40) {
//     alert("Game Over! Final Score: " + score);
//     gameOver = true;
//     clearInterval(gameLoop_dino);
//     gameLoop_dino = null;
//   }
// }

// // Start game
// startBtn.addEventListener("click", () => {
//   if (gameLoop_dino) return;

//   // Reset game state
//   cactus.style.left = "600px";
//   dino.style.bottom = "0px";
//   score = 0;
//   scoreText.innerText = "Score: 0";
//   gameOver = false;

//   // Start loop
//   gameLoop_dino = setInterval(moveCactus, 30);
// });

// // Click to jump
// document.addEventListener("click", (e) => {
//   if (e.target.id !== "startBtn") jump();
// });
