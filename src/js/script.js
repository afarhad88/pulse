$(document).ready(function () {
  $(".carousel__inner").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="/src/icons/chevron-left-solid.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="/src/icons/chevron-right-solid.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
