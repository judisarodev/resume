import React from "react";
import './project.css';

const Project = ({ name, image, description, url }) => {
   return(
    <>
        <div className="container-fluid project" onClick={() => window.open(url)}>
            <div className="row project__name text-center">
                <p className="m-0">{ name }</p>
            </div>
            <div className="row project__image">
                <img src={ image } alt="Imagen de proyecto"/>
            </div>
            <div className="row project__description">
                <p className="text-center">{ description }</p>
            </div>
        </div>
    </>
   ); 
}

export { Project }; 