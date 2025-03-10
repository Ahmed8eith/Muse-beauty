document.addEventListener("DOMContentLoaded", () => {
  // Select the main elements
  const menuButton    = document.querySelector(".menu-toggle");       
  const menuContainer = document.getElementById("menu-container");    
  const menuOverlay   = document.getElementById("menu-overlay");      
  const closeButtons  = document.querySelectorAll(".close-btn");       

  // functions to open and close the menu
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
    e.stopPropagation(); // Prevent click from bubbling to document
    openMenu();
  });

  // close menu when any close button is clicked
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
    });
  });

  // also close the menu when the overlay is clicked
  menuOverlay.addEventListener("click", () => {
    closeMenu();
  });

  //close the menu when clicking outside of it
  document.addEventListener("click", (event) => {
    // If the menu is open and the click target is neither inside the menu nor the hamburger icon, close the menu.
    if (menuContainer.style.transform === "translateX(0)" &&
        !menuContainer.contains(event.target) &&
        !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
});
