import React from 'react';
import "../styles/legend.css";

function Legend(props) {


    return (
        <>
        <h1>Legend</h1>

        <h5 className="text"><strong>Descripton: </strong>{props.desc}</h5>
        <h5 className="text"><strong>Best Case: </strong>{props.bestCase}</h5>
        <h5 className="text"><strong>Worst Case: </strong>{props.worstCase}</h5>
        <h5 className="text"><h3>Colors: </h3>{props.colors}</h5>
        </>
    )
}

export default Legend;