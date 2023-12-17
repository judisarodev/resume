import React from "react";
import me from '../../images/me.png';
import { FaGithub } from "react-icons/fa";
import './menu.css';

const Menu = () => {

    const goToGithub = (e) => {
        window.open('https://github.com/judisarodev', '_blank');    
    }

    return(
        <div className="container" id="menu">
        <div className="row d-flex menu align-items-center">
            {/* Name and picture */}
            <MenuSection>
                <div className="row">
                    <div className="col-md-12 col-lg-4 p-0">
                        <img className="menu_clickable" src={me} alt='Foto' height={50} width={50}/>
                    </div>
                    <div className="col-md-12 col-lg-8 p-0">
                        <p className="m-0 menu__title menu_clickable"><span>J</span>uan <span>D</span>iego <span>S</span>anchez</p>
                    </div>
                    
                </div>
            </MenuSection>
            {/* Menu options */}
            <MenuSection>
                <MenuOption name={'INCIO'} id={'home'}/>
                <MenuOption name={'PROYECTOS'} id={'work'}/>
                <MenuOption name={'INFO'} id={'about'}/>
                <MenuOption name={'CONTACTOS'} id={'contact'}/>
            </MenuSection>
            {/* Githum icon */}
            <MenuSection >
                <FaGithub size={50} className="menu_clickable" onClick={goToGithub}/>
            </MenuSection>
        </div>
        </div>
    );
}

const MenuSection = ({ children }) => {
    return(
        <div className="col-lg-4 d-flex flex-row align-items-center gap-3 justify-content-center">
            { children }
        </div>
    );
}

const MenuOption = ({ name, id }) => {
    const textSytle = {
        'font-size': '12px'
    };

    const scrollToView = (id) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return(
        <div className="flex m-3">
            <p className="menu__option m-0 menu_clickable" style={textSytle} onClick={() => scrollToView(id)}>{name}</p>
        </div>
    );
}

export { Menu };