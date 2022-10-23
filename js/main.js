
let round = 0
let finalScore = 0

document.querySelector('.start').onclick = randomRPC



function randomRPC() {
    let rpc = Math.random() ;
    if (rpc < 0.3333){
        document.querySelector('img').src = "img/rock.webp"
    }else if(rpc > 0.6666) {
        document.querySelector('img').src = "img/paper.webp"
    }else{
        document.querySelector('img').src = "img/scissor.webp"
    }

}

function score(result){
    round += 1
    result === 'win' ? finalScore += 1 :
    result === 'lose' ? finalScore -= 1 : finalScore
    const displayScore = document.querySelector('.score')
    let displayResult = finalScore > 0 ? 'I am winning!' :
                          finalScore < 0 ? 'Oh no I am losing' : 'We are tied'
    displayScore.textContent = displayResult

    const displayRound = document.querySelector('.round')
    displayRound.textContent = round
}