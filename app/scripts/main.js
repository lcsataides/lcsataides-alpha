/* Open Menu */
$( '.open-close-btn' ).on('click touchstart', function(e) {

  e.preventDefault();
  $('.overlay').toggleClass('overlay-open');
  $('#hamburger-icon').toggleClass('hamburger-open');
});
