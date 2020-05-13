
let computerNum = Math.floor(Math.random() * 100) + 1
let history = []
let guessRemaining = 5

function guess() {
    let userNum = document.getElementById("guessNumber").value
    let resultMessage = ''

    if (guessRemaining > 0) {

        if (computerNum > userNum) {
            resultMessage = "too low"
            guessRemaining--;
        }

        else if (computerNum < userNum) {
            resultMessage = "too high"
            guessRemaining--;
        }

        else if (computerNum === userNum) {
            resultMessage = "correct"
            guessRemaining = 0;

        }

        console.log(guessRemaining)


        history.push(userNum)
        document.getElementById("resultArea").innerHTML = ` ${resultMessage}`
        document.getElementById("historyArea").innerHTML = `History: ${history}`
    }

    else //this is the same as guessremaining =0 or <0
    {
        alert("u lose")
    }
    document.getElementById("guessRemaining").innerHTML = guessRemaining
}

function resetGame() {

    console.log("is working")
    guessRemaining = 5;
    history = [];
    document.getElementById("guessNumber").value = "";
    document.getElementById("guessRemaining").innerHTML = guessRemaining;
    document.getElementById("resultArea").innerHTML = ""
    document.getElementById("historyArea").innerHTML = `History: ${history}`
    timeOut();
    timecounting(31)

}
function timeOut() {
    clearInterval(myTime);
}



// time start from 0
let myTime; // timer will be assign to this variable
function timecounting(time) {
    myTime = setInterval(() => {
        if (time === 0) {
            return;
        }
        time -= 1
        document.getElementById('timecount').innerHTML = time
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting(31)// fire the timecounting function!!



//1. make the chance feature
//2. reset feature
//3. if use win or lose, the guess button will be disable
//4. add timer feature (if you cannot finnit within 20 sec then game done)