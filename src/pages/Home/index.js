import React from 'react';
import styled from 'styled-components'
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const HomeWrapper = styled.div`
background: var(--grayDark); 
`;
function Home() {
  return (
    <HomeWrapper>
      <Menu />

      <BannerMain
        url={dadosIniciais.categorias[0].videos[0].url}
      />

      {dadosIniciais.categorias.map((cat) =>
        cat.titulo === "Front End" ? <Carousel ignoreFirstVideo category={cat} /> : <Carousel category={cat} />
      )}

      <Footer />
    </HomeWrapper>
  );
}

export default Home;
