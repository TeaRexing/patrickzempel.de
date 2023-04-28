import $ from 'jquery';
import 'cookie-notice';
import { logToConsole as log } from './_modules';

// global constants
export const debug = true;

/*
* #TODO: import module with variables 
*/

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
