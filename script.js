(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();


// let tablinks = document.getElementsByClassName("tab-links");
// let tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//     for(tablink of tablinks){
//         tablink.classList.remove("active-link");
//     }
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab");
//     }

//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");

// }

// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');
// let slider = document.querySelector('.slider');

// next.addEventListener('click', function(){
//     let slides = document.querySelectorAll('.slides');
//     slider.appendChild(slides[0]);
// })
// prev.addEventListener('click', function(){
//     let slides = document.querySelectorAll('.slides');
//     slider.prepend(slides[slides.length-1]);
// })

let slides = document.querySelectorAll(".slides2 img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;
  }

  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide")
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex)

}
function nextSlide(){
  slideIndex++;
  showSlide(slideIndex)
}

// (function () {
//     "use strict";
  
//     // define variables
//     var items = document.querySelectorAll(".timeline li");
  
//     // check if an element is in viewport
//     // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
//     function isElementInViewport(el) {
//       var rect = el.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <=
//           (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }
  
//     function callbackFunc() {
//       for (var i = 0; i < items.length; i++) {
//         if (isElementInViewport(items[i])) {
//           items[i].classList.add("in-view");
//         }
//       }
//     }
  
//     // listen for events
//     window.addEventListener("load", callbackFunc);
//     window.addEventListener("resize", callbackFunc);
//     window.addEventListener("scroll", callbackFunc);
//   })();
  
let sidemenu = document.getElementById("sidemenu")

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

var typed = new Typed(".text", {
  strings: ["Finance" , "Commerce" , "Web Development"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});