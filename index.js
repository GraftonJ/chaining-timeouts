
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

let transitionOne = ''

// 1. Add an event listener to the button on click
button.addEventListener('click', function () {
  let transitionOne = document.getElementById('change-A').value
  changeElem.style.transitionOne = 'blue'
})

})
