// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});





const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(function (tabLink) {
  tabLink.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");
    const activeTab = document.querySelector(`#${tabId}`);
    tabLinks.forEach(function (tabLink) {
      tabLink.classList.remove("active");
    });
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    this.classList.add("active");
    activeTab.classList.add("active");
  });
});
//-------------------------------------------------------------------------------------
// CONTADOR UP seccion capacidad

// Obtener la sección que contiene los elementos que deseas animar
const section = document.querySelector('.capacidad-instalacion');

// Función para detectar cuando la sección está visible en la pantalla
function isSectionVisible() {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight && rect.bottom >= 0;
}

// Función para animar los valores
function animateValues() {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue +=1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}

// Función que se ejecuta cada vez que se desplaza la página
function onScroll() {
  if (isSectionVisible()) {
    animateValues();
    window.removeEventListener('scroll', onScroll); // Remover el listener para no volver a activar la animación
  }
}

window.addEventListener('scroll', onScroll);


//-------------------------------------------------------------------------------------
// Slider de imagenes seccion convenio //


//-------------------------------------------------------------------------------------

function toggleInfo() {
  const mission = document.getElementById("misiondiv");
  const vision = document.getElementById("visiondiv");
  const btn = document.getElementById("btn-toggle");
  if (mission.style.display === "none") {
    mission.style.display = "block";
    vision.style.display = "none";
    btn.textContent = "Visión";
  } else {
    mission.style.display = "none";
    vision.style.display = "block";
    btn.textContent = "Misión";
  }
}


//----------banner---------------------------------------------------------------------------

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(event, modalId) {
  if (event.target === event.currentTarget) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
}


var carousel = document.querySelector(".carousel");
var images = carousel.querySelectorAll("img");
var currentIndex = 0;
var timeInterval = 5000; // Intervalo de tiempo en milisegundos

setInterval(changeImage, timeInterval);

function changeImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}
//----------banner---------------------------------------------------------------------------





