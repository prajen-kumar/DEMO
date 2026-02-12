function show() {
    // 1. Create a container for the alert
    const alertBox = document.createElement('div');
    alertBox.className = 'dynamic-dialogbox';
    
    // 2. Set the internal HTML (including a close button)
    alertBox.innerHTML = `
        <span class="close-btn" onclick="this.parentElement.remove()">x</span>
        <div class="head">This webpage Says:</div>
        <div class="body">Dear user,if you are using mobile please zoom out for good experience.</div>
    `;

    // 3. Add it to the page
    document.body.appendChild(alertBox);
     
}
setTimeout(show,1000);
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



