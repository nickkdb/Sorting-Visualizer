import {setWidth } from "../utils/width";

const SPEED= 200;
let divs;
let array;

const delay= ms => new Promise(res => setTimeout(res, ms));

const changeColor= (idx, color) => {
    divs[idx].style.backgroundColor= color;
}

const runSelection= async () => {

    for (let i = 0; i < array.length; i++) {
        let smallest= null;
        let smallestIdx= null;

        for (let j = i; j < array.length; j++) {
            changeColor(j, "darkviolet");
            await delay(SPEED);

            if (smallest == null || smallest > array[j]) {

                if (smallest !== null) changeColor(smallestIdx, "rgb(247, 144, 161)");
                changeColor(j, "limegreen");
                await delay(SPEED);

                smallest= array[j];
                smallestIdx= j;
            } else {
                changeColor(j, "rgb(247, 144, 161)");
            }
        }

        changeColor(smallestIdx, "red");
        changeColor(i, "red");
        await delay(SPEED);

        array[smallestIdx]= array[i];

        let width1= setWidth(array[i]);
        divs[smallestIdx].style.width= `${width1}vmin`;

        array[i] = smallest;

        let width2= setWidth(smallest);
        divs[i].style.width= `${width2}vmin`;

        await delay(SPEED);

        changeColor(smallestIdx, "rgb(247, 144, 161)");
        changeColor(i, "rgb(247, 144, 161)");

        await delay(SPEED);
    }
}


export const startSelection= (input) => {
    array= input;
    divs= document.getElementById('container').querySelectorAll('.array');
    runSelection();
}



