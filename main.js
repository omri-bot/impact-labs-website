// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 12px rgba(11, 13, 31, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 0 rgba(11, 13, 31, 0.05)';
  }
});

// Any additional interactive elements from the new UI Kit can go here.
