import { ChefHat, Coffee, ForkKnife } from '@phosphor-icons/react'
import { Container, Content, ContentText, ContentServices, ContentAbout, DivImage, DivText, Button } from './styles'
import { GiSlicedBread } from "react-icons/gi";

export function MainServices() {
    return (
        <Container>
            <Content>

                <ContentText>
                    <h3>PRINCIPAIS SERVIÇOS QUE PRESTAMOS</h3>
                    <p>Nossos serviços são os melhores da cidade, oferecemos produtos ​​de ótima qualidade!</p>
                </ContentText>

                <ContentServices>
                    <div className='divservices'>
                        <div className='divicon'><ChefHat size={65} color="#ffff" /></div>
                        <p className='ptitle'>MELHORES CHEFS</p>
                        <p>Nossa equipe é composta pelos chefs mais talentosos e apaixonados da cidade.</p>

                    </div>

                    <div className='divservices'>
                        <div className='divicon'><GiSlicedBread size={70} color="#ffff" /></div>
                        <p className='ptitle'>INGREDIENTES FRESCOS</p>
                        <p>Garantimos a qualidade e o frescor dos nossos produtos, utilizando apenas ingredientes selecionados.</p>
                    </div>

                    <div className='divservices'>
                        <div className='divicon'><Coffee size={65} color="#ffff" /></div>
                        <p className='ptitle'>SABORES ATRAENTES</p>
                        <p>Oferecemos uma diversidade de sabores que encantam o paladar, com receitas cuidadosamente desenvolvidas.</p>
                    </div>

                    <div className='divservices'>
                        <div className='divicon'><ForkKnife size={65} color="#ffff" /></div>
                        <p className='ptitle'>PROFISSIONAIS</p>
                        <p>Nossa equipe de profissionais é qualificada e dedicada a oferecer o melhor atendimento, proporcionando uma experiência única.</p>
                    </div>
                </ContentServices>

            </Content>

            <ContentAbout>
                <DivImage/>

                <DivText>
                    <div>
                        <h4 className='Title'>NOSSA PADARIA</h4>

                        <p className='text'>Nossa padaria nasceu do desejo de trazer sabores autênticos e caseiros para o dia a dia de nossos clientes. Cada receita é preparada com cuidado e dedicação, usando os melhores ingredientes para garantir qualidade e frescor.</p>

                        <p className='text'>Aqui, o aroma de pães e doces fresquinhos invade o ambiente, criando uma atmosfera acolhedora e convidativa. Nos orgulhamos em proporcionar uma experiência única, onde cada detalhe é pensado para oferecer o melhor.</p>

                        <p className='text'>Venha nos visitar e descubra o verdadeiro sabor de produtos feitos com amor e tradição. Estamos prontos para receber você e compartilhar nossa paixão pela boa padaria.</p>

                        <Button>LER MAIS</Button>
                    </div>
                </DivText>
            </ContentAbout>
        </Container>
    )
}