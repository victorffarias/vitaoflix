import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png';
import './style.css';
import Button from '../Button';

const Menu: React.FC = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="VitãoFlix Logo"/>
            </Link>

            <Button className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>
        
    );
}

export default Menu;