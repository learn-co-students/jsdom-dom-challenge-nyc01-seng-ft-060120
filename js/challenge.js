document.addEventListener("DOMContentLoaded", function(e){

    let counter = document.getElementById("counter");

    let intervalID = setInterval(() => counter.innerText = Number(counter.innerText) + 1, 1000);
    
    const body = document.querySelector("body");
    
    body.addEventListener("click", (e) => {

       const buttons = document.querySelectorAll("button");
    //    console.log(buttons);

        if (e.target === buttons[0]){
            counter.innerText = Number(counter.innerText) - 1;
        } else if (e.target === buttons[1]) {
            counter.innerText = Number(counter.innerText) + 1;
        } else if (e.target === buttons[2]){
            const like = document.createElement("li");
            const ul = document.querySelector(".likes");
            ul.appendChild(like);
            like.innerText = `I liked ${counter.innerText}`;
        }
        else if (e.target === buttons[3]){
            clearInterval(intervalID);
            buttons[0].disabled = true;
            buttons[1].disabled = true;
            buttons[2].disabled = true;
            buttons[3].innerText = "Resume";
            if (e.target.innerText = "Resume"){
                setInterval(intervalID);
            }
        }
        else if (e.target === buttons[4]) {
            e.preventDefault();
            const para = document.createElement("p");
            const inputValue = document.querySelector("input[type='text']");
            para.innerText = inputValue.value 
            const div = document.getElementById("list");
            div.append(para);
        }
    });
});