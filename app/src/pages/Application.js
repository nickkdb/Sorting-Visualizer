import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/array.css";
import { startBubble } from "../components/bubble";
import { setWidth } from "../utils/width";
import { startSelection } from "../components/selection";
import { startMerge } from "../components/merge2";

function Application() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        generateArr();
    }, []);

    const generateArr= () => {
        let tempArr= [];

        for (let i = 0; i < 10; i++) {
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

    const mergeSort= () => {
        startMerge(array);
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