import Logo from '../../../assets/logo-footer.png'

import { Container, 
    DivFooter,
    DivImg,
    DivInformation,
    Copyright } 
    from "./styles";


export function FooterAbout() {

    return (
        <Container>
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

