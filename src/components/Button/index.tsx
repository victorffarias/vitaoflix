import React from 'react';
import { ButtonLink } from './style';

interface Props {
    className ?: string;
    href : string;
};


const Button: React.FC<Props> = ({className, href, children}) => {
    return (
        <ButtonLink as="a" className={className} href={href}>
            {children}
        </ButtonLink>
    );
}

export default Button;