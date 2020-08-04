import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`}; 
  background-position: center;
  background-size: cover;
  border-radius: 5px 10px;
  border: 4px solid;
  color: white;
  cursor: pointer;
  display: flex;
  flex: 0 0 298px;
  height: 197px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-decoration: none;
  transition: opacity .3s;
  width: 298px;
  &:hover,
  &:focus {
    opacity: .3;
    width: 400px;
    border-radius: 40px;   
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

`;
export const SpanVideoCardContainerText = styled.span`
  border-bottom-right-radius: 0;
  border-radius: 40px 0px;
  bottom: 0;
  left: 0;
  min-height: 70px;
  opacity: 0;
  padding: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
  text-transform: uppercase;
  transform: translate(0, -30px);
  transition: all .4s;
  z-index: 3;
`;

export const DivLegenda = styled.div`
  position: relative;
  transition: opacity .4s;
 
  &:hover a,
  &:focus a {
    opacity: .6;
  }
  &:hover span {
    opacity: 1;
    transform: translate(0, 0px);
  }
`;
