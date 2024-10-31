import { OffersCarousel, CategoriesCarousel, AnimatedText, MainServices, Counter, OurChef } from '../../components'
import {
    Banner,
    Container,

} from './styles'

export function Home() {

    return (
        <main>
            <Banner>
                <AnimatedText />
            </Banner>
            <Container>
                <div>
                    <MainServices />

                    <OffersCarousel />
                    
                    <Counter/>

                    <CategoriesCarousel />

                    <OurChef/>
                </div>
            </Container>
        </main>
    )
}