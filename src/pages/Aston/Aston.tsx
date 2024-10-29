import { Footer } from "../../content/Footer/Footer";
import { Header } from "../../content/Header/Header";
import { Container, Content, ContentInfo} from "../Home/Home.styles";

import aston from "./aston2.jpg";

export function Aston() {
  return(
    <Container>
      <Header/>
      <Content>
        <ContentInfo>
          <h1>Fundadores e Primeiros Anos (1913-1920)</h1>
          <p>A Aston Martin foi fundada em 1913 por Lionel Martin e Robert Bamford. O nome "Aston Martin" surgiu da combinação do nome de Martin com o de Aston Hill, uma subida de montanha em Buckinghamshire, onde Martin competia. A ideia era criar carros esportivos que fossem rápidos, elegantes e capazes de competir em corridas.</p>
          <p>O primeiro carro produzido pela empresa foi em 1915, mas a Primeira Guerra Mundial interrompeu a produção, e ambos os fundadores se alistaram no exército britânico. Após a guerra, a empresa enfrentou dificuldades financeiras, o que levou a mudanças na estrutura da propriedade e direção ao longo dos anos.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Expansão e Crises Financeiras (1920-1947)</h1>
          <p>Durante os anos 1920 e 1930, a Aston Martin produziu carros de corrida bem-sucedidos, mas a empresa continuou a lutar financeiramente. Em 1925, a empresa faliu e foi comprada por um grupo de investidores, incluindo o Conde Louis Zborowski, que injetou capital e permitiu que a Aston Martin continuasse a produzir carros esportivos</p>
          <p>Nos anos seguintes, a empresa continuou a mudar de mãos várias vezes. Apesar dessas dificuldades, a Aston Martin começou a ganhar uma reputação sólida nas corridas, especialmente com o modelo "Ulster", que obteve sucesso em Le Mans.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>A Era David Brown e o Surgimento do DB (1947-1972)</h1>
          <p>Um marco importante na história da Aston Martin foi a aquisição da empresa por David Brown em 1947. Brown era um industrial britânico e trouxe uma nova visão para a marca, introduzindo uma linha de carros que se tornariam lendários: a série "DB" (inicials de David Brown). O primeiro modelo dessa linha foi o DB2, lançado em 1950.</p>
          <p>Os anos 1950 e 1960 foram de ouro para a Aston Martin, especialmente com o lançamento do DB5 em 1963. O DB5 tornou-se um ícone global quando foi usado como o carro de James Bond no filme "007 Contra Goldfinger" (1964), solidificando a reputação da Aston Martin como um símbolo de luxo e desempenho.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Desafios e Mudanças de Propriedade (1972-2000)</h1>
          <p>Após a saída de David Brown em 1972, a Aston Martin enfrentou novos desafios financeiros. A empresa passou por várias mudanças de propriedade, inclusive sendo comprada pela empresa norte-americana Ford em 1987. Durante essa época, a Aston Martin continuou a lançar novos modelos, mas as dificuldades financeiras persistiram</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Renascimento e Sucesso Moderno (2000-Presente)</h1>
          <p>No início dos anos 2000, a Ford vendeu parte da Aston Martin para um consórcio de investidores, e a marca começou a se reerguer. Sob a nova liderança, a Aston Martin lançou uma série de novos modelos, incluindo o DB9 e o V8 Vantage, que foram aclamados tanto por críticos quanto pelo público.</p>
          <p>Em 2018, a Aston Martin tornou-se uma empresa de capital aberto, listando suas ações na Bolsa de Valores de Londres. Recentemente, a empresa voltou a investir em competições de automobilismo, retornando à Fórmula 1 em 2021 como uma equipe de fábrica.</p>
        </ContentInfo>
        <ContentInfo>
          <h1>Legado e Futuro</h1>
          <p>A Aston Martin continua a ser sinônimo de carros esportivos de luxo, combinando tradição com inovações modernas. A marca expandiu seu portfólio com o lançamento de SUVs, como o Aston Martin DBX, e continua a explorar novas tecnologias, incluindo veículos elétricos e híbridos.</p>
          <p>A história da Aston Martin é um testemunho da resiliência, inovação e dedicação à excelência no design automotivo. Ao longo de mais de um século, a marca não apenas sobreviveu a inúmeros desafios, mas também manteve sua posição como uma das fabricantes de carros mais icônicas e respeitadas do mundo.</p>
        </ContentInfo>
        <ContentInfo>
          <img src={aston}/>
        </ContentInfo>
      </Content>
      <Footer/>
    </Container>
  )
}