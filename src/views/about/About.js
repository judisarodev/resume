import React from "react";
import { Folder } from "../../components/floder/Folder";
import picture from '../../images/programmer.jpg';

const About = () => {

    const aboutData = [
        { title: 'Unviersidad', content:'En la Universidad Libre, estoy cursando la carrera de Ingeniería de Sistemas, una disciplina que me sumerge en el mundo fascinante de la informática. Durante este tiempo, he adquirido conocimientos en el área de la programación de software. ' },
        { title: 'Cursos en linea', content:'Además de mi educación universitaria, estoy complementando activamente mi aprendizaje participando en cursos en línea a través de plataformas reconocidas. Estos cursos abarcan una amplia gama de temas relacionados con la tecnología' },
        { title: 'Idiomas', content:'Hablo español e inglés con un alto nivel de fluidez. Mi competencia en inglés se ha fortalecido a través de una experiencia laboral significativa en atención al cliente para un banco estadounidense, donde he interactuado diariamente con clientes de habla inglesa.' }
    ];

    return(
        <Folder name={'Información'} id={'about'} description={'Unas palabras sobre mi'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        {aboutData.map(item=><AboutItem title={item.title} content={item.content}/>)}
                    </div>
                    <div className="col-lg-6 d-none d-sm-flex justify-content-center align-items-center">
                        <img src={ picture }  alt="picutre" height={230} style={{ borderRadius: '20px' }} />
                    </div>
                </div>
            </div>
            
            
        </Folder>
        
    );
}

const AboutItem = ({ title, content }) => {
    return(
        <div className="d-flex flex-column justify-content-center m-3">
            <h6>{ title }</h6>
            <p>{ content }</p>
        </div>
    );
}

export { About };