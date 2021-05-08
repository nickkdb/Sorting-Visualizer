const SPEED= 1200;
let divs;
let array;

const delay= ms => new Promise(res => setTimeout(res, ms));

const changeColor= (idx, color) => {
    divs[idx].style.backgroundColor= color;
}

const setWidth= (idx, width) => {
    let num= ((Math.floor(width / 25)) + 50);
    divs[idx].style.width= `${num}vmin`;
}

const runMerge= (arr) => {

    if (arr.length < 2) return arr;

    let middle= arr.length / 2;
    let left= arr.splice(0, middle);

    return sort(runMerge(left), runMerge(arr));
}

function sort(left, right) {

    let tempArr=[];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            tempArr.push(left.shift());
        } else {
            tempArr.push(right.shift());
        }
    }

    return [...tempArr, ...left, ...right];
} 

export const startMerge= (input) => {
    array= input;
    divs= document.getElementById('container').querySelectorAll('.array');

    console.log(runMerge(array));
}