// call button promo portal

//$('.popupCallPromoPortal').hide();
//$('.link-popup-call').click(function(e){
//  e.preventDefault();
//  $('.popup-call').bPopup({
//    //closeClass:'popup__icon-close',
//      amsl: 0,
//      positionStyle: 'fixed',
//    })
//})

// header

$(window).scroll(function() {
  if($(window).scrollTop() >= 120) {

    $('.header').addClass('header_fixed');
    $('.header__logo').addClass('header__logo-to-scroll');

  } else {

    $('.header').removeClass('header_fixed');
    $('.header__logo').removeClass('header__logo-to-scroll');

  }   
})

// main slider

$('.main-slider__container').responsiveSlides({
  auto: true,
  pager: true,
  nav: false,
  speed: 500,
  maxwidth: 1366,
})