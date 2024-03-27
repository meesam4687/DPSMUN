var countDownDate = new Date("Jul 27, 2024 00:00:00").getTime();
setInterval(function () {
    let now = new Date().getTime();
    let remaining = countDownDate - now;
    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    document.querySelector(".days-text").innerHTML = days;
    document.querySelector(".hours-text").innerHTML = hours;
    document.querySelector(".minutes-text").innerHTML = minutes;
    document.querySelector(".seconds-text").innerHTML = seconds;
    if (remaining < 0) {
        document.querySelector(".countDown").innerHTML = "Ended";
    }
}, 1000);