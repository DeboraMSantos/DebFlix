import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Jogo from '../../assets/img/jogo.png';
import Nerd from '../../assets/img/nerd.png';
import Animais from '../../assets/img/animal.png';
import Filme from '../../assets/img/filme.png';
import Husky from '../../assets/img/husky.gif';
import { LogoImage, MenuWrapper, ButtonLink } from './style';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Debflix Logo" />
        <LogoImage style={{ height: 70 }} src={Husky} alt="Debflix Logo" />

      </Link>
      <ButtonLink as={Link} to="/cadastro/video">
        Novo Vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
