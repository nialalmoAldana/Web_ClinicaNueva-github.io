
//---------------------------------------------------------------------------------------
// NAVBAR TOGGLING seccion header

const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const numero = document.getElementById('numero');

navbarShowBtn.addEventListener('click', function () {
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function () {
    navbarCollapseDiv.classList.remove('navbar-show');
});

// Cambiando el tamaño de imagen del icono
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon() {
    let winSize = window.matchMedia("(min-width: 1200px)");
    if (winSize.matches) {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    }
}
changeSearchIcon();

// para todas las animaciones y transiciones
let resizeTimer;
window.addEventListener('resize', () => {
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
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

setInterval(() => {
  if (counter >= carouselImages.length - 1) {
    counter = 0;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    counter++;
  } else {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
}, 5000); // Cambiar imagen cada 5 segundos

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'last-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'first-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});


//-------------------------------------------------------------------------------------