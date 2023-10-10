(function () {
  "use strict";

  let testimonialSlider;

  // Initialize the testimonial slider
  function initTestimonialSlider() {
    testimonialSlider = new Swiper(".testimonial-slider", {
      spaceBetween: 24,
      loop: true,
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

  // Check if it's a desktop screen and initialize the slider
  if (window.innerWidth >= 992) {
    initTestimonialSlider();
  }

  // Listen for window resize events
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      if (!testimonialSlider) {
        initTestimonialSlider();
      }
    } else {
      if (testimonialSlider) {
        testimonialSlider.destroy();
        testimonialSlider = undefined;
      }
    }
  });
})();
