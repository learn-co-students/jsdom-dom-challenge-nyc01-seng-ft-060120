const counter = document.getElementById("counter");
// console.log(counter);
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");

const interval = window.setInterval(countUp, 1000);

const likeList = document.getElementsByClassName("likes")[0];
// console.log(likeList)

minus.addEventListener("click", countDown);
plus.addEventListener("click", countUp);


function countUp() {
    let intCount = parseInt(counter.innerText, 10);
    intCount += 1;
    counter.innerText = intCount;
}

function countDown() {
    let intCount = parseInt(counter.innerText, 10);
    intCount -= 1;
    counter.innerText = intCount;
}

function addLike() {
    let li = document.createElement("li");
}