$(document).ready(function () {
   $('.burger').click(function () {
      $('.burger-open, .burger__main, .header, .main__back, .wrapper').toggleClass('opened');
   });
});

$(document).ready(function () {
   $('.test').click(function () {
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

$(document).ready(function () {
   $('.menu-arrow').click(function () {
      $(this).toggleClass('active');
   });
});

$(document).ready(function () {
   $('.box-show').click(function () {
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

$(document).ready(function () {
   $('.box-title2, .mobile__box, .box-show').click(function () {
      $(this).toggleClass('on');
   });
});

$(document).ready(function () {
   $('.opener__name').click(function () {
      $(this).toggleClass('active').next().slideToggle(300);
   });
});
$(document).ready(function () {
   $('.avatar-image').click(function () {
      $(this).toggleClass('active').next().slideToggle(300);
   });
});

// SWIPER
new Swiper('.swiper', {
   speed: 900,
   spaceBetween: 0,
   autoplay: {
      delay: 5000,
   },
   grabCursor: true,
   effect: 'slide',
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
      dynamicBullets: true,
   },
   slidesPerView: 1,
   paginationClickable: true,
   autoHeight: true,
   stopOnLastSlide: false,
});
