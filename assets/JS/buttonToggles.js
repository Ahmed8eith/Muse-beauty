document.addEventListener('DOMContentLoaded', () => {
  /**
   * Setup toggle functionality for a group of buttons.
   * @param {string} containerSelector 
   * @param {string} defaultColor 
   * @param {string} activeColor 
   */
  function setupToggleContainers(containerSelector, defaultColor, activeColor) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
      const items = container.querySelectorAll('h3');
      items.forEach(item => {
        // Set default color on page load
        item.style.color = defaultColor;
        item.addEventListener('click', () => {
          // Reset color for all items in this container
          items.forEach(i => i.style.color = defaultColor);
          // Highlight the clicked item
          item.style.color = activeColor;
        });
      });
    });
  }
  
  // Desktop toggles
  setupToggleContainers('.language-switch', '#413026', '#ED8A19');
  setupToggleContainers('.currency-switch', '#413026', '#ED8A19');
  
  // Mobile side toggles
  setupToggleContainers('.language-switch-mob', 'white', '#ED8A19');
  setupToggleContainers('.currency-switch-mob', 'white', '#ED8A19');

  //shopping page toggles 
  

  // FAQ TOGGLE
  const buttons = document.querySelectorAll('.answer-btn');
  const questions = document.querySelectorAll('.question');
  const answers = document.querySelectorAll('.ans');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (answers[index].classList.contains('show')) {
        answers[index].classList.remove('show');
        button.style.color = 'rgba(65, 48, 38, 1)';
        questions[index].style.color = 'rgba(65, 48, 38, 1)';
        button.textContent = '+';
      } else {
        buttons.forEach((btn, i) => {
          btn.style.color = 'rgba(65, 48, 38, 1)';
          btn.textContent = '+';
          questions[i].style.color = 'rgba(65, 48, 38, 1)';
          answers[i].classList.remove('show');
        });
        button.style.color = 'rgba(237, 138, 25, 1)';
        questions[index].style.color = 'rgba(237, 138, 25, 1)';
        answers[index].classList.add('show');
        button.textContent = '-';
      }
    });
  });

  // COUNTER BUTTONS
  function setupCounters(containerSelector) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
      const counterButtons = container.querySelectorAll('.counter');
      const counterInput = container.querySelector('.counter-input');

      if (!counterInput) return;

      counterButtons.forEach(button => {
        button.addEventListener('click', function() {
          let currentValue = parseInt(counterInput.value) || 1;
          if (this.textContent.trim() === '+') {
            counterInput.value = currentValue + 1;
          } else if (this.textContent.trim() === '-') {
            if (currentValue > 1) {
              counterInput.value = currentValue - 1;
            }
          }
        });
      });
    });
  }

  setupCounters('.cart-buttons');
  setupCounters('.details-add');
});
