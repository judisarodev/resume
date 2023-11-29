import React from "react";
import './folder.css';

const Folder = ({ name, children }) => {
    return(
        <div className="container-fluid folder">
            <div className="row">
                <p className="col-2 folder__title text-center m-0 d-flex justify-content-center align-items-center">{ name }</p>
            </div>  
            <div className="row folder__content">
               { children }
            </div>
        </div>
    );
}

export { Folder };