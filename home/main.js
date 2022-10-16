window.onload = function digital_fn() {
  let toggle = document.querySelector("#nav .toggle-btn");
  let collapse = document.querySelector("#nav .collapse");

  toggle.addEventListener("click", function (e) {
    collapse.classList.toggle("active");
  });

  let grid = document.querySelector(
    "#site-main .recent-work-area .images-flex"
  );
};

var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2,
    },
  },
});

var rellax = new Rellax(".rellax", {
  center: true,
});

var typed = new Typed(".element", {
  strings: ["#PurplePower", "#YMCA", "#SocialWork"],
  smartBackspace: true, // Default value
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});
