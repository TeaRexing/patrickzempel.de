// vendor imports
import $, { each } from 'jquery';
import 'cookie-notice';

// own imports
import { logToConsole as log } from './pzjs/_modules';

// global constants
export const debug = false;

// make functions globally availabe in page
export { $, log };

// document.ready
$(function() {
  debug ? log('=== Debug-Mode ===') : null;

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
