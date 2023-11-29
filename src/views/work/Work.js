import React from "react";
import { Folder } from "../../components/floder/Folder";
import './work.css';
import { Project } from "../../components/project.js/Porject";
import imageCalculator from '../../images/calculator_project.png';
import imageBlog from '../../images/blog_project.png';

const Work = () => {

    const projects = [
        { name: 'Calculadora Básica', image: imageCalculator, description: 'Visita esta asombrosa calculadora. Es un clon de la calculadora de Windows 11. Realiza operaciones básicas con presición. ' },
        { name: 'Blog de Humanidades', image: imageBlog, description: 'No te pierdas mi blog personal de filosofía, literatura, historia, y más. Soy un apacionado por las humannidades' },
        { name: 'Blog de Humanidades', image: imageBlog, description: 'No te pierdas mi blog personal de filosofía, literatura, historia, y más. Soy un apacionado por las humannidades' },
    ];

    return(
        <Folder name={'Poryectos'}>
            <div className="work">
                { projects.map(project => <Project name={project.name} description={project.description} image={project.image}/>) }
            </div>
        </Folder>
    );
}

export { Work };