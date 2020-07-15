const counter = document.getElementById("counter");
// console.log(counter);
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const timeButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");
const commentBox = document.getElementById("comment-input");
​
let interval = window.setInterval(countUp, 1000);
​
const likeList = document.getElementsByClassName("likes")[0];
// console.log(likeList)
​
minus.addEventListener("click", countDown);
plus.addEventListener("click", countUp);
heart.addEventListener("click", addLike);
timeButton.addEventListener("click", toggle);
submitButton.addEventListener("click", function(e){
    e.preventDefault()
    makeComment()
});
​
​
​
function countUp() {
    let intCount = parseInt(counter.innerText, 10);
    intCount += 1;
    counter.innerText = intCount;
}
​
function countDown() {
    let intCount = parseInt(counter.innerText, 10);
    intCount -= 1;
    counter.innerText = intCount;
}
​
function addLike() {
    let currentCount = parseInt(counter.innerText, 10);
    let li = document.createElement("li");
    li.setAttribute('data-num', `${currentCount}`);
    let likeCount = document.createElement("span");
    let likeListArray = Array.from(likeList.children);
    let temp;
​
    likeListArray.forEach(listItem => {
        let dataNum = parseInt(listItem.getAttribute('data-num'), 10);
        if (dataNum === currentCount){temp = listItem;}
    });
​
    if (!!temp){
        let count = parseInt(temp.children[0].innerText, 10);
        count += 1;
        temp.children[0].innerText = count;
        if (count === 2){temp.insertAdjacentHTML('beforeend', "s");}
    } else {
        li.innerText = `${currentCount} has been liked `;
        li.appendChild(likeCount);
        likeCount.innerText = "1";
        likeCount.insertAdjacentHTML('afterend', " time")
        
        likeList.appendChild(li);
    }
}
​
function pause() {
    window.clearInterval(interval)
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    submitButton.disabled = true;
    timeButton.innerText = "resume";
}
​
function resume() {
    interval = window.setInterval(countUp, 1000);
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submitButton.disabled = false;
    timeButton.innerText = "pause";
}
​
function toggle() {
    if (timeButton.innerText === "pause"){pause();}
    else {resume();}
}
​
function makeComment() {
    let newComment = document.createElement("div");
    let div = document.getElementById("list");
    newComment.innerText = commentBox.value;
    div.appendChild(newComment);
