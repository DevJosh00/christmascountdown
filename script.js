const daysdata = document.getElementById('days');
const hoursdata = document.getElementById('hours');
const minutesdata = document.getElementById('minutes');
const secondsdata = document.getElementById('seconds');

const christmas = '25 Dec 2022';

let showingAlert = false;
const xmas = "Christmas";
const allert = "Is Coming!!";

function countdown() {

    const christmasDate = new Date(christmas);
    const current = new Date();
    const date = (christmasDate - current);

    const basesec = Math.floor(date / 1000);
    const day = Math.floor(basesec / 3600 / 24);
    const hr = Math.floor(basesec / 3600) % 24;
    const min = Math.floor(basesec / 60) % 60;
    const sec = Math.floor(basesec) % 60;


    daysdata.innerHTML = day;
    hoursdata.innerHTML = formatTime(hr)
    minutesdata.innerHTML = formatTime(min)
    secondsdata.innerHTML = formatTime(sec)


    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    const changTilte = setInterval(() => {

        document.title = showingAlert ? xmas : allert;
        showingAlert = !showingAlert;
    }, 500);




}



// console.log(countdown().day());

// //  console.log(date);git
// console.log(day, hr, min, sec);


setInterval(countdown, 1000)