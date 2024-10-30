import { OffersCarousel, CategoriesCarousel, AnimatedText, MainServices, Counter } from '../../components'
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
                </div>
            </Container>
        </main>
    )
}