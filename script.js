
//burger menu
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {// display block roll down
      x.style.display = "block";
    }
  }

// slider -----------------------------
// slideindex -- witch one picture i want to start slider
let slideIndex = 1;
showSlides(slideIndex);
//next slider
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// to show slides
function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}  
   
   if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  

  dots[slideIndex-1].className += " active";
}
//modal  -------------------------------

// modal button close / open   

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}