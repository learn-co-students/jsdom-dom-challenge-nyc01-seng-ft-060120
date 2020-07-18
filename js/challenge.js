/*
    1. The timer should increment every second
        - select the timer
        - set interval to 1 second
    2. Increment/Decrement timer using buttons
        - select all buttons
        - event listener on clicks for buttons that call functions
    3. Pause counter
        - clear Interval
        - disable all buttons except pause
        - change text of pause button to "resume"
*/

document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("counter")
    const interval = window.setInterval(incrementTimer, 1000)
    const minus = document.getElementById("minus") 
    const plus = document.getElementById("plus") 
    const heart = document.getElementById("heart") 
    const pause = document.getElementById("pause")
    const submit = document.getElementById("submit") 
    const form = document.getElementById("comment-form")
    const comment = document.getElementById("comment-input")
    const comments = document.getElementById("list")



    function incrementTimer(){
        timer.innerText = parseInt(timer.innerText) + 1
    }
    
    function decrementTimer() {
        timer.innerText = parseInt(timer.innerText) - 1
    }

    document.addEventListener("click", function(e){
        if (e.target === minus){
            decrementTimer()
        } else if(e.target === plus){
            incrementTimer()
        } else if(e.target === pause){
            if (pause.innerText === "pause"){
                pause.innerText = "resume"
                minus.disabled = true
                plus.disabled = true
                heart.disabled = true
                submit.disabled = true
                window.clearInterval(interval)
            } else if (pause.innerText === "resume"){
                pause.innerText = "pause"
                minus.disabled = false
                plus.disabled = false
                heart.disabled = false
                submit.disabled = false
                window.setInterval(incrementTimer, 1000)
            }
        } else if(e.target === heart){
            console.log(heart)
        }
    })

    form.addEventListener("submit", addComment)

    function addComment(e){
        e.preventDefault()
        const newComment = document.createElement("li")
        newComment.innerText = comment.value 
        comments.appendChild(newComment)
    }
});