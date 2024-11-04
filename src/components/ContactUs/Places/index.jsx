import { Container, Content, ContentText, ContentServices, City, Description } from './styles';

import Carousel from "react-multi-carousel";

export function Places() {

    const places = [
        { city: "São Paulo", address: "Rua das Flores, 123", phone: "(11) 91234-5678" },
        { city: "Rio de Janeiro", address: "Avenida do Mar, 456", phone: "(21) 98765-4321" },
        { city: "Belo Horizonte", address: "Praça da Liberdade, 789", phone: "(31) 99876-5432" },
        { city: "Curitiba", address: "Rua XV de Novembro, 101", phone: "(41) 99988-7766" },
        { city: "Porto Alegre", address: "Av. dos 30, 234", phone: "(51) 96654-3210" },
        { city: "Recife", address: "Rua do Sol, 567", phone: "(81) 95555-4444" }
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
                    <h3>NOSSAS LOCALIZAÇÕES</h3>
                    <p>Como sua padaria de bairro, estamos sempre lá.</p>
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
                    {places.map((place, index) => (
                        <ContentServices key={index}>
                            <City>{place.city}</City>
                            <Description>{`Endereço: ${place.address}`}</Description>
                            <Description>{`Telefone: ${place.phone}`}</Description>
                        </ContentServices>
                    ))}
                </Carousel>
            </Content>
        </Container>
    );

}
