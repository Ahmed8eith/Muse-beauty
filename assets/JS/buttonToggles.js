//button toggles function, dynamically toggles the color of buttons with different classes for header & shopping page

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


// answer reveal toggle for FAQS page 

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.answer-btn');
  const questions = document.querySelectorAll('.question');
  const answers = document.querySelectorAll('.ans');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      //checks if a button is already clicked
      if (answers[index].classList.contains('show')) {
        answers[index].classList.remove('show');
        button.style.color = 'rgba(65, 48, 38, 1)';
        questions[index].style.color = 'rgba(65, 48, 38, 1)';
        button.textContent = '+';
      } else {
        // this function Closes all opened answers when clicking another button
         buttons.forEach((btn, i) => {
           btn.style.color = 'rgba(65, 48, 38, 1)';
           btn.textContent = '+';
           questions[i].style.color = 'rgba(65, 48, 38, 1)';
           answers[i].classList.remove('show');
         });
        // this toglles the clicked answer
        button.style.color = 'rgba(237, 138, 25, 1)';
        questions[index].style.color = 'rgba(237, 138, 25, 1)';
        answers[index].classList.add('show');
        button.textContent = '-';
      }
    });
  });
});
