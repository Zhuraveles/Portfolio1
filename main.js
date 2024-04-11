
$(function() {
  let header = $('.header');
  let headerHeight = header.height(); // вычисляем высоту шапки
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
     $('body').css({
        'marginTop': headerHeight+'px' // делаем отступ у body, равный высоте шапки
     });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'marginTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {

    //Swiper
  const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,
    parallax:true,
    speed:1000,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    parallax:true,
    speed:1000,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1,
    parallax:true,
    speed:1000,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  const swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    parallax:true,
    speed:1000,
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});
