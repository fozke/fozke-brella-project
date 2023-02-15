$(function () {

  $('.prod__slider').slick({
    arrows: false,
    slidesToShow: 5,
    infinite: true,
    draggable:false,
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint: 900 ,
        settings:{
          slidesToShow:4,
        } ,
      },
      {
        breakpoint: 800 ,
        settings:{
          slidesToShow:3,
        } ,
      },
      {
        breakpoint: 600 ,
        settings:{
          slidesToShow:2,
        } ,
      },
      {
        breakpoint: 500 ,
        settings:{
          slidesToShow:1,
          draggable:true,
        } ,
      },
    ]
  })
  $('.prod__prev').on('click', function (e) {
    e.preventDefault()
    $('.prod__slider').slick('slickPrev')
  })
  $('.prod__next').on('click', function (e) {
    e.preventDefault()
    $('.prod__slider').slick('slickNext')
  })


  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }

  }, 0);


  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
  })



  $(".header__nav-list a, .footer__links a").on("click", function (e) {
    e.preventDefault() 
    var id = $(this).attr('href'),
    top = $(id).offset().top -80
    $('body,html').animate({ scrollTop: top }, 800)
  })


})