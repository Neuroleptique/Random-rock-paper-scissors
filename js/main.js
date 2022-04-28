
document.querySelector('button').onclick = randomRPC

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