const body = document.querySelector("body");

const IMG_NUM = 6;

function paintImage(imgNum) {
    const image = new Image();
    image.src = `./img/${imgNum +1}.jpg`;
    // body.appendChild(image);
    body.prepend(image);
    image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();