import React from "react";
import me from '../../images/me.png';
import { FaGithub } from "react-icons/fa";
import './menu.css';

const Menu = () => {

    const menuOptions = [
        { name: 'INCIO' },
        { name: 'PROYECTOS' },
        { name: 'INFO' },
        { name: 'CONTACTOS' }
    ];

    const goToGithub = (e) => {
        window.open('https://github.com/judisarodev', '_blank');    
    }

    return(
        <div className="container">
        <div className="row d-flex menu align-items-center">
            {/* Name and picture */}
            <MenuSection>
                <img className="menu_clickable" src={me} alt='Foto' height={50} width={50}/>
                <p className="m-0 menu__title menu_clickable"><span>J</span>uan <span>D</span>iego <span>S</span>anchez</p>
            </MenuSection>
            {/* Menu options */}
            <MenuSection>
                <MenuOption name={menuOptions[0].name} id={'home'}/>
                <MenuOption name={menuOptions[1].name} id={'work'}/>
                <MenuOption name={menuOptions[2].name} id={'about'}/>
                <MenuOption name={menuOptions[3].name} id={'contact'}/>
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