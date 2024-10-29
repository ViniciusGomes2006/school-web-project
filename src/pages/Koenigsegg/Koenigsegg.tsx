import { Footer } from "../../content/Footer/Footer";
import { Header } from "../../content/Header/Header";
import { Container, Content, ContentInfo} from "../Home/Home.styles";

import img from './Koenigsegg.jpg'

export function Koenigsegg() {
  return(
    <Container>
      <Header/>
      <Content>
        <ContentInfo>
          <h1>História da koenigsegg</h1>
          <p>A Koenigsegg é uma fabricante sueca de carros esportivos de alto desempenho fundada em 1994 por Christian von Koenigsegg. A empresa ganhou destaque por seus modelos exclusivos e supercarros de alta potência, combinando design inovador, tecnologia avançada e desempenho excepcional.</p>
          <p>O primeiro modelo produzido pela Koenigsegg foi o CC8S, apresentado em 2002. Desde então, a empresa lançou uma série de modelos icônicos, como o Agera, o Regera e o Jesko, que alcançaram altas velocidades e se destacaram em termos de engenharia automotiva.</p>
          <p>A Koenigsegg também é conhecida por suas inovações tecnológicas, como o sistema de pulseira de diamantes 'Key', que substitui a chave tradicional do carro, e o motor Freevalve, que elimina a necessidade de um conjunto de válvulas convencionais.</p>
          <p>A marca Koenigsegg tornou-se sinônimo de exclusividade, luxo e performance no mundo dos supercarros, conquistando fãs e colecionadores em todo o mundo.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Sobre o criador da koenigsegg</h1>
          <p>O fundador da empresa Koenigsegg Automotive AB é Christian von Koenigsegg. Ele é um empreendedor sueco apaixonado por carros e tecnologia desde jovem. Christian fundou a Koenigsegg em 1994, com o objetivo de criar carros esportivos de alto desempenho que desafiam	as convenções da indústria automotiva.</p>
          <p>Christian von Koenigsegg é conhecido por sua visão inovadora e paixão pela engenharia automotiva. Ele liderou a empresa no desenvolvimento de tecnologias revolucionárias, como motores híbridos de alto desempenho e materiais leves avançados, colocando a Koenigsegg no mapa como uma das fabricantes de carros mais exclusivas e tecnicamente avançadas do mundo.</p>
          <p>Ao longo dos anos, Christian von Koenigsegg continuou a impulsionar os limites da tecnologia automotiva, mantendo a excelência e o prestígio da marca Koenigsegg. Sua dedicação à inovação e ao design excepcional ajudaram a consolidar a reputação da empresa como uma das líderes mundiais no mercado de carros esportivos de luxo e alta performance.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Sobre o carro mais famoso da marca</h1>
          <p>O carro de luxo mais conhecido da Koenigsegg é o modelo Koenigsegg Regera. O Regera é um hipercarro híbrido plug-in de alto desempenho que combina potência impressionante com tecnologia inovadora. Com sua produção limitada e preço excepcionalmente alto, o Koenigsegg Regera se destaca como um dos modelos mais exclusivos e cobiçados da marca sueca. Seu design aerodinâmico, motor V8 biturbo de 5.0 litros e três motores elétricos resultam em um desempenho incrível e uma experiência de condução incomparável.</p>
        </ContentInfo>
        <ContentInfo>
          <img src={img} />
        </ContentInfo>
      </Content>
      <Footer/>
    </Container>
  )
}