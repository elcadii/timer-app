let chrono = document.getElementById("chrono");
let resetbtn = document.getElementById("reset");
let stopbtn = document.getElementById("stop");
let startbtn = document.getElementById("start");
let savebtn = document.getElementById("save");

let heurs = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timeout;
let estArrete = true;


// function to start
function demarrer() {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
}

// function to stop
function arreter() {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
}

// function to save the  time
function save() {
    if (!estArrete) {
        estArrete = true;
    }
    console.log(chrono.textContent);
    
    const tableBody = document.getElementById('informationhestory').querySelector('tbody');
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = chrono.textContent;
    
}

// function to update the time
function defilerTemps() {
    if (estArrete) {
        return;
    }

    milliseconds +=11;

    if (milliseconds  >= 1000) {
        milliseconds = 0;
        seconds++
    }

    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes == 60) {
        heurs++;
        minutes = 0;
    }

    // Formatting the time
    let displayMilliseconds;
    if (milliseconds < 10) {
        displayMilliseconds = "00" + milliseconds;
    } else if (milliseconds < 100) {
        displayMilliseconds = "0" + milliseconds;
    } else {
        displayMilliseconds = milliseconds;
    }
    
    let displaySeconds;
    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }
    
    let displayMinutes;
    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }
    
    let displayHeurs;
    if (heurs < 10) {
        displayHeurs = "0" + heurs;
    } else {
        displayHeurs = heurs;
    }
    // Updating the chrono 
    chrono.textContent = `${displayHeurs} : ${displayMinutes} : ${displaySeconds} : ${displayMilliseconds}`;
    timeout = setTimeout(defilerTemps, 7);
}
 
// function to reset the timer
function reset() {
    chrono.textContent = "00 : 00 : 00 : 000";
    estArrete = true;
    heurs = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    clearTimeout(timeout);
}

startbtn.addEventListener("click", demarrer);
stopbtn.addEventListener("click", arreter);
resetbtn.addEventListener("click", reset);
savebtn.addEventListener("click", save);




