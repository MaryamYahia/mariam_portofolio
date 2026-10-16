// Mobile navigation menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// Close the mobile menu after selecting a section
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

// Keep the footer year current
 document.getElementById('year').textContent = new Date().getFullYear();
