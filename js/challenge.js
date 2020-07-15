document.addEventListener("DOMContentLoaded", function(e) {
    const counterNumber = document.querySelector('#counter')
    const body = document.querySelector('body')

    body.addEventListener('click', function(e) {
        if (e.target.id === 'minus') { decrement() }
        if (e.target.id === 'plus') { increment() }
        if (e.target.id === 'heart') { decrement() }
        if (e.target.id === 'minus') { decrement() }

    })

    function increment() {
        counterNumber.innerText = parseInt(counterNumber.innerText, 10) + 1;
    }


    function decrement() {
        counterNumber.innerText = parseInt(counterNumber.innerText, 10) - 1;
    }








    setInterval(increment, 1000)








})