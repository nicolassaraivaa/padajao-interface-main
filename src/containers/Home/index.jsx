import { OffersCarousel, CategoriesCarousel, AnimatedText, MainServices } from '../../components'
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

                    <CategoriesCarousel />
                </div>
            </Container>
        </main>
    )
}