import React from 'react';
import { FooterContainer, FooterText } from '../styles/footerStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </FooterText>
      <FooterText>
        Feito com ❤️ por{' '}
        <a href="https://seu-site.com" target="_blank" rel="noopener noreferrer">
          Amanda Gomes Rebolsas
        </a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
