import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: blue;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px; 
    width: auto;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: blue;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #004e98;
    margin: 5px 0;
    transition: transform 0.2s;
  }

  &:hover span:nth-child(1) {
    transform: translateX(5px);
  }

  &:hover span:nth-child(2) {
    transform: translateX(-5px);
  }
`;

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
