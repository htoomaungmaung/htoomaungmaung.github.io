;(function () {
  'use strict';

  // ============================================
  // Particle Constellation (Hero Background)
  // ============================================
  function initParticles() {
    var canvas = document.getElementById('particles');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var isMobile = window.innerWidth <= 768;
    var particleCount = isMobile ? 25 : 50;
    var maxDist = 120;
    var animId;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.5 ? '59,130,246' : '139,92,246'
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            var opacity = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(59,130,246,' + opacity + ')';
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',0.4)';
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(draw);
      }
    });

    window.addEventListener('resize', function () {
      resize();
      isMobile = window.innerWidth <= 768;
      particleCount = isMobile ? 25 : 50;
      createParticles();
    });

    resize();
    createParticles();
    draw();
  }

  // ============================================
  // Scroll Fade-In Animations
  // ============================================
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ============================================
  // Count-Up Animation for Impact Numbers
  // ============================================
  function initCountUp() {
    var nums = document.querySelectorAll('.impact-num[data-target]');
    if (!nums.length) return;
    var counted = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted) {
          counted = true;
          nums.forEach(function (num) {
            var target = parseInt(num.getAttribute('data-target'), 10);
            var suffix = num.getAttribute('data-suffix') || '';
            var duration = 1500;
            var start = performance.now();

            function update(now) {
              var elapsed = now - start;
              var progress = Math.min(elapsed / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              var current = Math.round(eased * target);
              num.textContent = current + suffix;
              if (progress < 1) {
                requestAnimationFrame(update);
              }
            }
            requestAnimationFrame(update);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    var section = document.getElementById('impact');
    if (section) observer.observe(section);
  }

  // ============================================
  // Sticky Navigation
  // ============================================
  function initStickyNav() {
    var nav = document.getElementById('stickyNav');
    var hero = document.getElementById('hero');
    var navLinksEl = document.getElementById('navLinks');
    var hamburger = document.getElementById('hamburger');
    if (!nav || !hero) return;

    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          nav.classList.remove('visible');
        } else {
          nav.classList.add('visible');
        }
      });
    }, { threshold: 0 });
    heroObserver.observe(hero);

    var sections = document.querySelectorAll('section[id]');
    var navLinks = navLinksEl.querySelectorAll('a');

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });

    if (hamburger) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinksEl.classList.toggle('open');
      });

      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('open');
          navLinksEl.classList.remove('open');
        });
      });
    }
  }

  // ============================================
  // Timeline Draw on Scroll
  // ============================================
  function initTimelineDraw() {
    var timeline = document.getElementById('timeline');
    var line = document.getElementById('timelineLine');
    if (!timeline || !line) return;

    function updateLine() {
      var rect = timeline.getBoundingClientRect();
      var windowH = window.innerHeight;

      if (rect.top >= windowH) {
        line.style.transform = 'scaleY(0)';
        return;
      }
      if (rect.bottom <= 0) {
        line.style.transform = 'scaleY(1)';
        return;
      }

      var visibleTop = Math.max(0, windowH - rect.top);
      var totalHeight = rect.height;
      var progress = Math.min(visibleTop / totalHeight, 1);
      line.style.transform = 'scaleY(' + progress + ')';
    }

    window.addEventListener('scroll', updateLine, { passive: true });
    updateLine();
  }

  // ============================================
  // Contact Form
  // ============================================
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var status = document.getElementById('formStatus');
    var els = form.elements;

    function setStatus(msg, type) {
      if (!status) return;
      status.textContent = msg;
      status.className = 'form-status ' + (type === 'error' ? 'is-error' : 'is-ok');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (els['name'].value || '').trim();
      var email = (els['email'].value || '').trim();
      var message = (els['message'].value || '').trim();
      if (!name || !email || !message) {
        setStatus('Please fill in your name, email, and message.', 'error');
        return;
      }

      var key = (els['access_key'].value || '').trim();
      var configured = key && key.indexOf('YOUR_') !== 0;

      // Fallback when no form service is configured yet: open the visitor's
      // email client with the message prefilled.
      if (!configured) {
        var subject = encodeURIComponent('Portfolio message from ' + name);
        var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
        window.location.href = 'mailto:htoofranz100@gmail.com?subject=' + subject + '&body=' + body;
        setStatus('Opening your email app so you can send the message...', 'ok');
        return;
      }

      // Configured: submit to Web3Forms without leaving the page.
      setStatus('Sending...', 'ok');
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: 'New message from your portfolio site',
          from_name: 'Portfolio site',
          name: name,
          email: email,
          message: message,
          botcheck: els['botcheck'] ? els['botcheck'].checked : false
        })
      }).then(function (r) {
        return r.json();
      }).then(function (res) {
        if (res && res.success) {
          form.reset();
          setStatus('Thanks! Your message is on its way. I will follow up soon.', 'ok');
        } else {
          setStatus('Something went wrong. Please email me directly instead.', 'error');
        }
      }).catch(function () {
        setStatus('Network error. Please email me directly instead.', 'error');
      });
    });
  }

  // ============================================
  // Initialize Everything
  // ============================================
  document.addEventListener('DOMContentLoaded', function () {
    initParticles();
    initScrollAnimations();
    initCountUp();
    initStickyNav();
    initTimelineDraw();
    initContactForm();
  });
})();
