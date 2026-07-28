/* Google Analytics 4 loader. Measurement ID G-YMKBHYQ04X.
   The loader no-ops if the ID is ever unset (placeholder G-XXXXXXXXXX). */
(function () {
  'use strict';

  var GA_ID = 'G-YMKBHYQ04X';

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
