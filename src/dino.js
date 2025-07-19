    const dino = document.getElementById('dino');
    const cactus = document.getElementById('cactus');
    const startBtn = document.getElementById('startBtn');
    const gameOverText = document.getElementById('gameOver');

    let jumping = false;
    let isGameRunning = false;
    let cactusTimer;
    let gravityInterval;

    function jump() {
      if (jumping || !isGameRunning) return;

      jumping = true;
      let up = 0;

      const jumpInterval = setInterval(() => {
        if (up >= 100) {
          clearInterval(jumpInterval);
          const fallInterval = setInterval(() => {
            if (up <= 0) {
              clearInterval(fallInterval);
              jumping = false;
            } else {
              up -= 5;
              dino.style.bottom = up + 'px';
            }
          }, 20);
        } else {
          up += 5;
          dino.style.bottom = up + 'px';
        }
      }, 20);
    }

    function moveCactus() {
      let cactusLeft = 600;

      cactus.style.left = cactusLeft + 'px';

      cactusTimer = setInterval(() => {
        if (!isGameRunning) return;

        cactusLeft -= 10;
        cactus.style.left = cactusLeft + 'px';

        const dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
        const dinoLeft = 50;
        const cactusWidth = 20;

        if (
          cactusLeft < dinoLeft + 50 &&
          cactusLeft + cactusWidth > dinoLeft &&
          dinoBottom < 40
        ) {
          gameOver();
        }

        if (cactusLeft <= -20) {
          cactusLeft = 600;
        }
      }, 50);
    }

    function gameOver() {
      clearInterval(cactusTimer);
      isGameRunning = false;
      gameOverText.style.display = 'block';
    }

    function startGame() {
      gameOverText.style.display = 'none';
      dino.style.bottom = '0px';
      cactus.style.left = '600px';
      isGameRunning = true;
      moveCactus();
    }

    // Events
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') jump();
    });

    document.addEventListener('click', () => {
      if (isGameRunning) jump();
    });

    startBtn.addEventListener('click', startGame);