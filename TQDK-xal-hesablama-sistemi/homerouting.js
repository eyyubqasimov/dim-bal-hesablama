document.addEventListener("DOMContentLoaded", function() {
    let chooseButton = document.querySelector(".choose");
    chooseButton.addEventListener("click", function() {
      let selectedGroup = document.getElementById("groups").value;
      window.location.href = selectedGroup + ".html"; 
    });
  });
  