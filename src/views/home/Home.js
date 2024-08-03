import React from "react";
import springLogo from '../../images/spring_logo.png';
import javaLogo from '../../images/java_logo.png';
import javascriptLogo from '../../images/javascript_logo.png';
import reactLogo from '../../images/react_logo.png';
import './home.css';
import { Folder } from "../../components/floder/Folder";

const skills = [
    'Node JS', 'Express', 'Sequelize', 
    'React JS', 'React Router', 'Rect Native',  'Responsive Design', 'Figma', 'Wordpress', 
    'Java SE', 'POO', 'Spring Boot', 'Spring JPA', 'Spring Security', 'REST',
    'AWS EC2', 'AWS RDS', 'Linux', 'Apache', 'MySQL', 'MariaDB', 'PostgresSQL', 
    
];

const Home = () => {
   return (
    <Folder id={'home'}>
        <div className="container home">
        <div className="row">
            <div className="col-lg-3 col-md-12 d-flex flex-column">
                
                    <LanguageLogo logo={javascriptLogo}/>
                    <LanguageLogo logo={reactLogo}/>
                    <LanguageLogo logo={springLogo}/>
                    <LanguageLogo logo={javaLogo}/>
                
            </div>
            <div className="col-sm-12 col-lg-9 welcome sm-text-center">
                <h1 className="welcome__title">Hola,</h1>
                <h3 className="welcome__subtitle">Soy Juan Diego Sánchez</h3>
                <p className="welcome_text">Desarrollador junior full stack. Más de 6 meses de experiencia laboral formal. Más de dos años desarrollando software. </p>
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
    <div className="d-none d-lg-block col-lg-12 p-2 text-center m-auto"><img className="logo" src={logo} alt="Spring Boot" height={80} width={80}/> </div>
   ); 
}

const Skill = ({ name }) => {
    return(
        <div className="d-inline-flex skill"><p className="m-0">{ name }</p></div>
    );
}

export { Home }; 