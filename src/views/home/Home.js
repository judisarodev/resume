import React from "react";
import springLogo from '../../images/spring_logo.png';
import javaLogo from '../../images/java_logo.png';
import javascriptLogo from '../../images/javascript_logo.png';
import reactLogo from '../../images/react_logo.png';
import './home.css';
import { Folder } from "../../components/floder/Folder";

const skills = [
    'Java SE', 'POO', 'Spirng Boot', 'Spring JPA', 'Spring Security', 'REST','Inyección de dependencias', 'Inversión de control',
    'Javascript', 'ESC6', 'Design', 'SQL',
    'React JS', 'Hooks', 'React Context', 'React Router', 'Github'
];

const Home = () => {
   return (
    <Folder id={'home'}>
        <div className="container home">
        <div className="row">
            <div className="col-md-3">
                <div className="row">
                    <LanguageLogo logo={springLogo}/>
                    <LanguageLogo logo={javaLogo}/>
                    <LanguageLogo logo={reactLogo}/>
                    <LanguageLogo logo={javascriptLogo}/>
                </div>
            </div>
            <div className="col-md-9 welcome sm-text-center">
                <h1 className="welcome__title">Hola,</h1>
                <h3 className="welcome__subtitle">Soy Juan Diego Sánchez</h3>
                <p className="welcome_text">Soy desarrollador web junior enfocado en React JS y Java Spring Boot. He construido proyectos personales para perfeccionar mis habilidades. Especializado en crear interfaces dinámicas con React y desarrollar servicios web con Java Spring Boot.</p>
                <div className="d-block-flex">
                    {skills.map(skill => <Skill name={skill}/>)}
                </div>
            </div>
        </div>
    </div>
    </Folder>
    
   ); 
}

const LanguageLogo = ({ logo }) => {
   return(
    <div className="d-none d-lg-block col-lg-12 p-3 text-center"><img className="logo" src={logo} alt="Spring Boot" height={100} width={100}/> </div>
   ); 
}

const Skill = ({ name }) => {
    return(
        <div className="d-inline-flex skill"><p className="m-0">{ name }</p></div>
    );
}

export { Home }; 