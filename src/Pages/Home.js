import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AppContainer,
  Main,
  Description,
  ContainerDescription,
  Container,
  Button,
} from "../appStyles";

export function Home() {
  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    navigate("/information");
  };

  return (
    <AppContainer>
      <Main>
        <Description>
          <h1>Augusto Corrêa - PA</h1>
          <h5>
            Acreditamos numa sociedade transparente. Estamos sempre em busca de
            novos recursos para atender a sociedade Urumajoense.
          </h5>
        </Description>
        <ContainerDescription>
          <h1>Denuncie!</h1>
          <h1>Escolha o Orgão!!</h1>
          <h5>
            É fácil fazer uma denúncia! Clique em "Mais Informações" para ser
            redirecionado à página de denúncia.
          </h5>
        </ContainerDescription>
        <Container>
          <Button>Denuncie</Button>
          <Button onClick={handleSaibaMaisClick}>Saiba Mais</Button>
        </Container>
      </Main>
    </AppContainer>
  );
}
