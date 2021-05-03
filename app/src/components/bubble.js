

export const startBubble= () => {
    requestAnimationFrame(runLoop);
}

const runLoop= (timeStamp) => {
console.log(timeStamp);
}