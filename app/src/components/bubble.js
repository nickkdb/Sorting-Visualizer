import { setWidth } from "./width";

const SPEED= 5;
let lastRender;
let position;
let array;
let divs;
let stage;
let swaps;
let madeSwaps;


export const startBubble= (input) => {
    lastRender= 0;
    position= 0;
    array= input;
    divs= document.getElementById('container').querySelectorAll('.array');
    stage= "pink";
    swaps= 0;
    madeSwaps= true;
    requestAnimationFrame(runLoop);
}

const runLoop= (timeStamp) => {

    while (madeSwaps) {
        requestAnimationFrame(runLoop);
        let timeTilRender= (timeStamp - lastRender) / 1000;
        if (timeTilRender < 1/ SPEED) return;
        lastRender= timeStamp;
        console.log('rendering!');

        switch(stage) {
            case "pink":
                setColor();
                break;
            case "violet":
                updateArray();
                break;
            case "finished":
                setToBlue();
        }
    }
}

function setColor() {
    divs[position].style.backgroundColor= "darkviolet";
    divs[position+1].style.backgroundColor= "darkviolet";
    stage= "violet";
}

function updateArray() {

    if (array[position] > array[position + 1]) {
        divs[position].style.backgroundColor= "red";
        divs[position+1].style.backgroundColor= "red";
        let temp= array[position];
        array[position] = array[position+1];
        let width1= setWidth(array[position+1]);
        divs[position].style.width= `${width1}vmin`;
        array[position+1]= temp;
        let width2= setWidth(temp);
        divs[position+1].style.width = `${width2}vmin`;
        swaps++;
    }

    stage= "finished";
}

function setToBlue() {
    divs[position].style.backgroundColor= "rgb(247, 144, 161)";
    divs[position+1].style.backgroundColor= "rgb(247, 144, 161)";

    stage= "pink";

    if (position + 1 === array.length - 1) {
        (swaps > 0 ? swaps = 0 : madeSwaps= false);
        position= 0;
    } else {
        position++;
    }
}