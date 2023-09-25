
const strike = document.getElementById("strike")
const reset = document.getElementById("reset")
const team1_superover = document.getElementById("team1-superover")
const team2_superover = document.getElementById("team2-superover")
const score_team1 = document.getElementById("score-team1")
const score_team2 = document.getElementById("score-team2")
const wickets_team1 = document.getElementById("wickets-team1")
const wickets_team2 = document.getElementById("wickets-team2")
const strikeSound = new Audio("http://bit.ly/so-ball-hit")
const cheerSound = new Audio("http://bit.ly/so-crowd-cheer")

strike.addEventListener("click" , updateScore)

let arr = [0,1,2,3,4,5,6,"W"]
let team1Balls = 0
let team1Wickets = 0
let team2Balls = 0
let team2Wickets = 0
let team1Score = 0
let team2Score = 0
let type = 1

// function to end score
function endGame(){
    cheerSound.play()
    if(team1Score>team2Score){
        alert("Team 1 won")
    }
    else if(team1Score<team2Score){
        alert("Team 2 won")
    }
    else{
        alert("Draw")
    }
}

function displayScore(){
    score_team1.innerText = team1Score
    score_team2.innerText = team2Score
    wickets_team1.innerText = team1Wickets
    wickets_team2.innerText = team2Wickets
}

function updateScore(){

    strikeSound.pause()
    strikeSound.currentTime = 0
    strikeSound.play()

    let currScore = arr[Math.floor(Math.random()*8)]

    reset.onclick = () => {   
        window.location.reload()
    }

//team2 code

if(type==2){
    team2Balls++
    team2_superover.children[team2Balls-1].innerText = currScore

    if(currScore=="W"){
        team2Wickets++
    }else{
        team2Score += currScore
    }

    if(team2Balls==6 || team2Wickets==2 || team2Score>team1Score){
        type = 3
     const id =    setTimeout(()=>{
            endGame()
        },1000)
    
    }
}

//team1
if(type==1){
    team1Balls++
    team1_superover.children[team1Balls-1].innerText = currScore

    if(currScore=="W"){
        team1Wickets++
    }else{
        team1Score += currScore
    }
    if(team1Balls==6 || team1Wickets==2){
        type = 2
    }
}
// console.log(type, team1Balls)

displayScore()
}
// console.log(team1_superover.children[0])

// reset button out side function
// reset.onclick = function(){
//     window.location.reload()
// }