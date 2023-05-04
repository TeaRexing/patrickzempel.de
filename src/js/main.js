import 'cookie-notice';

import { logToConsole as log } from './pzjs/_modules';

// global constants
export const debug = false;

// document.ready
$(function() {
  debug ? log('=== Debug-Mode ===') : null;

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

});
