function changeButton(button) {
  const buttonElement=document.querySelector(`.js-${button}-button`);

  


  if(!buttonElement.classList.contains('button-on') ) {
    turnOffPreviousButton();
    buttonElement.classList.add('button-on')
  } else {
    buttonElement.classList.remove('button-on')
  }

  
}

  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.button-on');
    if (previousButton) {
      previousButton.classList.remove('button-on');
    }
  }
