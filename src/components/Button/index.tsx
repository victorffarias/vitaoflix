import React from 'react';
import { ButtonLink } from './style';
import { Link } from 'react-router-dom';

interface Props {
    className ?: string;
    to : string;
};


const Button: React.FC<Props> = ({className, to, children}) => {
    return (
        <ButtonLink as={Link} className={className} to={to}>
            {children}
        </ButtonLink>
    );
}

export default Button;