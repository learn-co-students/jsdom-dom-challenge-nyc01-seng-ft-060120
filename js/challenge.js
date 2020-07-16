document.addEventListener("DOMContentLoaded", function(e) {
    const counterNumber = document.querySelector('#counter')
    const body = document.querySelector('body')
    const likesUl = document.querySelector('.likes')
    const counterCountUp = setInterval(increment, 1000)
    const pauseButton = document.querySelector('#pause')



    function increment() {
        counterNumber.innerText = parseInt(counterNumber.innerText, 10) + 1;
    };

    function decrement() {
        counterNumber.innerText = parseInt(counterNumber.innerText, 10) - 1;
    };


    function likeNumber() {
        likesArray = Array.from(likesUl.childNodes)
        idsArray = likesArray.map(li => li.id)
        potentialChildId = counterNumber.innerText

        if (idsArray.includes(potentialChildId)) {
            const likeLi = document.getElementById(potentialChildId)
            const liSpan = likeLi.querySelector('span')
            liSpan.innerText = parseInt(liSpan.innerText) + 1
        } else {
            const newLikeLi = document.createElement('li');
            newLikeLi.id = counterNumber.innerText;
            newLikeLi.innerHTML = `${counterNumber.innerText} was liked <span>1</span> time`;
            likesUl.appendChild(newLikeLi);
        };

    }


    function pauseCounter() {
        if (pauseButton.innerText === "pause"){
            clearInterval(counterCountUp)
            pauseButton.innerText = "resume"
        }
        else { 
            setInterval(increment, 1000)
            pauseButton.innerText = "pause"
        }

    }


    body.addEventListener('click', function(e) {
        if (e.target.id === 'minus') { decrement() }
        if (e.target.id === 'plus') { increment() }
        if (e.target.id === 'heart') { likeNumber() }
        if (e.target.id === 'pause') { pauseCounter() }

    })

    counterCountUp


})