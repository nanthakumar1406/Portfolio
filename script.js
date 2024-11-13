var typed=new Typed(".text",{
  strings: [" Python Developer"," Web Developer"," Power BI"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
}); 

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  