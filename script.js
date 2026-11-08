
const birthday = new Date("2027-03-10T00:00:00+08:00").getTime();

function updateCountdown() {
    const now = Date.now();
    const difference = birthday - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const message = document.getElementById("message");

    if (difference <= 0) {
        days.textContent = "000";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        message.textContent = "HAPPY BIRTHDAY!";
        return;
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / (1000 * 60)) % 60);
    const s = Math.floor((difference / 1000) % 60);

    days.textContent = String(d).padStart(3, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
