const clockBox = document.querySelector(".js-clock"),
    clockTitle = clockBox.querySelector("h1")

function getTime() {
    const date = new Date();
    const mins = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${mins<10 ? `0${mins}` : mins}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();
