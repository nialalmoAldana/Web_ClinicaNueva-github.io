document.addEventListener("DOMContentLoaded", function() {
  var toggleButtons = document.getElementsByClassName("toggle-button_aaa");
  var informationDivs = document.getElementsByClassName("information_aaa");

  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function() {
      var informationDiv = this.parentNode.nextElementSibling;
      var otherInformationDivs = Array.from(informationDivs).filter(function(div) {
        return div !== informationDiv;
      });

      if (informationDiv.classList.contains("hidden_aaa")) {
        // Mostrar información seleccionada
        informationDiv.classList.remove("hidden_aaa");
        this.textContent = "-";
        
        // Ocultar otras informaciones
        otherInformationDivs.forEach(function(div) {
          div.classList.add("hidden_aaa");
          var toggleButton = div.previousElementSibling.querySelector(".toggle-button_aaa");
          toggleButton.textContent = "+";
        });
      } else {
        // Ocultar información seleccionada
        informationDiv.classList.add("hidden_aaa");
        this.textContent = "+";
      }
    });
  }
});

