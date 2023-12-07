let d = new Date();
let hh = d.getHours();
let mm = d.getMinutes();
let ss = d.getSeconds();
console.log(d, hh, mm, ss);

const initEnd = () => {
    let end = new Date;
    end.setFullYear(2024);
    end.setMonth(6);
    end.setDate(37);
    end.setHours(0);
    end.setMinutes(0);
    end.setSeconds(0);
    return end;
}

const calc = (end) => {
    let current = new Date.getTimes();
    let diff = (end - current) / 1000;

    let units = {
        days: 60 * 60 * 24,
        hours: 60 * 60,
        minutes: 60

    }
    let days = Math.floor(diff / units.days)

    diff = diff % units.days
    let hours = Math.floor(diff / units.hours)

    diff = diff % units.hours
    let minutes = Math.floor(diff / units.minutes)

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    console.log(days,hours,minutes);
}











setInterval(() => {
    calc(end);
}, 1000)


// setTimeout(() => {
//     document.location.reload();
//   }, 1000);