import { changeColor, changeWidth, delay } from "../utils/functions";

let arrayBars;
let valuesToSort; // this array contains the values in the order merge sort sorts them. Outer array = step #, inner array = values
let idxToSort; //this array contains the indices the merge sort changes in order. Outer array = step #, inner array = index
//these two arrays order along with inner arrays correlate, the first value in valuesToSort is at the first index of idxToSort

let SPEED;

const runAnimation= async() => {

    for (let i = 0; i < valuesToSort.length; i++) {
            
        for (let j = 0; j < valuesToSort[i].length; j++) {
            let index= idxToSort[i][j];
            changeColor(arrayBars, index, "darkviolet");
        }
        await delay(SPEED);
        for (let j = 0; j < valuesToSort[i].length; j++) {
            let index= idxToSort[i][j];
            changeColor(arrayBars, index, "red");
        }
        await delay(SPEED);
        for (let j = 0; j < valuesToSort[i].length; j++) {
            let index= idxToSort[i][j];
            let val= valuesToSort[i][j];
            changeWidth(arrayBars, index, val);
            await delay(SPEED);
        }
        for (let j = 0; j < valuesToSort[i].length; j++) {
            let index= idxToSort[i][j];
            changeColor(arrayBars, index, "rgb(247, 144, 161)");
        }
        await delay(SPEED);
    }
}

export const startAnimation= async (values, indices, speed, cb) => {
arrayBars= document.getElementsByClassName('array');
valuesToSort= values;
idxToSort= indices;
SPEED= speed;
console.log(SPEED);

await runAnimation();
cb()
}