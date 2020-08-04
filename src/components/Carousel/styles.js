import styled from 'styled-components';

export const Title = styled.h3`
  
  background: red;
  /* border-radius: 30px 10px 0px 0px; */
  border-radius: 50px 0px 0px 0px;
  display: inline-block;
  font-size: 30px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  line-height: 1;
  margin-bottom: -20px;
  min-width: 130px;
  padding: 20px;


  @media (max-width: 800px) {
    font-size: 18px;
    max-width: 150px;
    padding: 10px;
  }
`;

export const Imagem = styled.img`
  height: 80px;
  
`;

export const ExtraLink = styled.a`
  font-size: 40px;
  margin-left: -20px;
  display: inline-block;
  border-radius: 10px 0px;
  background: black;
  padding: 10px;
  text-decoration: none;
 
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: inline;
    font-size: 30px;
    margin-left: -20px;
    padding: 20;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }

/* &::-webkit-scrollbar {width: 3px; height: 3px;  background:#141414; } 
&::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
&::-webkit-scrollbar-thumb { border-radius:10px; background:var(--blackLighter);  } */

`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
