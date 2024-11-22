import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #004e98;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005f99;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f4f8;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const ContainerDescription = styled.div`
  h1,
  h5 {
    margin: 10px 0;
  }
`;

export const Description = styled.div`
  h1,
  h5 {
    margin: 10px 0;
  }
  margin-bottom: 20%;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  h1 {
    font-size: 1.8rem;
    color: #004e98;
  }

  h5 {
    font-size: 0.8rem;
    color: #555;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 10px 0;
  }

  code {
    background-color: #eaeaea;
    padding: 5px 10px;
    border-radius: 5px;
    font-family: monospace;
    color: #007acc;
  }
`;
