import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  AppContainer,
  Main,
  Description,
  ContainerDescription,
  Container,
  Button,
} from "./appStyles";

function App() {
  return (
    <AppContainer>
      <Header />
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
          <Button>Saiba Mais</Button>
        </Container>
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
