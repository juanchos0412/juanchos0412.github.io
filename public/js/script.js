//copy fecha actual

// Animación de carga
window.onload = function (params) {
  var contenedor = document.getElementById('contenedor-carga');

  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
  contenedor.style.display = 'none';
}

//ocupar todo el alto de pantalla
var header = document.getElementById("home");
var video = document.getElementById("video-banner");
var height = window.innerHeight;
header.style.height = height + "px";
video.style.height = height + "px";

//navegación pegajosa
window.addEventListener("scroll", function(){
  var header = document.querySelector(".main-menu")
  header.classList.toggle("pegajoso", window.scrollY > 0);
})

//dinamic 
const offCanvas = document.getElementById('offcanvasNavbar2');
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
      if (entry.isIntersecting){
          const previo = document.querySelector(".menu a.active");
          if (previo) {
              previo.classList.remove('active')
          }
          menuLink.classList.add("active");
      }
  })
}, {
  rootMargin: "-20% 0px -80% 0px",
})

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function(){
      offCanvas.classList.remove("show");
      const cuerpo = document.getElementById("body-portfolio");
      cuerpo.style.overflow = "scroll";
      console.log("Nuevo overflow: " + cuerpo.style.overflow);
  })

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if(target){
      observer.observe(target);
  }
})