import React from "react";
import './about.css';
import { Folder } from "../../components/floder/Folder";

const About = () => {

    const aboutData = [
        { title: 'Unviersidad', content:'En la Universidad Libre, estoy cursando la carrera de Ingeniería de Sistemas, una disciplina que me sumerge en el mundo complejo y fascinante de la informática y la tecnología. Durante mi tiempo en la universidad, he adquirido conocimientos fundamentales en el área de la programación de software. ' },
        { title: 'Cursos en linea', content:'Además de mi educación universitaria, estoy complementando activamente mi aprendizaje participando en cursos en línea a través de plataformas como Platzi, Coursera y Udemy. Estos cursos abarcan una amplia gama de temas relacionados con la tecnología y la ingeniería, desde desarrollos específicos de lenguajes de programación hasta habilidades más especializadas' },
        { title: 'Idiomas', content:'Hablo español e inglés con un alto nivel de fluidez tanto en conversación como en escritura. Mi competencia en inglés se ha fortalecido a través de una experiencia laboral significativa en atención al cliente para un banco estadounidense, donde he interactuado diariamente con clientes de habla inglesa.' }
    ];

    return(
        <Folder name={'Información'} light={true}>
            <div className="container">
                {aboutData.map(item=><AboutItem title={item.title} content={item.content}/>)}
            </div>
        </Folder>
    );
}

const AboutItem = ({ title, content }) => {
    return(
        <div className="row justify-content-center m-5">
            <div className="col-2 "><p>{ title }</p></div>
            <div className="col-6"><p>{ content }</p></div>
        </div>
    );
}

export { About };