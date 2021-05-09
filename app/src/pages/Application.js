import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/array.css";
import { startBubble } from "../components/bubble";
import { setWidth } from "../utils/width";
import { startSelection } from "../components/selection";
import { getAnimations } from "../components/merge";
import { startAnimation } from "../components/animateMerge";
import Legend from "../components/Legend";

function Application() {

    const [array, setArray] = useState([]);
    const [legend, setLegend]= useState(null);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        generateArr();
    }, []);

    const generateArr= () => {
        let tempArr= [];

        for (let i = 0; i < 50; i++) {
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
        speed= (speed * 3) / 4;
        if (isActive) {
            return;
        } else {
            setActive(true);
        }
        let obj= {
            desc: "Bubble sort swaps an element until it reaches a larger element, and then continues that process for the rest of the iteration. Each iteration will result in the largest number reaching its correct position.",
            bestcase: "O(n)",
            worstcase: "O(n^2)",
            color: (
                <>
                <h5 style={{color: "darkviolet"}}>Purple: <span>Means algorithm is currently viewing element(s)</span></h5>
                <h5 style={{color: "red"}}>Red: <span>Means algorithm is swapping element(s)</span></h5>
                </>
            )
        }
        setLegend(obj);

        startBubble(array, speed, () => {
            setActive(false);
        });
    }

    const selectionSort= (speed) => {
        if (isActive) {
            return;
        } else {
            setActive(true);
        }

        let obj= {
            desc: "Selection sort keeps track of the smallest element on every iteration, and swaps that element into its position. Each iteration will result in the smallest number reaching its correct position.",
            bestcase: "O(n^2)",
            worstcase: "O(n^2)",
            color: (
                <>
                <h5 style={{color: "limegreen"}}>Green: <span>Shows the current smallest element of iteration</span></h5>
                <h5 style={{color: "darkviolet"}}>Purple: <span>Means algorithm is currently viewing element(s)</span></h5>
                <h5 style={{color: "red"}}>Red: <span>Means algorithm is swapping element(s)</span></h5>
                </>
            )
        }
        setLegend(obj);
        startSelection(array, speed, () => {
            setActive(false);
        });
    }

    const mergeSort= async (speed) => {
        if (isActive) {
            return;
        } else {
            setActive(true);
        }
        console.log(legend);
        if (speed < 15 ) speed = 15;
        if (speed > 49) speed = 60;
        let obj= {
            desc: "Merge sort divides the array into halves until it reaches one, then it sorts the pieces, and combines the array back together",
            bestcase: "O(nLogn)",
            worstcase: "O(nLogn)",
            color: (
                <>
                <h5 style={{color: "darkviolet"}}>Purple: <span>Means algorithm is currently viewing element(s)</span></h5>
                <h5 style={{color: "red"}}>Red: <span>Means algorithm is swapping element(s)</span></h5>
                </>
            )
        }
        setLegend(obj);

        let res= getAnimations(array);
        startAnimation(res[0], res[1], speed, () => {
            setActive(false);
        });  
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
        active= {isActive}
        />
    <div id="grid">
        <div id="container" style={{width: "50%"}}>
            {unsorted}
        </div>
        <div id="legendbox">
            <div id="legend">
                <Legend 
                desc={(legend !== null ? legend.desc : null)}
                bestCase={(legend !== null ? legend.bestcase : null)}
                worstCase={(legend !== null ? legend.worstcase : null)}
                colors={(legend !== null ? legend.color : null)}
                />
            </div>
        </div>
    </div>
        </>
    )
}

export default Application;