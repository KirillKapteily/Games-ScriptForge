  window.onload = function() {
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close");
    let input_welcome = document.querySelector("welcome_input");
    let username = document.querySelector(".user_name")

    modal.style.display = "block";

    welcome_input.textContent = username.textContent

    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  // let promptText = prompt("What's your name?");
// document.querySelector('.user_name').textContent = promptText;