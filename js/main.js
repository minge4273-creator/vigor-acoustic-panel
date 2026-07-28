/* ============================================
   Main JavaScript - Common Functionality
   Suzhou Vigor New Materials Co., Ltd.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    });
  }

  // --- Active Nav Link Highlight ---
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.includes(href) && href !== '/') || href === './') {
      if (currentPath === '/' || currentPath.endsWith('index.html')) {
        link.classList.add('active');
      } else if (href && currentPath.includes(href.replace('./', ''))) {
        link.classList.add('active');
      }
    }
  });

  // --- Inquiry Form Handler ---
  const inquiryForm = document.getElementById('inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('inq-name').value.trim();
      const email = document.getElementById('inq-email').value.trim();
      const product = document.getElementById('inq-product')?.value || '';
      const message = document.getElementById('inq-message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Build mailto link for email submission
      const subject = `Product Inquiry from ${name}${product ? ' - ' + product : ''}`;
      const body = `Name: ${name}\nEmail: ${email}\nCompany: ${document.getElementById('inq-company')?.value || 'N/A'}\nProduct Interest: ${product || 'General Inquiry'}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:info@csvigor.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Show success message and trigger email client
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').classList.add('show');

      // Open email client
      window.location.href = mailtoLink;
    });
  }

  // --- Scroll-triggered Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // --- Smooth anchor scroll (offset for fixed header) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 72;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Counter Animation ---
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target || el.textContent);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          el.textContent = '0' + suffix;
          requestAnimationFrame(update);
          statsObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));
  }

  // --- Product Detail Page Init ---
  if (document.getElementById('product-detail-container')) {
    if (typeof renderProductDetail === 'function') {
      renderProductDetail();
    }
  }

  // --- Product List Page Init ---
  if (document.getElementById('products-grid')) {
    if (typeof renderProductCards === 'function') {
      renderProductCards('all', '');
    }
  }
});
