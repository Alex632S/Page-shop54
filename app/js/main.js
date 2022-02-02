$('.menu-category-ul').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 12,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 1600,
        settings: {
            slidesToShow: 8,
            slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 1060,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 7
      }
    },
    {
      breakpoint: 825,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5
      }
    }
  ]
});
