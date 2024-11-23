import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  width: 300px;
  height: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    `
      width: 92%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      background-color: white;
    `}

  h3 {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #004e98;
  }
`;

export const CardContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 30px;
  color: black;
  overflow-y: auto;
  height: 100vh;
`;

export const CloseButton = styled.button`
  background-color: #004e98;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1001;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    font-size: 25px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;
