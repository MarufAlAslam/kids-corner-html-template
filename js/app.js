$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    "<button class='btn btn-prev' aria-label='Previous' type='button'><img src='./images/back.png' class='img-fluid'/></button>",
  nextArrow:
    "<button class='btn btn-next' aria-label='Previous' type='button'><img src='./images/next.png' class='img-fluid'/></button>",
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".slider-nav",
  arrows: true,
  prevArrow:
    "<button class='btn btn-prev' aria-label='Previous' type='button'><img src='./images/back.png' class='img-fluid'/></button>",
  nextArrow:
    "<button class='btn btn-next' aria-label='Previous' type='button'><img src='./images/next.png' class='img-fluid'/></button>",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
