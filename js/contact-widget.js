/* Floating "leave a message" widget.
   Self-contained: injects its own styles + markup, works on any page.

   To enable real capture (instead of the mailto fallback), set WEB3FORMS_KEY
   to a free access key from https://web3forms.com (register it with the inbox
   you want messages delivered to: htoofranz100@gmail.com).
   Until then, the widget opens the visitor's email app prefilled. */
(function () {
  'use strict';

  var WEB3FORMS_KEY = 'cc9aeb13-2d53-421d-8c73-d8205a606366';
  var DEST_EMAIL = 'htoofranz100@gmail.com';

  var CSS = [
    '.cw-toggle{position:fixed;right:22px;bottom:22px;z-index:9999;width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;background:linear-gradient(135deg,#3b82f6,#8b5cf6);box-shadow:0 8px 24px rgba(59,130,246,0.4);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s}',
    '.cw-toggle:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(59,130,246,0.5)}',
    '.cw-toggle svg{width:26px;height:26px;fill:#fff}',
    '.cw-panel{position:fixed;right:22px;bottom:90px;z-index:9999;width:340px;max-width:calc(100vw - 36px);max-height:calc(100dvh - 120px);display:flex;flex-direction:column;background:#111623;border:1px solid rgba(59,130,246,0.2);border-radius:16px;box-shadow:0 20px 50px rgba(2,6,23,0.5);padding:18px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;animation:cw-in .18s ease-out}',
    '@keyframes cw-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}',
    '.cw-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;flex-shrink:0}',
    '.cw-title{color:#f1f5f9;font-weight:700;font-size:15px}',
    '.cw-sub{color:#64748b;font-size:12px;margin-top:2px}',
    '.cw-close{background:none;border:none;color:#94a3b8;line-height:1;cursor:pointer;padding:6px 8px;margin:-6px -8px -6px 0;border-radius:8px}',
    '.cw-close svg{width:22px;height:22px;display:block;fill:currentColor}',
    '.cw-close:hover{color:#f1f5f9}',
    '.cw-form{display:flex;flex-direction:column;overflow-y:auto;-webkit-overflow-scrolling:touch;min-height:0}',
    '.cw-form input,.cw-form textarea{width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(59,130,246,0.14);border-radius:8px;padding:10px 12px;margin-bottom:10px;color:#f1f5f9;font-size:14px;font-family:inherit}',
    '.cw-form input::placeholder,.cw-form textarea::placeholder{color:#64748b}',
    '.cw-form input:focus,.cw-form textarea:focus{outline:none;border-color:rgba(59,130,246,0.4)}',
    '.cw-form textarea{resize:vertical;min-height:72px}',
    '.cw-send{flex-shrink:0;width:100%;border:none;cursor:pointer;border-radius:8px;padding:12px;font-size:14px;font-weight:600;color:#fff;background:linear-gradient(135deg,#3b82f6,#8b5cf6)}',
    '.cw-send:hover{opacity:.95}',
    '.cw-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}',
    '.cw-status{font-size:12px;margin:10px 0 0;min-height:16px;text-align:center}',
    '.cw-status.cw-ok{color:#4ade80}',
    '.cw-status.cw-err{color:#f87171}',
    '@media (max-width:560px){.cw-panel{right:0;left:0;bottom:0;width:auto;max-width:none;max-height:85dvh;border-radius:16px 16px 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom))}.cw-toggle{right:16px;bottom:16px}.cw-toggle.cw-hidden{display:none}.cw-form input,.cw-form textarea{font-size:16px}}'
  ].join('');

  var ICON_CHAT = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 9H6V9h12v2zm0-3H6V6h12v2z"/></svg>';
  var ICON_CLOSE = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

  function init() {
    if (document.getElementById('cw-toggle')) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var toggle = document.createElement('button');
    toggle.id = 'cw-toggle';
    toggle.className = 'cw-toggle';
    toggle.setAttribute('aria-label', 'Leave a message');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = ICON_CHAT;

    var panel = document.createElement('div');
    panel.className = 'cw-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Leave a message');
    panel.hidden = true;
    panel.innerHTML =
      '<div class="cw-header">' +
        '<div><div class="cw-title">Leave a message</div><div class="cw-sub">I will follow up soon</div></div>' +
        '<button type="button" class="cw-close" aria-label="Close">' + ICON_CLOSE + '</button>' +
      '</div>' +
      '<form class="cw-form" novalidate>' +
        '<input type="text" name="name" placeholder="Your name" autocomplete="name" required>' +
        '<input type="email" name="email" placeholder="Your email" autocomplete="email" required>' +
        '<textarea name="message" rows="3" placeholder="Your message" required></textarea>' +
        '<input type="checkbox" name="botcheck" class="cw-hp" tabindex="-1" aria-hidden="true">' +
        '<button type="submit" class="cw-send">Send message</button>' +
        '<p class="cw-status" role="status" aria-live="polite"></p>' +
      '</form>';

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    var closeBtn = panel.querySelector('.cw-close');
    var form = panel.querySelector('.cw-form');
    var status = panel.querySelector('.cw-status');

    function isMobile() {
      return window.matchMedia('(max-width:560px)').matches;
    }
    function open() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      toggle.innerHTML = ICON_CLOSE;
      // On mobile the panel is a bottom sheet; hide the FAB so it does not
      // overlap the sheet, and skip auto-focus so the keyboard does not slam
      // up before the user sees the form.
      if (isMobile()) {
        toggle.classList.add('cw-hidden');
      } else {
        var first = form.querySelector('input[name="name"]');
        if (first) first.focus();
      }
    }
    function close() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = ICON_CHAT;
      toggle.classList.remove('cw-hidden');
    }
    function toggleOpen() { panel.hidden ? open() : close(); }

    function setStatus(msg, ok) {
      status.textContent = msg;
      status.className = 'cw-status ' + (ok ? 'cw-ok' : 'cw-err');
    }

    toggle.addEventListener('click', toggleOpen);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) close();
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var els = form.elements;
      var name = (els['name'].value || '').trim();
      var email = (els['email'].value || '').trim();
      var message = (els['message'].value || '').trim();
      if (!name || !email || !message) {
        setStatus('Please fill in your name, email, and message.', false);
        return;
      }

      var configured = WEB3FORMS_KEY && WEB3FORMS_KEY.indexOf('YOUR_') !== 0;

      if (!configured) {
        var subject = encodeURIComponent('Portfolio message from ' + name);
        var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
        window.location.href = 'mailto:' + DEST_EMAIL + '?subject=' + subject + '&body=' + body;
        setStatus('Opening your email app so you can send the message...', true);
        return;
      }

      setStatus('Sending...', true);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New message from your portfolio site',
          from_name: 'Portfolio site',
          name: name,
          email: email,
          message: message,
          botcheck: els['botcheck'] ? els['botcheck'].checked : false
        })
      }).then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.success) {
            form.reset();
            setStatus('Thanks! Your message is on its way.', true);
          } else {
            setStatus('Something went wrong. Please email me directly.', false);
          }
        }).catch(function () {
          setStatus('Network error. Please email me directly.', false);
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
