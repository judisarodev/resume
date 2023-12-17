import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <div className="d-flex justify-content-around p-5">
            <div>
                <p className="footer__item">Teléfono</p>
                <p>+57 316 489 1109</p>
            </div>
            <div>
                <p className="footer__item">Email</p>
                <p className="m-0">judisarodev@gmail.com</p>
            </div>
        </div>
    );
}

export { Footer }; 