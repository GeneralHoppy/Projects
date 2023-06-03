const message = document.querySelector(".message")
const guessInput = document.querySelector(".guess")
const checkButton= document.querySelector(".check")
const scorePoints = document.querySelector(".score")
const highScorePoints = document.querySelector(".highscore")
const body = document.querySelector("body")
const number= document.querySelector(".number")
const resetButton = document.querySelector(".again")

// message.innerHTML = "Correct👍"

let secretNumber = Math.floor(Math.random() * 20 + 1)
let score = 20;
let highscore = 0;



checkButton.addEventListener("click", ()=>{
    // console.log("check clicked")
    const guess = Number(guessInput.value);
    

   
//Falsey Values => undefined, null, false, 0, NaN, ""
    if (!guess) {
        message.innerHTML = "No number typed";
    }else if(guess == secretNumber){
        message.innerHTML = "Correct!"
        //HighScore = 0
        //Score = 17
        if (score > highscore) {
            highscore = score;
            highScorePoints.innerHTML = highscore
        }
        number.innerHTML = secretNumber;
        
        body.style.backgroundColor = "green";
    }else if(guess < secretNumber){
        if (score > 0) {
             message.innerHTML = "Too Low"
        score--;//Decrease Score
        scorePoints.innerHTML = score;//Update Ui
        }else{
           message.innerHTML = "You Lost👿👿"  
        }
       

    }else if(guess > secretNumber){
        if (score > 0) {
            message.innerHTML = "Too Low"
       score--;//Decrease Score
       scorePoints.innerHTML = score;//Update Ui
       }else{
          message.innerHTML = "You Lost👿👿"  
       }
      
    }
    
})

resetButton.addEventListener("click", ()=>{
    secretNumber = Math.floor(Math.random() * 20 + 1)
    score = 20;
    scorePoints.innerHTML = score
    message.innerHTML = "Start guessing..."
    body.style.backgroundColor = "black"
    number.innerHTML = '?'
    guessInput.value = ""

})