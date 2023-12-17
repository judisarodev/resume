import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import './goUpButton.css';

const GoUpButton = () => {

    return(
        <button className="goup__button" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
            <FaRegArrowAltCircleUp size={35}/>
        </button>
    );
}

export { GoUpButton }