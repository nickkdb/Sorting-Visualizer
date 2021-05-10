export const changeColor= (tag, idx, color) => {
    tag[idx].style.backgroundColor= color;
}

export const changeWidth= (tag, idx, width) => {
    let num= ((Math.floor(width / 15)) + 20);
    tag[idx].style.width= `${num}vmin`;
}

export const delay= ms => new Promise(res => setTimeout(res, ms));