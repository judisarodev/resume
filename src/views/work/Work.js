import React from "react";
import { Folder } from "../../components/floder/Folder";
import './work.css';
import { Project } from "../../components/project/Porject";
import imageCalculator from '../../images/calculator_project.png';
import imageMoka from '../../images/moka.png';
import imageUmonei from '../../images/umonei.png';
import imageOthers from '../../images/blog_project.png';

const Work = () => {

    const projects = [
        { 
            name: 'Umonei', 
            image: imageUmonei, 
            description: 'Más de 6 meses de experiencia como desarrollador full stak en Umonei (febrero 2024 - actualidad), una solución financiera para contratistas colombianos. Desarrollo frontend con Angular JS. Contrucción de servicios web con Node JS. Modelamiento y administración de bases de datos MySQL. ', 
            url: 'https://calculadora.umonei.com/login' 
        },{ 
            name: 'Moka tortas', 
            image: imageMoka, 
            description: 'Pagina web desarrollada en React JS para negocio de pasteles y tortas en la ciudad de Bucaramanga. Servicios REST desarrollados en Node JS con express. Base de datos María DB SQL. Servidor VPS administardo con Almalinux. Arquitectura cliente servidor.', 
            url: 'https://mokatortas.com' 
        },
        {
            name: 'Calculadora Básica', 
            image: imageCalculator, 
            description: 'Clon de la calculadora de windows 11. Proyecto ralizado para reforzar conocimientos en el desarrollo web y frontend. Uso de una arquitectura orientada a los componentes y la modularización web. ', 
            url: 'https://judisarodev.github.io/basic-calculator/' 
        },
        {
            name: 'Otros proyectos', 
            image: imageOthers, 
            description: 'Visita todos mis proyectos en Github: Blog de historia y filosofía, convertidor de imágenes a PDF, landing page de Vuetify, calculadora de crédito de consumo, entre otros.', 
            url: 'https://github.com/judisarodev' 
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