import React, { useState } from "react";
import { Folder } from "../../components/floder/Folder";
import './contact.css';
import ReactPlayer from 'react-player'

const Contact = () => {
    /*return(
        <Folder name={'Contacto'} light={true} id={'contact'} description={'Es momento de ponernos de conversar'}>
            <div className="d-flex justify-content-center">
                <ReactPlayer
                    url=''
                    className='react-player'
                    playing
                    width='700px'
                    height='320px'
                    />  
            </div>
        </Folder>
    );*/
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [company, setCompany] = useState('');
    return(
        <Folder name={'Contacto'} light={true} id={'contact'} description={'Es momento de conversar'}>
            <form className="d-flex flex-column gap-2 form--contact">
                <label>Nombre</label>
                <input className="form__input" type="text" value={ name } onChange={(e) => setName(e.target.value)} placeholder="María Rodríguez"/>

                <label>Email</label>
                <input className="form__input" type="email" value={ email } onChange={(e) => setEmail(e.target.value)} placeholder="maria@mail.com"/>

                <label>Compañía</label>
                <input className="form__input" type="company" value={ company } onChange={(e) => setCompany(e.target.value)} placeholder="Compañía de Desarrollo"/>
                
                <label>Mensaje</label>
                <textarea className="form__input form--message" type="text" value={ message } onChange={(e) => setMessage(e.target.value)} placeholder="¡Me ha interesado tu portafolio, quiero que nos pongamos en contacto!"/>

                <button className="btn btn-primary">ENVIAR</button>
            </form>
        </Folder>
    );
    
}

export { Contact };