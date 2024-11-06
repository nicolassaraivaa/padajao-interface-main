import { Container, Content, ContentText, ContentServices, DivImg, Ptitle, Description } from './styles';
import Caua from '../../../assets/OurChefs/caua.jpg';
import Kaique from '../../../assets/OurChefs/kaique.jpg';
import Joana from '../../../assets/OurChefs/joana.jpg';
import Guilherme from '../../../assets/OurChefs/guilherme.jpg';
import Robson from '../../../assets/OurChefs/robson.jpg';
import Josefo from '../../../assets/OurChefs/josefo.jpg';

import Carousel from "react-multi-carousel";

export function OurChefAbout() {

    const chefs = [
        { img: Caua, name: "CAUÃ JACQUEN", description: "Especialista em panificação artesanal, Cauã traz o melhor dos pães caseiros e autênticos para nossa padaria. Com técnica apurada e paixão pela culinária." },
        { img: Joana, name: "JOANA SANTOS", description: "Mestre na confeitaria, Joana é responsável pelas criações doces que encantam nossos clientes. Sua dedicação em criar doces refinados e repletos de sabor faz dela uma verdadeira artista na cozinha." },
        { img: Kaique, name: "KINHO PHILIPS", description: "Com uma paixão por ingredientes frescos e sabores intensos, Kinho traz uma abordagem moderna aos clássicos da panificação. Sua habilidade em harmonizar sabores torna cada criação única." },
        { img: Guilherme, name: "GUILHERME RALF", description: "Focado na qualidade e precisão, Guilherme garante que cada produto saia da nossa padaria com o máximo de sabor e frescor. Sua expertise é fundamental para o sucesso das nossas receitas diárias." },
        { img: Robson, name: "ROBSON SARAIVA", description: "Robson é mestre em fermentação natural, trazendo autenticidade a cada pão produzido." },
        { img: Josefo, name: "JURANDIR PORKS", description: "Com experiência em técnicas tradicionais, Josefo combina inovação e sabor em cada criação." }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        }
    };

    return (
        <Container>
            <Content>
                <ContentText>
                    <h3>CONHEÇA NOSSOS CHEFES</h3>
                    <p>O núcleo principal da nossa empresa é a nossa equipe</p>
                </ContentText>

                <Carousel
                    responsive={responsive}
                    infinite={false}
                    partialVisbile={false}
                    itemClass="carousel-item"
                    arrows={false}
                    showDots={true}
                    slidesToSlide={1} 
                >
                    {chefs.map((chef, index) => (
                        <ContentServices key={index}>
                            <DivImg> <img src={chef.img} alt={`Foto de ${chef.name}`} /> </DivImg>
                            <Ptitle>{chef.name}</Ptitle>
                            <Description>{chef.description}</Description>
                        </ContentServices>
                    ))}
                </Carousel>
            </Content>
        </Container>
    );
}
