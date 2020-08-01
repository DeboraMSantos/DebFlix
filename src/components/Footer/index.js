import React from 'react';
import { FooterBase } from './styles';
import Linkedin from '../../assets/img/linkedin.png'

function Footer() {
  return (
    <FooterBase>

      <p>
        Criado por <strong>Débora Moura dos Santos</strong> durante a<br/>
        {' '}
          Imersão React da Alura
        <br/> <br/>
        <a target="LinkedinDebora" href="https://www.linkedin.com/in/d%C3%A9bora-moura-dos-santos-57813335/">
         Conheça o meu Linkedin
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
