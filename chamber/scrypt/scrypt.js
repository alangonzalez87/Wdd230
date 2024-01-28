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
  
  