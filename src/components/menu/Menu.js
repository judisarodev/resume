import React from "react";
import me from '../../images/me.png';
import { FaGithub } from "react-icons/fa";
import './menu.css';

const Menu = () => {

    const menuOptions = [
        { name: 'INCIO', active: true },
        { name: 'PROYECTOS', active: false },
        { name: 'INFOS', active: false },
        { name: 'CONTACTOS', active: false }
    ];

    return(
        <div className="container">
        <div className="row d-flex menu align-items-center">
            {/* Name and picture */}
            <MenuSection>
                <img src={me} alt='Foto' height={50} width={50}/>
                <p className="m-0 menu__title"><span>J</span>uan <span>D</span>iego <span>S</span>anchez</p>
            </MenuSection>
            {/* Menu options */}
            <MenuSection>
                <MenuOption name={menuOptions[0].name} active={menuOptions[0].active}/>
                <MenuOption name={menuOptions[1].name} active={menuOptions[1].active}/>
                <MenuOption name={menuOptions[2].name} active={menuOptions[2].active}/>
                <MenuOption name={menuOptions[3].name} active={menuOptions[3].active}/>
            </MenuSection>
            {/* Githum icon */}
            <MenuSection >
                <FaGithub size={50}/>
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

const MenuOption = ({ name, active }) => {
    
    const underlineStyle = {
        'height': active ? '2px' : '0px',
        'background-color': 'white'
    };

    const textSytle = {
        'font-size': '12px'
    };

    return(
        <div className="flex m-3">
            <p className="m-0" style={textSytle}>{name}</p>
            <div style={underlineStyle}></div>
        </div>
    );
}

export { Menu };