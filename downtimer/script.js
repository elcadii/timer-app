
let count; 

function countdown() {
    let datNow = new Date().getTime();
    let countdownDate = new Date(document.getElementById("countdown-date").value).getTime();


    let gap = countdownDate - datNow;
    console.log(gap);

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let textday = Math.floor(gap / day);
    let texthour = Math.floor((gap % day) / hour);
    let textminut = Math.floor((gap % hour) / minute);
    let textsecond = Math.floor((gap % minute) / second);

// Update day
if (textday < 10) {
    document.querySelector(".day").innerHTML = `0${textday}`;
} else {
    document.querySelector(".day").innerHTML = textday;
}

// Update hour
if (texthour < 10) {
    document.querySelector(".hour").innerHTML = `0${texthour}`;
} else {
    document.querySelector(".hour").innerHTML = texthour;
}

// Update minute
if (textminut < 10) {
    document.querySelector(".minute").innerHTML = `0${textminut}`;
} else {
    document.querySelector(".minute").innerHTML = textminut;
}

// Update second
if (textsecond < 10) {
    document.querySelector(".second").innerHTML = `0${textsecond}`;
} else {
    document.querySelector(".second").innerHTML = textsecond;
}


    if (gap < 0) {
        document.querySelector(".day").innerHTML = "00";
        document.querySelector(".hour").innerHTML = "00";
        document.querySelector(".minute").innerHTML = "00";
        document.querySelector(".second").innerHTML = "00";
        clearInterval(count);
        
        if (countdownDate < datNow) {
            document.getElementById('nomError').textContent = 'Le nom est ob';
            return;
        }
    
    }
}

document.getElementById("start-countdown").addEventListener("click", function() {
    if (count) {
        clearInterval(count);
    }

    if (!document.getElementById("countdown-date").value) {
        document.getElementById('nomError').textContent = 'Le nom est obligatoire';
        return;
    }

    count = setInterval(countdown, 1000);
    countdown(); 
});
