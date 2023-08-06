let randomNo = parseInt (Math.floor(Math.random()*100)+1);

let submit = document.querySelector("#subt")
let userinput = document.querySelector("#guessfeild")
let guessslot = document.querySelector("#guesses")
let remaining = document.querySelector("#lastresult")
let loworhi = document.querySelector("#loworhi")
let startover = document.querySelector(".resultparas")
let p = document.createElement("p")

let prevguess = [];
let numguess = 1;
let playgame = true;

if(playgame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userinput.value)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("Enter valid number!!!")
    }
    else if(guess < 1){
        alert("Enter valid number!!!")
    }
    else if(guess > 100){
        alert("Enter valid number!!!")
    }
    else{
        prevguess.push(guess);
        if(numguess === 10){
            displaymsg(`Game Over... Random Number is ${randomNo}`);
            displayguess();
            endgame();
        }
        else{
            checkguess(guess);
            displayguess(guess);
        }
    }
}


function checkguess(guess){
    if(guess === randomNo){
        displaymsg("You got it right!")
        endgame()
    }
    else if(guess < randomNo){
        displaymsg("Number is too low")
    }
    else if(guess > randomNo){
        displaymsg("Number is too high")
    }
}


function displayguess(guess){
    userinput.value = '';
    guessslot.innerHTML = `${guess} `;
    numguess++;
    remaining.innerHTML = `${11-numguess}`;
}
    

function displaymsg(message){
    loworhi.innerHTML = `<h3>${message}</h3>`;
    
}


function endgame(){
    userinput.value = "";
    userinput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h3 id = "start">Start Again</h3>`;
    startover.appendChild(p)
    playgame = false;
    newgame()
}

function newgame(){
    const newgame = document.querySelector("#start")
    newgame.addEventListener("click", ()=>{
        randomNo = parseInt(Math.floor(Math.random() * 100) + 1);
        prevguess = []
        numguess = 1;
        guessslot.innerHTML = "";
        remaining.innerHTML = `${11 - numguess}`;
        userinput.removeAttribute("disabled")
        startover.removeChild(p)
        playgame = true;

    })
}