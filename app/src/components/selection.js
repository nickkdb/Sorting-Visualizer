let SPEED;
let divs;
let array;

const delay= ms => new Promise(res => setTimeout(res, ms));

const changeColor= (idx, color) => {
    divs[idx].style.backgroundColor= color;
}

const setWidth= (idx, width) => {
    let num= ((Math.floor(width / 15)) + 20);
    divs[idx].style.width= `${num}vmin`;
}

const runSelection= async () => {

    for (let i = 0; i < array.length - 1; i++) {
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

        if (smallestIdx !== i) {
            changeColor(smallestIdx, "red");
            changeColor(i, "red");
            await delay(SPEED);
    
            array[smallestIdx]= array[i];
            setWidth(smallestIdx, array[i]);
    
    
            array[i] = smallest;
            setWidth(i, smallest);
    
            await delay(SPEED);

        }


        changeColor(smallestIdx, "rgb(247, 144, 161)");
        changeColor(i, "rgb(247, 144, 161)");

        await delay(SPEED);
    }
}


export const startSelection= (inputArray, speed) => {
    array= inputArray;
    SPEED= speed;
    divs= document.getElementsByClassName('array');
    runSelection();
}



