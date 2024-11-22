import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #004e98;
  color: #fff;
  padding: 25px 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;

  a {
    color: #61dafb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </FooterText>
      <FooterText>
        Feito com ❤️ por <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">Amanda Gomes Rebolsas</a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
