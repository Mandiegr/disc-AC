import React from 'react';
import { HeaderContainer, Logo, MenuButton } from '../styles/headerStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.png" alt="Logo" />
      </Logo>
      <MenuButton>
        <span></span>
        <span></span>
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;
