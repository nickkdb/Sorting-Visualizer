let SPEED;
let array;
let divs;
let swaps;
let madeSwaps;

const delay= ms => new Promise(res => setTimeout(res, ms));

const changeColor= (idx, color) => {
    divs[idx].style.backgroundColor= color;
}

const setWidth= (idx, width) => {
    let num= ((Math.floor(width / 15)) + 20);
    divs[idx].style.width= `${num}vmin`;
}

const runBubble= async () => {
    for (let i = 0; i < array.length; i++) {
        if (madeSwaps== false) break;

        for (let j = 0; j < (array.length - i - 1); j++) {

            changeColor(j, "darkviolet");
            changeColor(j+1, "darkviolet");
            await delay(SPEED);

            if (array[j] > array[j+1]) {
                changeColor(j, "red");
                changeColor(j+1, "red");

                await delay(SPEED);

                let temp= array[j];
                array[j]= array[j+1];
                setWidth(j, array[j+1]);

                array[j+1]= temp;
                setWidth(j+1, temp);
                swaps++;

                await delay(SPEED);             
            }
            changeColor(j, "rgb(247, 144, 161)");
            changeColor(j+1, "rgb(247, 144, 161)");
        }
        (swaps > 0 ? swaps= 0 : madeSwaps= false);
    }
}


export const startBubble= (inputArray, speed) => {
   array= inputArray;
   SPEED= speed;
   divs= document.getElementsByClassName("array");
   swaps= 0;
   madeSwaps= true;

    runBubble();
}

