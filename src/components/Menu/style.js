import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 270px;
    @media(max-width: 800px){
        max-width: 200px; 
    } 
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
  
    background: var(--blackMedium);
    border-bottom: 2px solid var(--primary);

`;

export const ButtonLink = styled(Button)`

`;