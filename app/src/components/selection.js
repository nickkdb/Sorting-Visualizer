import { changeColor, changeWidth, delay } from "../utils/functions";

let SPEED;
let divs;
let array;

const runSelection= async () => {

    for (let i = 0; i < array.length - 1; i++) {
        let smallest= null;
        let smallestIdx= null;

        for (let j = i; j < array.length; j++) {
            changeColor(divs, j, "darkviolet");
            await delay(SPEED);

            if (smallest == null || smallest > array[j]) {

                if (smallest !== null) changeColor(divs, smallestIdx, "rgb(247, 144, 161)");
                changeColor(divs, j, "limegreen");
                await delay(SPEED);

                smallest= array[j];
                smallestIdx= j;
            } else {
                changeColor(divs, j, "rgb(247, 144, 161)");
            }
        }

        if (smallestIdx !== i) {
            changeColor(divs, smallestIdx, "red");
            changeColor(divs, i, "red");
            await delay(SPEED);
    
            array[smallestIdx]= array[i];
            changeWidth(divs, smallestIdx, array[i]);
    
    
            array[i] = smallest;
            changeWidth(divs, i, smallest);
    
            await delay(SPEED);

        }


        changeColor(divs, smallestIdx, "rgb(247, 144, 161)");
        changeColor(divs, i, "rgb(247, 144, 161)");

        await delay(SPEED);
    }
}

export const startSelection= async(inputArray, speed, cb) => {
    array= inputArray;
    SPEED= speed;
    divs= document.getElementsByClassName('array');
    await runSelection();
    cb();
}



