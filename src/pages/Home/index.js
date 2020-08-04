import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import Loading from '../../assets/img/loading.gif';
import { LogoImage } from '../../components/Menu/style';
import categorias from '../../repositories/categorias';

const HomeWrapper = styled.div`
background: var(--grayDark);
padding-top: 10px;
`;
function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {dadosIniciais.length === 0
        && (
        <>
          <PageDefault paddingAll="100px 5%" backgroundColor="white" color="black">
            <Menu />
            <div>
              <img alt="loading" style={{ alignItems: 'auto', alignSelf: 'auto' }} src={Loading} />
              <h1 style={{ alignItems: 'auto', alignSelf: 'auto' }}>Loading...</h1>
            </div>
          </PageDefault>
        </>
        )}

      {dadosIniciais.length > 0
      && (
      <>
        <HomeWrapper>
          <Menu />
          {dadosIniciais.map((categoria, indice) => {
            if (indice === 0) {
              return (
                <div key={categoria.id}>
                  <BannerMain
                    url={dadosIniciais[0].videos[0].url}
                  />
                  <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais[0]}
                  />
                </div>
              );
            }

            return (
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            );
          })}
          <Footer />
        </HomeWrapper>
      </>
      )}
    </>
  );
}

export default Home;
