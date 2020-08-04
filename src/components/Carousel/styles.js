import styled from 'styled-components';

export const Title = styled.h3`
  border-radius: 50px 0px 0px 0px;
  display: inline-block;
  font-size: 30px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  margin-bottom: -20px;
  min-width: 100px;
  padding: 20px;


  @media (max-width: 800px) {
    font-size: 18px;
    max-width: 150px;
    padding-bottom: 40px;

  }
`;

export const Imagem = styled.img`
  height: 80px;


  `;

export const ExtraLink = styled.a`

  border-radius: 10px 0px;
  display: inline-block;
  font-size: 40px;
  margin-left: -20px;
  padding: 10px;
  text-align: right;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px){ 
    bottom: 0;  
    font-size: 20px;
    left: 0;
    min-width: 200px;
    padding: 20px; 
    position: relative;  
  }
  @media (max-width: 350px) {
    bottom: 0;  
    font-size: 13px;
    left: 0;
    min-width: 150px;
    padding: 20px; 
    position: relative;  

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
