import React from "react";
import { Folder } from "../../components/floder/Folder";
import './work.css';
import { Project } from "../../components/project/Porject";
import imageCalculator from '../../images/calculator_project.png';
import imageBlog from '../../images/blog_project.png';

const Work = () => {

    const projects = [
        { name: 'Calculadora Básica', image: imageCalculator, description: 'Visita esta asombrosa calculadora. Es un clon de la calculadora de Windows 11. Realiza operaciones básicas con presición.', url: 'https://judisarodev.github.io/basic-calculator/' },
        { name: 'Blog de Humanidades', image: imageBlog, description: 'No te pierdas mi blog personal de filosofía, literatura, historia, y más. Soy un apacionado por las humannidades', url: 'https://judisarodev.github.io/basic-calculator/' },
        { name: 'Blog de Humanidades', image: imageBlog, description: 'No te pierdas mi blog personal de filosofía, literatura, historia, y más. Soy un apacionado por las humannidades', url: 'https://judisarodev.github.io/basic-calculator/' },
    ];

    return(
        <Folder name={'Poryectos'} light={true} id={'work'}>
            <div className="work">
                { projects.map(project => <Project name={project.name} description={project.description} image={project.image} url={project.url}/>) }
            </div>
        </Folder>
    );
}

export { Work };