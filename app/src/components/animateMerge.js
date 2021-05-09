let divs;
let values;
let indices;
let SPEED;

const setWidth= (idx, width) => {
    let num= ((Math.floor(width / 15)) + 20);
    divs[idx].style.width= `${num}vmin`;
}

const changeColor= (idx, color) => {
    divs[idx].style.backgroundColor= color;
}

const delay= ms => new Promise(res => setTimeout(res, ms));

const runAnimation= async() => {

    for (let i = 0; i < values.length; i++) {
            
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            changeColor(index, "darkviolet");
        }
        await delay(SPEED);
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            changeColor(index, "red");
        }
        await delay(SPEED);
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            let val= values[i][j];
            setWidth(index, val);
            await delay(SPEED);
        }
        for (let j = 0; j < values[i].length; j++) {
            let index= indices[i][j];
            changeColor(index, "rgb(247, 144, 161)");
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