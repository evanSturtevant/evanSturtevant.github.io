var shouldCountdown = false;
var stopwatchOutput = document.getElementById("stopwatch");

function countDown(){
    if (!shouldCountdown) {return;}

    if (stopwatchOutput.value < 0) { stopwatchOutput.value *= -1;}
    stopwatchOutput.value --;

    if (stopwatchOutput.value == 0){
        shouldCountdown = false;
        alert("BEEP BEEP");
        return;
    }

    setTimeout(countDown, 1000);
}

function start(){
    if (shouldCountdown){
        return;
    }

    shouldCountdown = true;
    setTimeout(countDown, 1000);
}

function stop(){
    if (!shouldCountdown){
        return;
    }

    shouldCountdown = false;
}

function reset(){
    stop();
    stopwatchOutput.value = "";
}