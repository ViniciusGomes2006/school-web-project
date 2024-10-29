import { Footer } from "../../content/Footer/Footer";
import { Header } from "../../content/Header/Header";
import { Container, Content, ContentInfo} from "./Home.styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentInfo>
          <h1>Lux & Speed: Explorando o Mundo dos Automóveis de Luxo e Performance</h1>
          <p>Bem-vindo ao Lux & Speed, um site desenvolvido pelo grupo de pesquisa Dolphins para proporcionar uma experiência imersiva no universo de quatro marcas automotivas icônicas: Aston Martin, Rolls-Royce, Koenigsegg e Mercedes-Benz. Este projeto oferece uma jornada por histórias, inovações e curiosidades dessas marcas, conhecidas mundialmente por seu prestígio e excelência.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Nossa Missão</h1>
          <p>Inspirados pelo fascínio do luxo e da velocidade, nosso objetivo é revelar detalhes únicos sobre como cada marca transformou o setor automotivo. Desde a herança de inovação até a busca incansável pela perfeição, exploramos o que faz com que essas fabricantes se destaquem no cenário global.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Explore e Inspire-se</h1>
          <p>Esperamos que este site seja mais que uma fonte de conhecimento – que ele desperte sua paixão pela história automotiva e pelo futuro do setor. Clique nos ícones das marcas para começar sua jornada.</p>
        </ContentInfo>
      </Content>
      <Footer />
    </Container>
  );
}