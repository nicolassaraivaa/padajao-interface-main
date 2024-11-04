import { Container, Content, ContentText, ContentServices } from './styles'
import Caua from '../../../assets/OurChefs/caua.jpg'
import Kaique from '../../../assets/OurChefs/kaique.jpg'
import Joana from '../../../assets/OurChefs/joana.jpg'
import Guilherme from '../../../assets/OurChefs/guilherme.jpg'

export function OurChefAbout() {
    return (
        <Container>
            <Content>

                <ContentText>
                    <h3>CONHEÇA NOSSOS CHEFES</h3>
                    <p>O núcleo principal da nossa empresa é a nossa equipe</p>
                </ContentText>

                <ContentServices>
                    <div className='divservices'>
                        <div className='divImg'> <img src={Caua}/> </div>
                        <p className='ptitle'>CAUÃ JACQUEN </p>
                        <p>Especialista em panificação artesanal, Cauã traz o melhor dos pães caseiros e autênticos para nossa padaria. Com técnica apurada e paixão pela culinária.</p>

                    </div>

                    <div className='divservices'>
                        <div className='divImg'> <img src={Joana}/> </div>
                        <p className='ptitle'>JOANA SANTOS</p>
                        <p>Mestre na confeitaria, Joana é responsável pelas criações doces que encantam nossos clientes. Sua dedicação em criar doces refinados e repletos de sabor faz dela uma verdadeira artista na cozinha.</p>

                    </div>

                    <div className='divservices'>
                    <   div className='divImg'> <img src={Kaique}/> </div>
                        <p className='ptitle'>KINHO PHILIPS</p>
                        <p>Com uma paixão por ingredientes frescos e sabores intensos, Kinho traz uma abordagem moderna aos clássicos da panificação. Sua habilidade em harmonizar sabores torna cada criação única.</p>

                    </div>

                    <div className='divservices'>
                        <div className='divImg'> <img src={Guilherme}/> </div>
                        <p className='ptitle'>GUILHERME RALF</p>
                        <p>Focado na qualidade e precisão, Guilherme garante que cada produto saia da nossa padaria com o máximo de sabor e frescor. Sua expertise é fundamental para o sucesso das nossas receitas diárias.</p>
                    </div>
                </ContentServices>

            </Content>

        </Container>
    )
}