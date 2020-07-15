// Timer increments each second 


const counter = document.getElementById("counter")


// set interval and pause
let intervalCounter = setInterval(function() { 
    counter.innerText = 1 + parseInt(counter.innerText)
}, 1000);

// setTimout
let timeoutID = setTimeout(function() {
    counter.innerText = 0 + parseInt(counter.innerText)
}, 1000)

//Manuually increment and decrement 
const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")

//set functions for Btns 
minusBtn.addEventListener("click", function() {
        counter.innerText = parseInt(counter.innerText) - 1
});

plusBtn.addEventListener("click", function() { 
        counter.innerText = parseInt(counter.innerText) + 1
});

// const upVoteButtons = document.getElementsByClassName("up-vote")
  // // const upVoteButtons = document.querySelectorAll(".up-vote")

  // const upVoteButtonsArray = Array.from(upVoteButtons)


  // upVoteButtonsArray.forEach(function(button){
  //   button.addEventListener("click", function(e){
      // const clickedButton = e.target
      // const parentLi = clickedButton.parentElement
      // const scoreSpan = parentLi.querySelector('span')
      // scoreSpan.textContent = parseInt(scoreSpan.textContent, 10) + 1
  //   }) // closing addEventListener
  // }) // closing forEach

