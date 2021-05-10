import { changeColor, changeWidth, delay } from "../utils/functions";

let divs;
let values;
let indices;
let SPEED;

const runAnimation= async() => {

    for (let i = 0; i < values.length; i++) {
            
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            changeColor(divs, index, "darkviolet");
        }
        await delay(SPEED);
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            changeColor(divs, index, "red");
        }
        await delay(SPEED);
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            let val= values[i][j];
            changeWidth(divs, index, val);
            await delay(SPEED);
        }
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            changeColor(divs, index, "rgb(247, 144, 161)");
        }
        await delay(SPEED);
    }
}

export const startAnimation= async (val, index, speed, cb) => {
divs= document.getElementsByClassName('array');
values= val;
indices= index;
SPEED= speed;
console.log(SPEED);

await runAnimation();
cb()
}