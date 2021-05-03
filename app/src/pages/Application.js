import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/array.css";
import { getDivs } from "../components/algo";

function Application() {

    const [array, setArray] = useState([]);
    const [iterations, setIterator] = useState(0);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        generateArr();
    }, []);

    const generateArr= () => {
        let tempArr= [];

        for (let i = 0; i < 15; i++) {
            tempArr.push(randomInt(25, 1000));
        }
        setArray(tempArr);
        getDivs();
    }
    const randomInt= (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const setWidth= (num) => {
        return (Math.floor(num / 25)) + 50;
    }

    let unsorted = array.map((element, index) => {
        let num= setWidth(element);
        return (
            <div className="array" key={index} style={{width: `${num}vmin`}}></div>
        )
    })


    return (
        <>
        <Header reset= {generateArr} array={array} />
        <div id="container">
            {unsorted}
        </div>
        </>
    )
}

export default Application;