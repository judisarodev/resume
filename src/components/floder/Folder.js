import React from "react";
import './folder.css';

const Folder = ({ name, light, children, id , description}) => {

    const mainColor = {
        'background-color': light ? '#2E3038' : '#1F2027'
    }

    const outsideColor = {
        'background-color': !light ? '#2E3038' : '#1F2027'
    }

    return(
        <div className="container-fluid folder" id={ id }>
            <div className="row">
                <div className="col-2" style={mainColor}>
                    <p className="folder__title text-center m-0 d-flex justify-content-center align-items-center">{ name }</p>
                </div>
                <div className="col-10" style={outsideColor}></div>
            </div>  
            <div className="row folder__content" style={mainColor}>
                <h6 className="folder__description text-center"> { description } </h6>
                <div className="folder__divider">
                    <div></div>
                </div>
                { children }
            </div>
        </div>
    );
}

export { Folder };