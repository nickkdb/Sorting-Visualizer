import {setWidth } from "../utils/width";

const SPEED= 5;
let array;
let divs;
let lastRender;
let smallest;
let indexOfSmallest;
let startingIndex;


export const startSelection= (input) => {
lastRender= 0;
divs= document.getElementById('container').querySelectorAll('array');
array= input;
smallest= null;
startingIndex= 0;
requestAnimationFrame(runLoop);
}

const runLoop= (timeStamp) => {
    while (startingIndex < array.length - 1) {
        requestAnimationFrame(runLoop);
        let timeTilRender= (timeStamp - lastRender) / 1000;
        if (timeTilRender < 1 / SPEED) return;
        lastRender= timeStamp;
        console.log('rendering!');
        smallest= null;
        indexOfSmallest= null;
    
        update();
    }
}

function update() {
    for (let i = startingIndex; i < array.length; i++) {
        if (smallest== null || array[i] < smallest) {
            smallest= array[i];
            indexOfSmallest= i;
        }
    }

    let temp = array[startingIndex];
    array[startingIndex] = array[indexOfSmallest];
    array[indexOfSmallest] = temp;
    startingIndex++;
    console.log(array);
}