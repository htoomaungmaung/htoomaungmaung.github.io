/* Google Analytics 4 loader.
   To enable: replace G-XXXXXXXXXX below with your GA4 Measurement ID.
   Find it in Google Analytics > Admin > Data Streams > (your web stream).
   Until a real ID is set, this file does nothing. */
(function () {
  'use strict';

  var GA_ID = 'G-46QRYQH4ZT';

  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return; // not configured yet

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
})();
