import { changeColor, changeWidth, delay } from "../utils/functions";

let SPEED;
let arrayBars;
let array;
const pink= "rgb(247, 144, 161)";

const runSelection= async () => {

    for (let currentIdx = 0; currentIdx < array.length - 1; currentIdx++) {
        let smallest= null;
        let smallestIdx= null;

        for (let idx = currentIdx; idx < array.length; idx++) {
            changeColor(arrayBars, idx, "darkviolet");
            await delay(SPEED);

            if (smallest == null || smallest > array[idx]) {

                if (smallest !== null) changeColor(arrayBars, smallestIdx, pink);
                changeColor(arrayBars, idx, "limegreen");
                await delay(SPEED);

                smallest= array[idx];
                smallestIdx= idx;
            } else {
                changeColor(arrayBars, idx, pink);
            }
        }

        if (smallestIdx !== currentIdx) {
            changeColor(arrayBars, smallestIdx, "red");
            changeColor(arrayBars, currentIdx, "red");
            await delay(SPEED);
    
            array[smallestIdx]= array[currentIdx];
            changeWidth(arrayBars, smallestIdx, array[currentIdx]);
    
    
            array[currentIdx] = smallest;
            changeWidth(arrayBars, currentIdx, smallest);
    
            await delay(SPEED);

        }


        changeColor(arrayBars, smallestIdx, pink);
        changeColor(arrayBars, currentIdx, pink);

        await delay(SPEED);
    }
}

export const startSelection= async(inputArray, speed, cb) => {
    array= inputArray;
    SPEED= speed;
    arrayBars= document.getElementsByClassName('array');
    await runSelection();
    cb();
}



