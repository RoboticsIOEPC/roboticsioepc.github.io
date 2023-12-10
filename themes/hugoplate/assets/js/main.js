(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });

  let testimonialSlider;

  // Initialize the testimonial slider
  function initTestimonialSlider() {
    testimonialSlider = new Swiper(".testimonial-slider", {
      spaceBetween: 24,
      loop: true, // Allow loop on all screen sizes
      pagination: {
        el: ".testimonial-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 2000, // Adjust this value for the speed of auto-sliding
      },
      allowTouchMove: true, // Allow touch interaction
    });

    // Add mouseenter and mouseleave event listeners to individual slides
    testimonialSlider.slides.forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        testimonialSlider.autoplay.stop();
      });

      slide.addEventListener("mouseleave", () => {
        testimonialSlider.autoplay.start();
      });
    });
  }

  // Initialize the slider for all screen sizes
  initTestimonialSlider();

  // Listen for window resize events
  window.addEventListener("resize", () => {
    // Reinitialize the slider on window resize
    if (testimonialSlider) {
      testimonialSlider.destroy();
      testimonialSlider = undefined;
    }
    initTestimonialSlider();
  });
})();

// Custom Cursor

document.body.classList.add('hidecursor');
window.addEventListener('scroll', function(){
    document.body.classList.add('hidecursor');
});

var timer;
var startx = window.innerWidth/2;
var starty = window.innerHeight/2;
var mouseX = startx, mouseY = starty;
var xp = startx, yp = starty;

// set the momentum with setInterval function
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    document.body.style.setProperty('--x',xp+'px');
    document.body.style.setProperty('--y',yp+'px');
}, 30);

document.onmousemove = function(e) {
    document.body.classList.remove('hidecursor');
    mouseX = e.clientX;
    mouseY = e.clientY+window.scrollY;
    clearTimeout(timer);
    timer=setTimeout(mouseStopped,3000);
}

function mouseStopped(){
    document.body.classList.add('hidecursor');
}

const onMouseOver = function (e) {
    var cursor = getComputedStyle(e.target).cursor;
    if(cursor=='pointer') {
        document.body.classList.add('cursorpointer');
    } else {
        document.body.classList.remove('cursorpointer');
    }
};

document.addEventListener("mouseover", onMouseOver, false);
