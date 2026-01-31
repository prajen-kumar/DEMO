 const resultInput = document.getElementById('result');
  const buttons = document.querySelectorAll('#but button');
  resultInput.readOnly = true;

  document.getElementById('but').addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'BUTTON') {
      
      if (clickedElement.hasAttribute('data-clear')) {
        resultInput.value = '';

      } 
      else if (clickedElement.hasAttribute('data-evaluate')) {
        if (resultInput.value === '') {
        alert('Please enter a valid operation!');
        return;
    }
        try {
          resultInput.value = new Function('return ' + resultInput.value)();
        } catch (e) {
          resultInput.value = 'Error';
        }
      } 
      else if (clickedElement.hasAttribute('data-value')) {
        resultInput.value += clickedElement.getAttribute('data-value');
      }
    }
  });
