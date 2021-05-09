import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/array.css";
import { startBubble } from "../components/bubble";
import { setWidth } from "../utils/width";
import { startSelection } from "../components/selection";
import { getAnimations } from "../components/merge";
import { startAnimation } from "../components/animateMerge";

function Application() {

    const [array, setArray] = useState([]);
    // const [arraySize, setSize] = useState(25);

    useEffect(() => {
        generateArr();
    }, []);

    const generateArr= () => {
        let tempArr= [];

        for (let i = 0; i < 100; i++) {
            let num;
            do {
                num= randomInt(25, 1000);
            } while (tempArr.includes(num));
            tempArr.push(num);
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
        let adjustedSpeed= (speed * 3) / 4;
        startSelection(array, adjustedSpeed);
    }

    const mergeSort= async (sp) => {
        let speed= (sp * 3) / 4;

        let res= getAnimations(array);
        startAnimation(res[0], res[1], speed); 
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