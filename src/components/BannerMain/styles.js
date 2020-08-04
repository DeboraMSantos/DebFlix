import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 100px;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 150px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  align-items: center;
  border-radius: 4px;
  display: flex;
  display: inline-block; 
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  line-height: 70px;
  padding: 25px;
  text-align: center;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 32px;
  margin-top: 0;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-position: center;
  background-size: cover;
  color: #fff;
  height: 80vh;
  position: relative;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    height: 20%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  background: var(--white);
  border-color: var(--black);
  border-radius: 5px;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: var(--black);
  cursor: pointer;
  display: inline-block;
  display: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  margin: 0 auto;
  outline: none;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;
  @media (max-width: 800px) {
    display: block;
  }
`;
