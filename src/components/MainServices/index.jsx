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
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='divservices'>
                        <div className='divicon'><GiSlicedBread size={70} color="#ffff" /></div>
                        <p className='ptitle'>INGREDIENTES FRESCOS</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='divservices'>
                        <div className='divicon'><Coffee size={65} color="#ffff" /></div>
                        <p className='ptitle'>SABORES ATRAENTES</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='divservices'>
                        <div className='divicon'><ForkKnife size={65} color="#ffff" /></div>
                        <p className='ptitle'>PROFISSIONAIS</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </ContentServices>

            </Content>

            <ContentAbout>
                <DivImage/>

                <DivText>
                    <div>
                        <h4 className='Title'>NOSSA PADARIA</h4>

                        <p className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arquiteto beatae vitae dicta sunt explicabo.</p>

                        <p className='text'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt., neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>

                        <p className='text'>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                        <Button>LER MAIS</Button>
                    </div>
                </DivText>
            </ContentAbout>
        </Container>
    )
}