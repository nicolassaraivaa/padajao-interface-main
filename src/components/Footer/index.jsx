import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import Logo from '../../assets/logo-footer.png'

import { Container, 
    Product1, 
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
    DivFooter,
    DivImg,
    DivInformation,
    Copyright } 
    from "./styles";


export function Footer() {

    const responsive = {
        superLargeDdesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 6,
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
                    showDots={false}
                    >
                    <Product1 className="product"></Product1>
                    <Product2 className="product"></Product2>
                    <Product3 className="product"></Product3>
                    <Product4 className="product"></Product4>
                    <Product5 className="product"></Product5>
                    <Product6 className="product"></Product6>
                    <Product7 className="product"></Product7>
                    <Product8 className="product"></Product8>
                </Carousel>
                <DivFooter>
                    <DivImg><img src={Logo} /></DivImg>
                    <DivInformation>
                        <p className="informationFooter">Endereço: Av. Imperatriz Leopoldina, 550 - São Paulo</p>
                        <hr/>
                        <p className="informationFooter"> Telefone: (11) 96528-1895</p>
                        <hr/>
                        <p className="informationFooter">Horario:  Seg – Sab: 8:00 – 20:00</p>
                   </DivInformation>
                    <Copyright>
                        <p>Copyright © 2024-2028 Padaria Padajão by Nicolas Saraiva.</p>
                    </Copyright>
                </DivFooter>
        </Container>
    )
}

