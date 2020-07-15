/*
    √ 1. increment timer every second the page is loaded
        a. select the timer
        b. increment it by one setInterval() - based on the DOMContentLoaded
    √ 2. manually increment and decrement counter using +/- buttons
        a. select timer
        b. select buttons
        c. increment +/- 1 based on button
    √ 4. pause the counter
        a. set event listener on pause button
        b. change state to inactive for all other buttons
        c. update text in pause button to "resume"
        d. update text to "pause" after resume is hit
    √ 5. add comments
        a. select paragraph <div>
        b. event listener on form "submit"
        c. prevent default action
        e. create new p element
        f. append p to div
    3. like individual number on the counter
        a. select the current number on the timer
        b. select heart button
        c. create new li to put in ul to record likes
        c. if first character of li element is equal to current timer number, increment like count for timer number
*/

document.addEventListener("DOMContentLoaded", function() {
    
    const timer = document.getElementById("counter")
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const submit = document.getElementById("submit")
    const commentText = document.getElementById("comment-input")
    const paragraph = document.getElementById("list")
    const likeList = document.querySelector(".likes")
    const likedNumbers = []


    function incrementTimer(){
        timer.innerText = parseInt(timer.innerText) + 1
    }

    function decrementTimer(){
        timer.innerText = parseInt(timer.innerText) -1 
    }
        
    
    let intervalId = window.setInterval(incrementTimer, 1000)

    document.addEventListener("click", function (e) {
        if (e.target.matches("#minus")) {
            decrementTimer()
        }
        else if (e.target.matches("#plus")) {
            incrementTimer()
        }
        else if (e.target.matches("#heart")) {
            if (likedNumbers.length === 0){
                console.log("this number has not been liked")
                const newLike = {number: `${timer.innerText}`, likes: 1}
                likedNumbers.push(newLike)
                const likeText = document.createElement("li")
                likeText.innerText = `${likedNumbers[likedNumbers.length - 1]["number"]} has been liked ${likedNumbers[likedNumbers.length -1]["likes"]} times`
                likeList.appendChild(likeText)
            } else {
                console.log(likedNumbers[0])
                for (let i = 0; i < likedNumbers.length; i++){
                    if (likedNumbers[i]["number"] === timer.innerText) {
                        console.log("this number has been liked")
                        likedNumbers[i]["likes"] += 1
                    } else {
                        console.log("this number has not been liked")
                        const newLike = {number: `${timer.innerText}`, likes: 1}
                        likedNumbers.push(newLike)
                        const likeText = document.createElement("li")
                        likeText.innerText = `${likedNumbers[likedNumbers.length - 1]["number"]} has been liked ${likedNumbers[likedNumbers.length -1]["likes"]} times`
                        likeList.appendChild(likeText)
                        }
                    }
            }

            // const like = document.createElement("li")
            // likeList.appendChild(like)


                


        }
        else if (e.target.matches("#pause")){
            if (pause.innerText === "pause"){
                minus.disabled = true;
                plus.disabled = true;
                heart.disabled = true;
                submit.disabled = true;
                pause.innerText = "resume"
                window.clearInterval(intervalId)
            } else {
                minus.disabled = false;
                plus.disabled = false;
                heart.disabled = false;
                submit.disabled = false;
                pause.innerText = "pause"
                intervalId = window.setInterval(incrementTimer, 1000)
            }
            
        };
    });

    document.addEventListener("submit", function (e) {
        e.preventDefault()
        const comment = document.createElement("p")
        comment.innerText = commentText.value
        paragraph.appendChild(comment)
        commentText.parentNode.reset()
    })
    
});