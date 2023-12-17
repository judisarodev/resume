import React from "react";
import { Folder } from "../../components/floder/Folder";
import './work.css';
import { Project } from "../../components/project/Porject";
import imageCalculator from '../../images/calculator_project.png';
import imageBlog from '../../images/blog_project.png'

const Work = () => {

    const projects = [
        { 
            name: 'Blog personal', 
            image: imageBlog, 
            description: 'En mis tiempos libres escribo. Te invito a visitar mi blog personal. Es un projecto que implementa spring boot. ', 
            url: 'https://github.com/judisarodev/sofologos/' 
        },
        {
            name: 'Calculadora Básica', 
            image: imageCalculator, 
            description: 'Visita mi clon de la calculadora de Windows 11. El proyecto se ejecutó usando react js.', 
            url: 'https://judisarodev.github.io/basic-calculator/' 
        }
    ];

    return(
        <Folder name={'Poryectos'} light={true} id={'work'} description={'Quiero compartirte mi trabajo'}>
            <div className="work">
                { projects.map(project => <Project name={project.name} description={project.description} image={project.image} url={project.url}/>) }
            </div>
        </Folder>
    );
}

export { Work };