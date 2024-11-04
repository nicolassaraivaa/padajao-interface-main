import { Container, DivImg, DivText, P, Title } from "./styles";
import AboutImage from '../../../assets/aboutus/about-image.jpg'


export function TextAbout (){
    return(
        <Container>
            <DivImg><img src={AboutImage} /></DivImg>

            <DivText>
                <Title>NOSSO NEGÓCIO</Title>
                <P>Desde 1965, nossa padaria se dedica a oferecer o sabor autêntico e a qualidade que só o tempo e a tradição podem proporcionar. Nosso compromisso com a excelência se reflete em cada produto, trazendo o gostinho de uma história que se perpetua a cada receita.</P>
                
                <Title>QUEM SOMOS</Title>
                <P>Somos uma padaria familiar que valoriza o cuidado artesanal e o respeito ás receitas que passaram de geração em geração. Nossa equipe trabalha com paixão para criar momentos especiais para nossos clientes, mantendo viva a essência de uma verdadeira padaria tradicional.</P>

                <Title>O QUE OFERECEMOS</Title>
                <P>Oferecemos uma variedade de pães fresquinhos, doces, salgados e quitutes preparados com ingredientes selecionados. Seja para o café da manhã ou para um lanche especial, temos sempre algo saboroso esperando por você, com o mesmo carinho de quando começamos, em 1965.</P>
            </DivText>
        </Container>
    )
}