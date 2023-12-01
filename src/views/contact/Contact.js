import React from "react";
import { Folder } from "../../components/floder/Folder";
import { useState } from "react";
import './contact.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return(
        <Folder name={'Contacto'} light={true} id={'contact'} description={'Es momento de ponernos de conversar'}>
            <form className="d-flex flex-column gap-2 form--contact">
                <label>Nombre</label>
                <input className="form__input" type="text" value={ name } onChange={(e) => setName(e.target.value)}/>

                <label>Email</label>
                <input className="form__input" type="email" value={ email } onChange={(e) => setEmail(e.target.value)}/>
                
                <label>Message</label>
                <textarea className="form__input form--message" type="text" value={ message } onChange={(e) => setMessage(e.target.value)}/>

                <button className="btn btn-primary">ENVIAR</button>
            </form>
        </Folder>
    );
}

export { Contact };