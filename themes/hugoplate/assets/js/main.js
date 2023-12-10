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
