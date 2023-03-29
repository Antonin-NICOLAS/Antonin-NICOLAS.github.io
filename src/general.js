var checkbox = document.querySelector('input[name=theme]');

//navigator preferences
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.checked = true;
  document.documentElement.setAttribute('data-theme', 'dark')
} else {
  // Gérer le cas où le thème du navigateur n'est pas sombre
  checkbox.checked = false;
  document.documentElement.setAttribute('data-theme', 'light')
}

//trans fonction//
function trans() {
  if ('data-theme' === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
    document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
}

//stocker le mode
var tempThemeState = sessionStorage.getItem('tempThemeState');
if (tempThemeState === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  checkbox.checked = true;
} else if (tempThemeState === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  checkbox.checked = false;
}

//page mode nuit//
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        sessionStorage.setItem('tempThemeState', 'dark');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        sessionStorage.setItem('tempThemeState', 'light');
    }
})


//burger//
function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });   
  
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    }); 
  });
  function closeMenu (){
    const close = document.querySelector('.navbar__links');
    const navbar = document.querySelector('.navbar');
    close.addEventListener('click', (e) => {    
      navbar.classList.remove('show-nav');
    });    
  }
  closeMenu()
}
toggleMenu();

//loader//
window.addEventListener('load', function() {
  var loaderspace = document.querySelector('.loading');
  loaderspace.classList.add('hidden');
  setTimeout(function() {
    loaderspace.style.display = 'none';
  }, 4000);
});

//animations//
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

// Configuration de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "play none none none",
    once: true
});

// Création d'une timeline pour les animations
gsap.registerPlugin(ScrollTrigger)
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".navbar",
        start: "top center"
    }
});

// Ajout des animations à la timeline
tl.from('.navbar__logo', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
})
.from('.navbar__link', {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.2,
    ease: "power2.out"
}, "-=0.5")
.from('.navbar__buttons label', {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power2.out"
}, "-=0.5")
.from('.burger', {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power2.out"
}, "-=0.5");

//redimensionner le viewport
window.onresize = function() {
  location.reload();
};