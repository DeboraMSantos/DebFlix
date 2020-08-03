import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--blackMedium);
  border-top: 2px solid var(--primary);
  padding: 16px 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  } 
`;

export default FooterBase;
