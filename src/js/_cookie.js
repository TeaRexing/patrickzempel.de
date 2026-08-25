import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export function initCookieConsent() {
  CookieConsent.run({
    // single first-party-cookie to remember the user has seen the consent banner
    cookie: {
      name: 'cc_notice_seen',
      expiresAfterDays: 182
    },
    mode: 'opt-in',
    disablePageInteraction: true,
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'middle center',
        equalWeightButtons: false,
        flipButtons: false
      }
    },
    // only one category - only information. No discard
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      }
    },
    language: {
      default: 'de',
      translations: {
        de: {
          consentModal: {
            title: '',
            description:
              'Diese Website verarbeitet beim Besuch technisch erforderliche ' +
              'Daten (z.\u00A0B. Server-Logs) sowie anonymisierte Zugriffsstatistiken ' +
              'auf Grundlage unseres berechtigten Interesses. Es werden keine ' +
              'Tracking- oder Marketing-Cookies eingesetzt. Weitere Informationen ' +
              'findest du in unserer ' +
              '<a href="/datenschutz.html">Datenschutzerkl\u00E4rung</a>.',
            acceptAllBtn: 'Verstanden'
          }
        }
      }
    }
  });
}
