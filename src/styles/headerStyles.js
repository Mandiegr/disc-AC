import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: blue;
  background-color: #004e98;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px; 
    width: auto;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: blue;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
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
