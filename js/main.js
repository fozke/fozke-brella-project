$(function () {

  $('.prod__slider').slick({
    arrows: false,
    slidesToShow:5,
  })
  $('.prod__prev').on('click', function (e) {
    e.preventDefault()
    $('.prod__slider').slick('slickPrev')
  })
  $('.prod__next').on('click',function (e) {
    e.preventDefault()
    $('.prod__slider').slick('slickNext')
  })

})