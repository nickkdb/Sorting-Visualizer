const mergeSort= () => {
    console.log(array);
    const animations= getAnimations(array);
    console.log(animations);
    for (let i = 0; i < 12; i++) {
        const arrayBars= document.getElementsByClassName('array');
        const isColorChange= i % 3 !== 2;
        console.log(i % 6);
        console.log(animations[i]);
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            // console.log(barOneIdx, barTwoIdx);
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? lookingColor : swappingColor;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor= color;
            }, i * SPEED);
        } else {
            setTimeout(() => {
                const [barOneIdx, newWidth] = animations[i];
                // console.log(barOneIdx, newWidth);
                const barOneStyle= arrayBars[barOneIdx].style;
                let width= setWidth(newWidth);
                barOneStyle.width= `${width}vmin`;
            }, i * SPEED);
        }
    }
    // console.log(SPEED);
}

let arr= [10, 11];
let otherArr= [];
let left= 0;

console.log(arr[left + 1]);
console.log(left);