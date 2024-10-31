import { ChefHat, Coffee, ForkKnife } from '@phosphor-icons/react'
import { Container, Content, ContentText, ContentServices } from './styles'
import { GiSlicedBread } from "react-icons/gi";
import Caua from '../../assets/OurChefs/caua.jpg'
import Kaique from '../../assets/OurChefs/kaique.jpg'
import Joana from '../../assets/OurChefs/joana.jpg'
import Guilherme from '../../assets/OurChefs/guilherme.jpg'

export function OurChef() {
    return (
        <Container>
            <Content>

                <ContentText>
                    <h3>CONHEÇA NOSSOS CHEFES</h3>
                    <p>O núcleo principal da nossa empresa é a nossa equipe</p>
                </ContentText>

                <ContentServices>
                    <div className='divservices'>
                        <div> <img src={Caua}/> </div>
                        <p className='ptitle'>CAUÃ JACQUEN </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='divservices'>
                        <div> <img src={Joana}/> </div>
                        <p className='ptitle'>JOANA SANTOS</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='divservices'>
                    <   div> <img src={Kaique}/> </div>
                        <p className='ptitle'>KINHO PHILIPS</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='divservices'>
                        <div> <img src={Guilherme}/> </div>
                        <p className='ptitle'>GUILHERME RALF</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </ContentServices>

            </Content>

        </Container>
    )
}