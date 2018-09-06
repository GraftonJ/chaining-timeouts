// 2. If either select box does not have an option selected, surface an error
// 3. When you click the button, make a change to the changing element
//   (a) If 'Color' is selected, change the color of the text
//   (b) If 'Background Color' is selected, change the background-color
//   (c) If 'Font Style' is selected, change the font-style
//   (d) If 'Font Weight' is selected, change the font-weight
// 4. Run the transitions in order. Make sure to nest the timeouts!
// 5. When you click the "Go!" button again, it should clear out the styles first before transition to new styles.
document.addEventListener("DOMContentLoaded", function(event) {


  const button = document.getElementById('transition')
  const changeElem = document.getElementById('changing')
  const firstTransition = document.getElementById('change-A')
  const secondTransition = document.getElementById('change-B')



  // 1. Add an event listener to the button on click
  button.addEventListener('click', function() {
    let alert = document.querySelector('.alert.alert-warning')
    if (alert) {
        error.removeChild(alert)
    }
    if(firstTransition.selectedIndex === 0 || secondTransition.selectedIndex === 0) {
      let errorMessage = document.createElement('div')
      errorMessage.setAttribute('class', 'alert alert-warning')
      errorMessage.innerText = 'Warning!'
      document.getElementById('error').appendChild(errorMessage)
      return
    }
    setTimeout(function() {
      if (firstTransition.selectedIndex === 1) {
        changeElem.style.color = 'green'
      } else if (firstTransition.selectedIndex === 2) {
        changeElem.style.backgroundColor = 'purple'
      } else if (firstTransition.selectedIndex === 3) {
        changeElem.style.fontStyle = 'oblique'
      } else if (firstTransition.selectedIndex === 4) {
        changeElem.style.fontWeight = 'bold'
      }
    }, 1000)
    setTimeout(function() {
      if (secondTransition.selectedIndex === 1) {
        changeElem.style.color = 'green'
      } else if (secondTransition.selectedIndex === 2) {
        changeElem.style.backgroundColor = 'purple'
      } else if (secondTransition.selectedIndex === 3) {
        changeElem.style.fontStyle = 'oblique'
      } else if (secondTransition.selectedIndex === 4) {
        changeElem.style.fontWeight = 'bold'
      }
    }, 5000)
    button.addEventListener('click', function() {
      changeElem.style = 'inherit'
    })
  })
})
