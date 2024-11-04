import { Banner } from "./styles";
import {TextAbout, OurChefAbout} from '../../components'

export function AboutUs() {

    return (
        <main>
            <Banner>
                <p>SOBRE NÓS</p>
            </Banner>
            <TextAbout/>
            <OurChefAbout/>
        </main>
    )
}