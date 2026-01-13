function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    document.getElementById('hour').style.transform = `rotate(${30 * hour + minute / 2}deg)`;
    document.getElementById('minute').style.transform = `rotate(${6 * minute}deg)`;
    document.getElementById('second').style.transform = `rotate(${6 * second}deg)`;
}
setInterval(updateClock, 1000);
updateClock();