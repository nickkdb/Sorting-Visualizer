import { changeColor, changeWidth, delay } from "../utils/functions";

let SPEED;
let array;
let divs;

const runBubble= async () => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            
            changeColor(divs, j, "darkviolet");
            changeColor(divs, j+1, "darkviolet");
            await delay(SPEED);

            if (array[j] > array[j+1]) {
                changeColor(divs, j, "red");
                changeColor(divs, j+1, "red");

                await delay(SPEED);

                let temp= array[j];
                array[j]= array[j+1];
                changeWidth(divs, j, array[j+1]);

                array[j+1]= temp;
                changeWidth(divs, j+1, temp);

                await delay(SPEED);             
            }
            changeColor(divs, j, "rgb(247, 144, 161)");
            changeColor(divs, j+1, "rgb(247, 144, 161)");
        }
    }
}

export const startBubble= async(inputArray, speed, cb) => {
   array= inputArray;
   SPEED= speed;
   divs= document.getElementsByClassName("array");

    await runBubble();
    cb();
}

