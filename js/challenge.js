window.addEventListener("DOMContentLoaded", (e) =>{

    const h1Counter = document.querySelector('#counter')
    let count = Number(h1Counter.textContent)
    const plus = document.querySelector('#plus')
    const minus = document.querySelector('#minus')
    const like = document.querySelector('#heart')
    const pause = document.querySelector('#pause')
    const submit = document.querySelector('#submit')
    const form = document.querySelector('#comment-form')
    const commentDiv = document.querySelector('#list')
    const ul = document.querySelector('.likes')
    const btnArray = [plus,minus,like,submit]
    let likeArray = []
    
    
    let interval = setInterval(incrementCount, 1000)
    
    
    function incrementCount(){h1Counter.textContent = count++}

    function plusCount(e){h1Counter.textContent = count++}

    function minusCount(e){h1Counter.textContent = count--}

    function likeCount(e){
        likeArray.push(count)
        let uniArray = [...new Set(likeArray)]
        ul.innerHTML = ''
     
        uniArray.forEach(num => {
            const li = document.createElement('li')
            li.textContent = `${num} has been liked ${(likeArray.filter(n => n === num)).length}`
            ul.append(li)
        })
    }

    function pauseCount(e){

        if (pause.innerText === "pause"){
            clearInterval(interval)
            btnArray.forEach(btn => btn.disabled = "disabled")
            pause.textContent = "resume"
        } else {
            pause.textContent = "pause"
            btnArray.forEach(btn => btn.disabled = "")
            interval = setInterval(incrementCount, 1000)
        }
    }


    function formSubmit(e){
        e.preventDefault()
       
        const p = document.createElement('p')
        p.textContent = form.children[0].value
        commentDiv.append(p)
        form.reset()
    }

    // EVENT LISTENERS

    plus.addEventListener("click", plusCount)
    minus.addEventListener("click", minusCount)
    like.addEventListener("click", likeCount)
    pause.addEventListener("click", pauseCount)
    pause.addEventListener("click", pauseCount)
    form.addEventListener("submit", formSubmit)
  
})