  window.onload = function() {
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close");

    modal.style.display = "block";

    closeBtn.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };