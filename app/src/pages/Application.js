import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/array.css";
import { startBubble } from "../components/bubble";

function Application() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        generateArr();
    }, []);

    const generateArr= () => {
        let tempArr= [];

        for (let i = 0; i < 15; i++) {
            tempArr.push(randomInt(25, 1000));
        }
        setArray(tempArr);
    }
    const randomInt= (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const setWidth= (num) => {
        return (Math.floor(num / 25)) + 50;
    }

    const bubbleSort= () => {
        startBubble();
    }

    let unsorted = array.map((element, index) => {
        let num= setWidth(element);
        return (
            <div className="array" key={index} style={{width: `${num}vmin`}}></div>
        )
    })


    return (
        <>
        <Header reset= {generateArr} array={array} bubbleSort= {bubbleSort}/>
        <div id="container">
            {unsorted}
        </div>
        </>
    )
}

export default Application;