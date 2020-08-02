import React from 'react';
import Logo from '../../assets/img/logo.png'
import {LogoImage, MenuWrapper, ButtonLink} from './style.js'


function Menu() {
    return (
    <MenuWrapper className="Menu">
        <a href="/">
            <LogoImage src={Logo} alt="Debflix Logo" />
        </a>
        <ButtonLink as="a" href="/">
            Novo Vídeo
        </ButtonLink>
    </MenuWrapper>);
}

export default Menu;