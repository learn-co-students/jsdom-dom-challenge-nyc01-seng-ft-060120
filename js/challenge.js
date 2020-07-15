document.addEventListener("DOMContentLoaded", function(e) {
    const counterNumber = document.querySelector('#counter')
    console.log(counterNumber.innerText)
    function increment(){
        counterNumber.innerText = parseInt(counterNumber.innerText, 10) + 1;
    }

    
    setInterval( increment , 1000)








})