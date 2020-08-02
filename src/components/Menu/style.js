import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 270px;
    @media(max-width: 800px){
        max-width: 210px; 
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

    @media(max-width: 800px){
        height: 70px;
        justify-content: center;
    }

`;

export const ButtonLink = styled(Button)`
border: 1px solid var(--white);
border-radius: 4px;
color: var(--white);
font-size: 16px;
font-weight: bold;
padding: 16px 24px;
text-decoration: none;
transition: opacity .3s;
&:hover,
&:focus
{
    opacity: .5;
}

 @media(max-width: 800px){

    position: fixed;
    left: 0;
    right: 0;
    border: 0;
    bottom: 0;
    background-color: var(--primary);
    color: var(--white);
    font-size: 15px;
    /* padding: 10px 18px; */

} 
/*@media(max-width: 380px){
    font-size: 12px;
    padding: 8px 14px;
    }  */
`;