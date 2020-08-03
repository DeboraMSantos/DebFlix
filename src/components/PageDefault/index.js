import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--grayDark);
  background-image: url('https://giphy.com/gifs/3ohzdJXMNniu9q65JS');
  color: var(--white);
  flex: 1;
  padding: 100px 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
