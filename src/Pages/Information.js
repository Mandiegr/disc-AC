import React, { useState } from 'react';
import {
  PageContainer,
  MainContent,
  CardContainer,
  Card,
  CardContent,
  CloseButton,
  Image,
} from '../styles/informationStyles';

export function Information() {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (cardId) => {
    if (openCard === cardId) {
      setOpenCard(null);
    } else {
      setOpenCard(cardId);
    }
  };

  const handleCloseCard = (e) => {
    e.stopPropagation();
    setOpenCard(null);
  };

  return (
    <PageContainer>
      <MainContent>
        <h3>Informações sobre Crimes Ambientais</h3>
        <CardContainer>
          {[
            {
              id: 'crime-ambiental',
              title: 'Crimes Ambientais',
              content:
                '1. Poluição do Solo Descrição: Descarte inadequado de resíduos sólidos (lixo doméstico, hospitalar ou industrial). Contaminação por produtos químicos, pesticidas ou metais pesadosDesmatamento ilegal e uso inadequado do solo. Exemplo: Lixões clandestinos, vazamento de produtos tóxicos no solo.Órgãos a acionar: IBAMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis). SEMAS (Secretaria Estadual de Meio Ambiente e Sustentabilidade). Prefeituras locais (secretarias municipais de meio ambiente).',
              image: '/1.jpg',
            },
            {
              id: 'maus-tratos-animais',
              title: 'Crimes de Maus Tratos a Animais',
              content:
                'Crimes de maus tratos a animais incluem abuso físico, negligência e crueldade contra os animais.',
              image: '/2.jpg',
            },
            {
              id: 'trafico-animais',
              title: 'Tráfico de Animais Silvestres',
              content:
                'O tráfico de animais silvestres é um crime que envolve a captura e venda ilegal de animais selvagens.',
              image: '/3.webp',
            },
          ].map((card) => (
            <div key={card.id}>
              <Card onClick={() => handleCardClick(card.id)} isOpen={openCard === card.id}>
                <h3>
                  {card.title}
                  {openCard === card.id && (
                    <CloseButton onClick={handleCloseCard}>×</CloseButton>
                  )}
                </h3>
                <Image src={card.image} alt={card.title} />
                <CardContent isOpen={openCard === card.id}>
                  <p>{card.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </CardContainer>
      </MainContent>
    </PageContainer>
  );
}
