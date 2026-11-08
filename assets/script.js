// ===================================
// 8.BIT.BLOG Script
// ===================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Contact Form ----------
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        alert('Please complete all required fields.');
        return;
      }

      // Show the modal if it exists, otherwise fall back to an alert.
      if (document.getElementById('thankYouModal')) {
        openModal();
      } else {
        alert('Thank you! Your message has been sent.');
      }

      contactForm.reset();
    });
  }

  // ---------- Read More Buttons ----------
  document.querySelectorAll('.read-more').forEach(function (button) {
    button.addEventListener('click', function () {
      const title = this.closest('.gamepad-card')
        ?.querySelector('.card-content h3');

      if (title) {
        alert('Opening article: ' + title.textContent);
      }
    });
  });

  // ---------- Author Buttons ----------
  document.querySelectorAll('.author-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const initials = this.querySelector('.initials');
      if (initials) {
        alert('Author: ' + initials.textContent);
      }
    });
  });

});


// ===================================
// Modal Functions
// ===================================

function openModal() {
  const modal = document.getElementById('thankYouModal');
  if (modal) {
    modal.classList.add('modal-show');
    document.body.classList.add('modal-open');
  }
}

function closeModal() {
  const modal = document.getElementById('thankYouModal');
  if (modal) {
    modal.classList.remove('modal-show');
    document.body.classList.remove('modal-open');
  }
}

// Close modal when clicking the overlay (outside the modal content)
document.addEventListener('click', function (e) {
  const modal = document.getElementById('thankYouModal');
  if (modal && e.target === modal) {
    closeModal();
  }
});

// Close modal with the Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});