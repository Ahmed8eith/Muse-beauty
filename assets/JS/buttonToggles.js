document.addEventListener('DOMContentLoaded', () => {
  
  function setupToggleContainers(containerSelector, defaultColor, activeColor) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
      const items = container.querySelectorAll('h3');
      items.forEach(item => {
       
        item.addEventListener('click', () => {
          // Reset color for all items in this container
          items.forEach(i => i.style.color = defaultColor);
          // togle the clicked item
          item.style.color = activeColor;
        });
      });
    });
  }
  
  // Desktop toggles
  setupToggleContainers('.language-switch', 'rgba(65, 48, 38, 1)', 'rgba(237, 138, 25, 1)');
  setupToggleContainers('.currency-switch', 'rgba(65, 48, 38, 1)', 'rgba(237, 138, 25, 1)');
  
  // Mobile side toggles
  setupToggleContainers('.language-switch-mob', 'white', 'rgba(237, 138, 25, 1)');
  setupToggleContainers('.currency-switch-mob', 'white', 'rgba(237, 138, 25, 1)');

  // Shopping page togles
  const filterBtns = document.querySelectorAll(".filter-btn");
  const activeColor = "rgba(237, 138, 25, 1)"; 
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      // Set all buttons to black
      filterBtns.forEach(b => b.style.color = "black");
      // toggle the clicked button
      this.style.color = activeColor;
    });
  });

  // FAQ TOGGLE
  const buttons = document.querySelectorAll('.answer-btn');
  const questions = document.querySelectorAll('.question');
  const answers = document.querySelectorAll('.ans');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // if the clicked button is already toggled, sets it back to default
      if (answers[index].classList.contains('show')) {
        answers[index].classList.remove('show');
        button.style.color = 'rgba(65, 48, 38, 1)';
        questions[index].style.color = 'rgba(65, 48, 38, 1)';
        button.textContent = '+';

        // else sets all buttons to default then activates the target button
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

      // prevents errors if container doesnt exist 
      if (!counterInput) return;

      counterButtons.forEach(button => {
        button.addEventListener('click', function() {
          let currentValue = parseInt(counterInput.value) || 1;
          //if buttons text is '+' adds 1
          if (this.textContent.trim() === '+') {
            counterInput.value = currentValue + 1;
              //else if buttons text is '-' adds 1
          } else if (this.textContent.trim() === '-') {
            // makes sure the counter doesnt go lower than 1
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
