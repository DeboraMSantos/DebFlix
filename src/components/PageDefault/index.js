import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--grayDark);
  background-image: url('https://giphy.com/gifs/3ohzdJXMNniu9q65JS');
  color: var(--white);
  flex: 1;
  /* padding: 100px 5%; */
  ${({ paddingAll }) => css`
  padding : ${paddingAll};
  `}
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
  ${({ color }) => css`
    color: ${color};
  `}
`;

function PageDefault({
  children, paddingAll, backgroundColor, color,
}) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll} backgroundColor={backgroundColor} color={color}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
