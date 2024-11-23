import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #004e98;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const FooterText = styled.p`
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
