

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const h1 =document.querySelector('h1')
    const darkModeToggle = document.getElementById('toggle');
   

    darkModeToggle.onclick = function() {
        darkModeToggle.classList.toggle('active');
        body.classList.toggle("active");
        h1.classList.toggle('active')
    };
});
const menuToggle= document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick=function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contador de visitas desde localStorage
    let visitCount = localStorage.getItem("visitCount");
    
    // Verificar si es la primera visita o si visitCount no está definido
    if (!visitCount) {
      visitCount = 1;
    } else {
      visitCount = parseInt(visitCount) + 1; // Incrementar el contador de visitas
    }
    
    // Actualizar el contador de visitas en la página
    document.getElementById("visit-count").textContent = visitCount;
    
    // Guardar el nuevo contador de visitas en localStorage
    localStorage.setItem("visitCount", visitCount.toString());
  });
  


