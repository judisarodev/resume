import React from "react";
import './folder.css';

const Folder = ({ name, light, children }) => {

    const mainColor = {
        'background-color': light ? '#2E3038' : '#1F2027'
    }

    const outsideColor = {
        'background-color': !light ? '#2E3038' : '#1F2027'
    }

    return(
        <div className="container-fluid folder">
            <div className="row">
                <div className="col-2" style={mainColor}>
                    <p className="folder__title text-center m-0 d-flex justify-content-center align-items-center">{ name }</p>
                </div>
                <div className="col-10" style={outsideColor}></div>
            </div>  
            <div className="row" style={mainColor}>
               { children }
            </div>
        </div>
    );
}

export { Folder };