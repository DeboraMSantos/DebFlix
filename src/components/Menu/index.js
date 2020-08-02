import React from 'react';
import Logo from '../../assets/img/logo.png'
import {LogoImage, MenuWrapper, ButtonLink} from './style.js'
import { Link } from 'react-router-dom';


function Menu() {
    return (
    <MenuWrapper className="Menu">
        <Link to="/">
            <LogoImage src={Logo} alt="Debflix Logo" />
        </Link>
        <ButtonLink as={Link} to="/cadastro/video">
            Novo Vídeo
        </ButtonLink>
    </MenuWrapper>);
}

export default Menu;