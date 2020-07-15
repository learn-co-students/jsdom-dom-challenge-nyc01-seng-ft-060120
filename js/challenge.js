 
document.addEventListener("DOMContentLoaded", function(e) {
        const counter = document.getElementById('counter')
        // const countInteger = counter.textContent = parseInt(counter.textContent, 10) + 1
        
         let timerId = setInterval(() => counter.innerText++, 1000)    

         const buttonContainer = document.querySelector('.button-container')
         const minusButton = document.getElementById('minus')
         const plusButton = document.getElementById('plus')
         const heartButton = document.getElementById('heart')
         const pauseButton = document.getElementById('pause')

         buttonContainer.addEventListener('click', function(e) {
             if (e.target === minusButton) {
                 counter.textContent = parseInt(counter.textContent, 10) - 1
             } 
             if (e.target === plusButton) {
                 counter.textContent = parseInt(counter.textContent, 10) + 1
             }
             if (e.target === heartButton) {
                 // save the specific number => counter.

             }
             
             if (e.target === pauseButton && e.target.innerText === 'pause') {
                 clearInterval(timerId)
                 minusButton.disabled = true
                 plusButton.disabled = true
                 heartButton.disabled = true
                 pauseButton.innerText = "resume"
                } else {
                  // addListener for a click?
                    let timerId = setInterval(() => counter.innerText++, 1000)
                     pauseButton.innerText = "pause"
                     minusButton.disabled = false
                     plusButton.disabled = false
                     heartButton.disabled = false
    
                 }
             
         })
    


    
    

   

    

   
})


// once page is loaded, we want the timer to start


