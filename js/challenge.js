document.addEventListener('DOMContentLoaded', (event) => {
  const clockElement = document.getElementById('counter');
  const minusButton = document.getElementById('minus');
  const plusButton = document.getElementById('plus');
  const heartButton = document.getElementById('heart');
  const pauseButton = document.getElementById('pause');
  const inputBox = document.getElementById('comment-input');
  const commentList = document.getElementById('list');
  const likeContainer = document.querySelector('.likes');
  const submitButton = document.getElementById('submit');
  const commentForm = document.getElementById("comment-form");
  var counter = 0;
  const timerInterval = setInterval(updateTimer, 1000);
  var likeTracker = {};
  var paused = false;

  function updateTimer(value=1) {
    if (paused) {return};

    counter += value;
    clockElement.textContent = counter;
  };

  minusButton.addEventListener('click', (event) => {updateTimer(-1)});
  plusButton.addEventListener('click', (event) => {updateTimer(1)});

  // Handle pause button logic
  pauseButton.addEventListener('click', (event) => {
    paused = !paused;
    event.target.textContent = (paused) ? "resume" : "pause";
    minusButton.disabled = paused;
    plusButton.disabled = paused;
    heartButton.disabled = paused;
    submitButton.disabled = paused;
  });

  commentForm.addEventListener('submit', addComment);

  function addComment(event) {
    event.preventDefault();
    const comment = document.createElement("p");
    comment.textContent = inputBox.value;
    commentList.append(comment);
  }

  heartButton.addEventListener('click', (event) => {
    if (!(counter in likeTracker)) {
      likeTracker[counter] = {value:0};
    };
    likeTracker[counter].value += 1;
    addLike();
  });

  function addLike() {
    let likeInstance = document.getElementById(`like-number-${counter}`);
    if (!likeInstance) {
      likeInstance = document.createElement("li");
      likeInstance.id = `like-number-${counter}`;
      likeContainer.append(likeInstance);
    }
    likeInstance.textContent = `${counter} has been liked ${likeTracker[counter].value} times`;
  }


}) // End of Document Loaded
