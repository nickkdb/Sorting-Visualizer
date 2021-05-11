import { changeColor, changeWidth, delay } from "../utils/functions";

let SPEED;
let array;
let arrayBars;
const pink= "rgb(247, 144, 161)";

const runBubble= async () => {
    for (let iterations = 0; iterations < array.length; iterations++) {
        for (let idx = 0; idx < (array.length - iterations - 1); idx++) {
            
            changeColor(arrayBars, idx, "darkviolet");
            changeColor(arrayBars, idx+1, "darkviolet");
            await delay(SPEED);

            if (array[idx] > array[idx+1]) {
                changeColor(arrayBars, idx, "red");
                changeColor(arrayBars, idx+1, "red");

                await delay(SPEED);

                let temp= array[idx];
                array[idx]= array[idx+1];
                changeWidth(arrayBars, idx, array[idx+1]);

                array[idx+1]= temp;
                changeWidth(arrayBars, idx+1, temp);

                await delay(SPEED);             
            }
            changeColor(arrayBars, idx, pink);
            changeColor(arrayBars, idx+1, pink);
        }
    }
}

export const startBubble= async(inputArray, speed, cb) => {
   array= inputArray;
   SPEED= speed;
   arrayBars= document.getElementsByClassName("array");

    await runBubble();
    cb();
}

