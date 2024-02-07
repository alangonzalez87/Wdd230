const menuToggle= document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick=function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    
}

document.addEventListener("DOMContentLoaded", function() {
    let messageElement = document.getElementById("message");
    
    // Get the current date
    let currentDate = new Date();
    let currentTimestamp = currentDate.getTime();
    
    // Get the last visit date from localStorage
    let lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");
    
    if (!lastVisitTimestamp) {
      // First visit
      messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      // Calculate the time difference in milliseconds
      let timeDifference = currentTimestamp - lastVisitTimestamp;
      let oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      
      if (timeDifference < oneDayInMilliseconds) {
        // Less than a day since the last visit
        messageElement.textContent = "Back so soon! Awesome!";
      } else {
        // Calculate the number of days between visits
        let daysDifference = Math.floor(timeDifference / oneDayInMilliseconds);
        let dayString = daysDifference === 1 ? "day" : "days";
        
        // Display the appropriate message
        messageElement.textContent = "You last visited " + daysDifference + " " + dayString + " ago.";
      }
    }
    
    // Store the current visit timestamp in localStorage
    localStorage.setItem("lastVisitTimestamp", currentTimestamp);
  });
/*membership litle scrypt for toggle */
  document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

/*scrypt fpr time stamp */
document.addEventListener('DOMContentLoaded', function() {
  
  var timestampField = document.getElementById("timestamp");
  
  // Obtiene la marca de tiempo actual
  var timestamp = new Date().toISOString();
  
  // Establece el valor del campo oculto con la marca de tiempo actual
  timestampField.value = timestamp;
});


/*modal  */

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario
  
  // Abre una nueva ventana o modal con el mensaje de confirmación
  var confirmationWindow = window.open("", "Confirmation", "width=400,height=200");
  confirmationWindow.document.write("<p>¡thanks for your message!</p>");
});


// Cuando se envíe el formulario
document.getElementById("myForm").addEventListener("submit", function(event) {
  
  // Muestra el modal
  modal.style.display = "block";

  // Restablece el formulario
  this.reset();
});


// Obtén el modal
var modal = document.getElementById("myModal");

// Verifica que el modal exista antes de intentar manipularlo
if (modal) {
  // Obtén el botón de cierre
  var closeBtn = modal.querySelector(".close");

  // Cuando se envíe el formulario
  document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío predeterminado del formulario
      
      // Muestra el modal
      modal.style.display = "block";

      // Restablece el formulario
      this.reset();
  });

  // Cuando el usuario hace clic en el botón de cierre
  if (closeBtn) {
      closeBtn.onclick = function() {
          modal.style.display = "none"; // Oculta el modal
      }
  }

  // Cuando el usuario hace clic en cualquier lugar fuera del modal, ciérralo
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none"; // Oculta el modal
      }
  }
}

  
  