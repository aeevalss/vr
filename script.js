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
