const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
 
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

function init(){
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}