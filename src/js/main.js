// vendor imports
import $, { each } from 'jquery';
import { initCookieConsent } from './_cookie.js';

// own imports
// ... nothing to see here
//

// global constants
export const debug = false;

// make functions globally availabe in page
export { $ };

// load cookie consent
initCookieConsent();

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

});
