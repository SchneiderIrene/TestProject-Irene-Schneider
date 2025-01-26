window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuMobil = document.getElementById('menu-mobil');

  menuToggle.addEventListener('click', () => {
    menuMobil.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!menuMobil.contains(e.target) && e.target !== menuToggle) {
      menuMobil.classList.remove('active');
    }
  });
});
