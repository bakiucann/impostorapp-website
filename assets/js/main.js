document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Scroll Reveal Animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target); // Optional: stop observing once visible
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // Dynamic Year for Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Support Form AJAX Handling
  const supportForm = document.getElementById('support-form');
  const successMsg = document.getElementById('form-success-msg');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');

  if (supportForm) {
    supportForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Show loading state
      btnText.textContent = 'Sending...';
      btnIcon.classList.remove('fa-paper-plane');
      btnIcon.classList.add('fa-spinner', 'fa-spin');
      submitBtn.disabled = true;

      const formData = new FormData(this);

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Hide form, show success message
          supportForm.style.display = 'none';
          successMsg.style.display = 'block';
        } else {
          // Handle error (optional, revert text)
          btnText.textContent = 'Failed. Try Again';
          btnIcon.classList.remove('fa-spinner', 'fa-spin');
          submitBtn.disabled = false;
        }
      })
      .catch(error => {
        btnText.textContent = 'Failed. Try Again';
        btnIcon.classList.remove('fa-spinner', 'fa-spin');
        submitBtn.disabled = false;
      });
    });
  }
});
