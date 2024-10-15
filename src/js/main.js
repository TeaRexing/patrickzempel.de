// vendor imports
import $, { each } from 'jquery';
import 'cookie-notice';
import GLightbox from 'glightbox';

// own imports
// ... nothing to see here
//
const lightbox = GLightbox();

// global constants
export const debug = false;

// make functions globally availabe in page
export { $ };

// document.ready
$(function() {
  // Attachments
  // attach the nav toggle function
  $('.toggleNav').click(function() {
    $('#mobileNav').toggleClass('w3-hide');
  });
  // attach the modal image
  $('#hero-modal').click(function() {
    $('#hero-modal').toggleClass('w3-show');
  });
  $('#hero-image').click(function() {
    $('#hero-modal').toggleClass('w3-show');
  });

  /*
  // attach the scroll handler
  $(window).on('scroll', function() {
    log('Scrolling...');
  });
  */
});
