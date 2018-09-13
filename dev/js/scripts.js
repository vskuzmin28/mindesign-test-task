// call popup

$('.popup-call').hide();
$('.link-popup-call').click(function(e){
  e.preventDefault();
  $('.popup-call').bPopup({
    //closeClass:'popup__icon-close',
      amsl: 0,
      positionStyle: 'fixed',
    })
})