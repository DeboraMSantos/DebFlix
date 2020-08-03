import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: var(--primary);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    /* transition: opacity .3s;  
    &:hover,
    &:focus {
        background: #7F1C64;
        opacity: .5;
    } */
`;

export default Button;
