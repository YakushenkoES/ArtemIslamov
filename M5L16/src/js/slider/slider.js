$(document).ready(function(){
$(".slick").slick(
  {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true
  }
);
});