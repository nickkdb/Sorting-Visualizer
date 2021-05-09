let animations= [];
let indices= [];
let array
export function getAnimations(arr) {
    animations= [];
    indices=[];
    array = [...arr];
    let sortingCopy= [...arr];
    let indexingCopy= [...arr];
    getIndices(indexingCopy);
    merge(sortingCopy);
    return [animations, indices];
}

const merge= (myArr) => {


if (myArr.length < 2) return myArr;

const middle= Math.floor(myArr.length / 2);
const left= myArr.splice(0, middle);

return sort(merge(left), merge(myArr));
}

const sort= (left, right) => {
let arr= [];

while (left.length && right.length) {
    if (left[0] < right[0]) {
        arr.push(left.shift());
    } else {
        arr.push(right.shift());
    }
}
animations.push([...arr, ...left, ...right]);
return [...arr, ...left, ...right];
}

function getIndices(myArr) {

    if (myArr.length < 2) return myArr;
    
    const middle= Math.floor(myArr.length / 2);
    const left= myArr.splice(0, middle);

    return indexList(getIndices(left), getIndices(myArr));

}

function indexList(left, right) {
    let startIdx= array.indexOf(left[0]);
    let endIdx= array.indexOf(right[right.length - 1]);
    let length= (endIdx - startIdx) + 1;
    let temp = Array.from({length}, (x, i) => i + startIdx);

    indices.push([...temp]);

    return [...left, ...right];
}
