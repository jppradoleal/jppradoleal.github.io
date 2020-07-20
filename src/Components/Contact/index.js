import React from 'react';
import StyledContact from './styled';
import {useWindowSize} from '@react-hook/window-size';
import {FaGithub, FaLinkedin, FaCoffee} from 'react-icons/fa'
const Contact = () => {
    const [width] = useWindowSize();
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = e.target.getElementsByTagName("textarea")[0].value; 
        window.open(`mailto:joaopedropradoleal@outlook.com?subject=${encodeURIComponent("I want to hire you - From your website")}&body=${encodeURIComponent(subject)}
        `);
    }
    return (
        <StyledContact id="Contact" width={width}>
            <div id="first">
                <h3>joaopedropradoleal@outlook.com</h3>
                <div className="icon-group">
                    <a href="https://ko-fi.com/X8X21XX1E" className="icons"><FaCoffee size="48" color="white"></FaCoffee></a>
                    <a href="https://github.com/ImMurderer" className="icons"><FaGithub size="48"  color="white"></FaGithub></a>
                    <a href="https://www.linkedin.com/in/joao-pedro-prado-36532494/" className="icons"><FaLinkedin size="48"  color="white"></FaLinkedin></a>
                </div>
            </div>
            <div id="second">
                <form onSubmit={handleSubmit}>
                    <textarea name="subject" placeholder="Send me an email">

                    </textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </StyledContact>
    );
}

export default Contact;