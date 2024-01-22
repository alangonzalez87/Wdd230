

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


