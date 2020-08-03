import React from 'react';
import FooterBase, { LogoImage } from './styles';
import Husky2 from '../../assets/img/husky2.gif';

function Footer() {
  return (
    <FooterBase>
    <LogoImage style={{height:80}} src={Husky2} alt="Debflix Logo" />
      <p>
        Criado por
        <strong> Débora Moura dos Santos </strong>
        durante a
        <br />
        {' '}
        <strong> Imersão React da Alura </strong>
        <br />
        <br />
        <a target="LinkedinDebora" href="https://www.linkedin.com/in/d%C3%A9bora-moura-dos-santos-57813335/">Conheça o meu Linkedin</a>
      </p>



    </FooterBase>
  );
}

export default Footer;
