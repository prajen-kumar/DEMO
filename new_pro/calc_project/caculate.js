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
     document.getElementById('demo').style.display='block';
    document.getElementByclassName('dynamic-dialogbox').style.display='block';
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
function end(){
    
    document.getElementById('outline').style.display='none';
    document.getElementById('out').style.display='none';
  }
  function show(){
    
    document.getElementById('outline').style.display='block';
    document.getElementById('out').style.display='block';
    document.getElementById('head').innerHTML="<b>WebPage Says:</b>";
    document.getElementById('body').innerHTML="Dear User,if you are using Mobile.<br>zoom-out for good Experience.";

  }
  setTimeout(show,20);





