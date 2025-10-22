// Show current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}
updateTime();
setInterval(updateTime, 1000);

// ----- Contact Form Validation -----
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const success = document.getElementById('success');

    let valid = true;

    // Helper to show errors
    function showError(input, message) {
      const errorElement = document.getElementById(`error-${input.id}`);
      if (errorElement) {
        errorElement.textContent = message;
      }
      valid = false;
    }

    // Clear all previous errors
    document.querySelectorAll('.error-message').forEach(el => (el.textContent = ''));

    // Validate Name
    if (name.value.trim() === '') {
      showError(name, 'Full name is required.');
    }

    // Validate Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, 'Please enter a valid email (e.g., name@example.com).');
    }

    // Validate Subject
    if (subject.value.trim() === '') {
      showError(subject, 'Subject is required.');
    }

    // Validate Message
    if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters long.');
    }

    // Show success if all valid
    if (valid) {
      success.hidden = false;
      form.reset();
    } else {
      success.hidden = true;
    }
  });
}
