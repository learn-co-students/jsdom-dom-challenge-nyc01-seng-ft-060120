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

//As a user, I can 'like' an individual number of the counter. 
//I should see count of the number of 'likes' associated with that number.
//select the node we want to add a like to
//call eventlistener on that node
//function inside eventlistener should create an li as a child of ul
//the li should contain the number of the counter when it was clicked and the amount of times that number was liked


const likeBtn = document.getElementById("heart")

likeBtn.addEventListener("click", function(e){
    if(e.target.matches('#heart')){
    const ul = document.querySelector("ul")
    let li = ul.appendChild(document.createElement("li"))
    li.innerText = counter.innerText + "❤️"
    }
})

const pauseBtn = document.getElementById("pause")



pauseBtn.addEventListener("click", function(){
    let timeoutID = intervalCounter.setTimeout(function(){
        counter.innerText = 0 + parseInt(counter.innerText
            )
        (pauseBtn.innerText = "Resume")
})
})
//pause
//select the pause button(check)
// add event listener to pausebtn that pauses the counter


// const upVoteButtons = document.getElementsByClassName("up-vote")
  // // const upVoteButtons = document.querySelectorAll(".up-vote")

  // const upVoteButtonsArray = Array.from(upVoteButtons)

//   movieList.addEventListener("click", function(e){
//     if(e.target.matches('.up-vote')){
//      const clickedButton = e.target
//       const parentLi = clickedButton.parentElement
//       const scoreSpan = parentLi.querySelector('span')
//       scoreSpan.textContent = parseInt(scoreSpan.textContent, 10) + 1
//    }
//  })



  // upVoteButtonsArray.forEach(function(button){
  //   button.addEventListener("click", function(e){
      // const clickedButton = e.target
      // const parentLi = clickedButton.parentElement
      // const scoreSpan = parentLi.querySelector('span')
      // scoreSpan.textContent = parseInt(scoreSpan.textContent, 10) + 1
  //   }) // closing addEventListener
  // }) // closing forEach

