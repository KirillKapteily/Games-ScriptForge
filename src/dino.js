const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;

function jump() {
  if (isJumping) return;
  isJumping = true;

  let upInterval = setInterval(() => {
    let bottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    if (bottom >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        bottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
        if (bottom <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          dino.style.bottom = bottom - 10 + "px";
        }
      }, 20);
    } else {
      dino.style.bottom = bottom + 10 + "px";
    }
  }, 20);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") jump();
});

document.addEventListener("click", () => {
  jump();
});

setInterval(() => {
  const dinoBox = dino.getBoundingClientRect();
  const cactusBox = cactus.getBoundingClientRect();

  if (
    cactusBox.left < dinoBox.right &&
    cactusBox.right > dinoBox.left &&
    cactusBox.bottom > dinoBox.top
  ) {
    alert("💀 Game Over!");
    location.reload();
  }
}, 10);
