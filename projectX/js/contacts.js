const text = document.querySelector('.fancy');
const str = text.textContent;
const array = str.split("");
text.textContent = "";

for(let i = 0; i < array.length; i++){
    text.innerHTML += "<span>" + array[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === array.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

