// start first slider

var slider__thumbs = new Swiper(".slider__thumbs", {
    spaceBetween: 10,
    // Space 
    slidesPerView: 3,
    // View bao nhiêu ảnh
    centeredSlides: true,
    // Thực hiện chọn ảnh vào giữa center
    loop: true,
    // vòng lập infiniti
    freeMode: true,

    // tự động chạy
    autoplay: {
        // delay: 1000,
        disableOnInteraction: false,
    },
    speed: 2000,
    thumbs: {
        swiper: slider__content
      },
  });


var slider__content = new Swiper(".slider__content", {
    spaceBetween: 10,
    autoplay: {
        // delay: 1000,
        disableOnInteraction: false,
    },
    speed: 2000,
    // tốc độ
    loop: true,
    thumbs: {
      swiper: slider__thumbs
    },

    // button checkview cuối
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // button next và prev
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//  End first slider




// Start second slider
var swiper = new Swiper(".ourblog__container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  //Responsive 

  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 100,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },
  // },

  // Không cần Pagination vào Slider
  
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

// End second slider