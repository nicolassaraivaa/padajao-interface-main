import Comment1 from '../../assets/comments/comment1.jpg';
import Comment2 from '../../assets/comments/comment2.jpg';
import Comment3 from '../../assets/comments/comment3.jpg';
import { Container, Name, ProfileImg, Quote, CommentCard } from './styles';
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'


export function CommentClient() {
    const comments = [
        {
            image: Comment1,
            quote: "OS PÃES DA PADAJÃO SÃO SIMPLESMENTE MARAVILHOSOS! A QUALIDADE É IMPRESSIONANTE, SEMPRE FRESQUINHOS E COM AQUELE SABOR CASEIRO QUE SÓ ENCONTRAMOS EM PADARIAS DE VERDADE. DÁ VONTADE DE LEVAR UM DE CADA!",
            name: "DIEGO STONE",
        },
        {
            image: Comment2,
            quote: "CADA VISITA Á PADAJÃO É UMA EXPERIÊNCIA INCRÍVEL! A VARIEDADE DE DOCES E SALGADOS É DE ENCHER OS OLHOS E O PALADAR, SEM FALAR NO ATENDIMENTO QUE FAZ A GENTE SE SENTIR EM CASA. OS SABORES SÃO SEMPRE SURPREENDENTES E O CARINHO NO PREPARO FAZ TODA A DIFERENÇA!",
            name: "PAULO UCHIHA",
        },
        {
            image: Comment3,
            quote: "A PADAJÃO É AQUELE LUGAR QUE A GENTE NÃO CANSA DE VISITAR. O AMBIENTE É ACOLHEDOR, PERFEITO PARA RELAXAR E APRECIAR OS MELHORES CROISSANTS DA CIDADE! A QUALIDADE DOS PRODUTOS É IMPECÁVEL, E O AROMA DE CAFÉ RECÉM-PASSADO CRIA UM CLIMA IRRESISTÍVEL!",
            name: "JAMIL UZUMAKI",
        },
    ];

    const responsive = {
        superLargeDdesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1280, min: 690 },
          items: 1,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 1,
        }
      };

    return (
        <Container>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    partialVisbile={false}
                    itemClass="carousel-item"
                    arrows={false}
                    showDots={true}
                    >
                    {comments.map((testimonial, index) => (
                        <CommentCard key={index}>
                            <ProfileImg src={testimonial.image} alt={testimonial.name} />
                            <Quote>"{testimonial.quote}"</Quote>
                            <Name>{testimonial.name}</Name>
                        </CommentCard>
                    ))}
                </Carousel>
        </Container>
    )
}