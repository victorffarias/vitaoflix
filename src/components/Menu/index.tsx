import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

const Menu: React.FC = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="VitãoFlix Logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
        
    );
}

export default Menu;