//button toggles function, dynamically toggles the color of buttons with different classes

document.addEventListener('DOMContentLoaded', () => {
  function setupToggleButtons(selector) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
      button.addEventListener('click', () => {

        buttons.forEach(btn => btn.style.color = 'rgba(65, 48, 38, 1)');

        button.style.color = 'rgba(237, 138, 25, 1)';
      });
    });
  }

  // call the function for each diffrnt class
  setupToggleButtons('.lan-btn');
  setupToggleButtons('.curr-btn');
  setupToggleButtons('.filter-btn');
});
