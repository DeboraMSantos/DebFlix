import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`}; 
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .3;
    width: 400px;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

`;
export const SpanVideoCardContainerText = styled.span`
  border-bottom-right-radius: 0;
  border-radius: 30px 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
  padding: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
  text-transform: uppercase;
  transform: translate(0, -30px);
  transition: all .4s;
  z-index: 3;
  min-height: 70px;
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
