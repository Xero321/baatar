import React from 'react';
import style from "./style.css"


const Button = (props) => {
    return (
        <div>
            <button onClick= {props.showModalView}>{props.text}</button>
        </div> 
    );
};

export default Button;