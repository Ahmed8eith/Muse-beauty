document.addEventListener("DOMContentLoaded", () => {
    // select elements
    const menuButton = document.querySelector('.hamburger');
    const sideNav = document.querySelector('.side-nav');
    const closeButton = document.querySelector('.close-btn');
  
    // open side nav when hamburger is clicked
    menuButton.addEventListener('click', () => {
      sideNav.classList.add('active');
    });
  
    // close side nav when the close button is clicked
    closeButton.addEventListener('click', () => {
      sideNav.classList.remove('active');
    });
  
    // close side nav if clicked outside of it
    document.addEventListener('click', (event) => {
      // check if the click is outside the div
      if (sideNav.classList.contains('active') &&
          !sideNav.contains(event.target) &&
          !menuButton.contains(event.target)) {
        sideNav.classList.remove('active');
      }
    });
  });
  