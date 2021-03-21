const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "userName",
    SHOW_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    event.preventDefault();
    const naValue = input.value;
    paintGreeting(naValue);
    saveName(naValue);
}

function askName(){
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOW_CN)
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const myName = localStorage.getItem(USER_LS);
    if(myName === null){
        askName();    
    } else {
        paintGreeting(myName);
    }
}

function init(){
    loadName();
}

init();