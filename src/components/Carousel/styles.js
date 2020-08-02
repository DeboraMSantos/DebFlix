import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 1;
  margin-bottom: -8px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 30px 10px 0px 0px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
    max-width: 150px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 20px;
  font-size: 25px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: inline;
    font-size: 15px;
    margin-left: 20px;
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
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
