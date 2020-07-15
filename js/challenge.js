document.addEventListener('DOMContentLoaded', (event) => {
  const clockElement = document.getElementById('counter');
  const minusButton = document.getElementById('minus');
  const plusButton = document.getElementById('plus');
  const heartButton = document.getElementById('heart');
  const pauseButton = document.getElementById('pause');
  const submitButton = document.getElementById('submit');
  const inputBox = document.getElementById('comment-input');
  const commentList = document.getElementById('list');
  const likeContainer = document.querySelector('.likes')[0]
  const timerInterval = setInterval(updateTimer, 1000)
  var counter = 0;
  var paused = false;

  function updateTimer(value=1) {
    if (paused) {return}

    counter += value
    clockElement.textContent = counter;
  }

  minusButton.addEventListener('click', (event) => {updateTimer(-1)})
  plusButton.addEventListener('click', (event) => {updateTimer(1)})

  // Handle pause button logic
  pauseButton.addEventListener('click', (event) => {
    paused = !paused
    event.target.textContent = (paused) ? "resume" : "pause";
    minusButton.disabled = paused;
    plusButton.disabled = paused;
  })


}) // End of Document Loaded
