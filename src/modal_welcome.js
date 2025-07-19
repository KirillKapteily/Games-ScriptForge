  window.onload = function() {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close");
    const submitBtn = document.querySelector(".button_modal");
    const nameInput = document.querySelector(".welcome_input");
    const welcomeMessage = document.querySelector(".user_name");

    // Show modal on page load
    modal.style.display = "block";

    // Close modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    // Submit name
    submitBtn.onclick = function() {
      const name = nameInput.value.trim();
      if (name) {
        welcomeMessage.textContent = `${name}`;
        modal.style.display = "none";
      } else {
        alert("Please enter your name!");
      }
    };
  };
