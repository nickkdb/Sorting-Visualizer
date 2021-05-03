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
    requestAnimationFrame(runLoop);
    let timeTilRender= (timeStamp - lastRender) / 1000;
    if (timeTilRender < 1 / SPEED) return;
    lastRender= timeStamp;
    console.log('rendering!');
}