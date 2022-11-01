const daysdata = document.getElementById('days');
const hoursdata = document.getElementById('hours');
const minutesdata = document.getElementById('minutes');
const secondsdata = document.getElementById('seconds');

const christmas = '25 Dec 2022';


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
    hoursdata.innerHTML = hr
    minutesdata.innerHTML = min
    secondsdata.innerHTML = sec

    // //  console.log(date);
    // console.log(day, hr, min, sec);


}

// console.log(countdown().day());

setInterval(countdown, 1000)