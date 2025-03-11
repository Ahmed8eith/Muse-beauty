document.addEventListener("DOMContentLoaded", () => {
  // Select the main elements
  const menuButton    = document.querySelector(".menu-toggle");       
  const menuContainer = document.getElementById("menu-container");    
  const menuOverlay   = document.getElementById("menu-overlay");      
  const closeButtons  = document.querySelectorAll(".close-btn");       

  // function to open and close the menu
  function openMenu() {
    menuContainer.style.transform = "translateX(0)";
    menuOverlay.style.display = "block";
  }

  function closeMenu() {
    menuContainer.style.transform = "translateX(-350px)";
    menuOverlay.style.display = "none";
  }

  // open menu when the hamburger icon is clicked
  menuButton.addEventListener("click", (e) => {
    openMenu();
  });

  // // close menu when any close button is clicked for future updates
  // closeButtons.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     closeMenu();
  //   });
  // });

  //  close the menu when the overlay is clicked
  menuOverlay.addEventListener("click", () => {
    closeMenu();
  });

});
