let button = document.getElementById('submit')
button.addEventListener('click', selValue)

function selValue() {
  let selectedValue = document.getElementById('sel-value')

  let hiddenDivStart = document.querySelector('div.state-start')
  let hiddenDivEnd = document.querySelector('div.state-end')

  if (hiddenDivEnd.classList.contains('hide')) {
      hiddenDivStart.classList.add('hide')
    hiddenDivEnd.classList.remove('hide')
  }

  if (document.getElementById('num1').checked) {
      selectedValue.textContent = '1'
  } else if (document.getElementById('num2').checked) {
      selectedValue.textContent = '2'
  } else if (document.getElementById('num3').checked) {
      selectedValue.textContent = '3'
  } else if (document.getElementById('num4').checked) {
      selectedValue.textContent = '4'
  } else {
      selectedValue.textContent = '5'
  }
}