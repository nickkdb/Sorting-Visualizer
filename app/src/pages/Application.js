import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/array.css";
import { startBubble } from "../components/bubble";
import { setWidth } from "../utils/width";
import { startSelection } from "../components/selection";
import { getAnimations } from "../components/merge";

function Application() {

    const [array, setArray] = useState([]);

    const swappingColor= "red";
    const lookingColor= "darkviolet";
    const SPEED= 1000;

    useEffect(() => {
        generateArr();
    }, []);

    const generateArr= () => {
        let tempArr= [];


        for (let i = 0; i < 25; i++) {
            tempArr.push(randomInt(25, 1000));
        }
        setArray(tempArr);
    }
    const randomInt= (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const bubbleSort= (speed) => {
        startBubble(array, speed);
    }

    const selectionSort= (speed) => {
        startSelection(array, speed);
    }

    const mergeSort= async(sp) => {
        // console.log(array);
        const animations= getAnimations(array);
        console.log(animations);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars= document.getElementsByClassName('array');
            const colorChange= i % 4;
            
            if (colorChange < 2) {
                const [barOneIdx, barTwoIdx] = animations[i];
                // console.log(barOneIdx, barTwoIdx);
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = colorChange === 0 ? lookingColor : swappingColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor= color;
                }, i * (SPEED || sp));
            } else if (colorChange === 2) {
                setTimeout(() => {
                    const [barOneIdx, newWidth] = animations[i];
                    // console.log(barOneIdx, newWidth);
                    const barOneStyle= arrayBars[barOneIdx].style;
                    let width= setWidth(newWidth);
                    barOneStyle.width= `${width}vmin`;
                }, i * (SPEED || sp));
            } else {
                let pos1= animations[i][0];
                if (animations[i].length > 1) {
                    setTimeout(() => {
                        let pos2= animations[i][1];
                        arrayBars[pos1].style.backgroundColor= "rgb(247, 144, 161)";
                        arrayBars[pos2].style.backgroundColor= "rgb(247, 144, 161)";
                    }, i * SPEED);
                } else {
                    setTimeout(() => {
                        arrayBars[pos1].style.backgroundColor= "rgb(247, 144, 161)";
                    }, i * SPEED);
                }
            }
            
        }
        // console.log(SPEED);
    }

    let unsorted = array.map((element, index) => {
        let num= setWidth(element);
        return (
            <div className="array" key={index} style={{width: `${num}vmin`}}></div>
        )
    })


    return (
        <>
        <Header 
        reset= {generateArr} 
        array={array} 
        bubbleSort= {bubbleSort}
        selectionSort= {selectionSort}
        mergeSort= {mergeSort}
        />

        <div id="container">
            {unsorted}
        </div>
        </>
    )
}

export default Application;