document.addEventListener("DOMContentLoaded", function(e) {
    const counterNumber = document.querySelector('#counter')
    const body = document.querySelector('body')
    const likesUl = document.querySelector('.likes')
    console.dir(likesUl.childNodes)

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

        if (idsArray.includes(potentialChildId)){
            const likedNumberSpan = likedNumberLi.querySelector('span');
            likedNumberSpan.innerText = parseInt(likedNumberSpan.innerText) + 1;
        }

        else {    
            const newLikeLi = document.createElement('li');
            newLikeLi.id = counterNumber.innerText;
            newLikeLi.innerHTML = `${counterNumber.innerText} was liked <span>1</span> time`;
            likesUl.appendChild(newLikeLi);
        };
    
    }


    body.addEventListener('click', function(e) {
        if (e.target.id === 'minus') { decrement() }
        if (e.target.id === 'plus') { increment() }
        if (e.target.id === 'heart') { likeNumber() }
        if (e.target.id === 'minus') { decrement() }

    })









    setInterval(increment, 1000)








})