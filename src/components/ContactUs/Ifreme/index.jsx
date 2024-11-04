import { Container, Content, ContainerText, DivInformation, DivForm, TitleTexte, Description, P, DivContact, SocialMidia, Form, Textarea, Button } from "./styles";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMiniMapPin } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'

export function Ifreme() {
    // Função para enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que o formulário recarregue a página
        
        emailjs.sendForm('service_v0ofvkt', 'template_tjp91s7', e.target, 'mZibv7Y7DloyMTY-a')
            .then((result) => {
                toast.success('Email enviado com sucesso!');
                setTimeout(() => {
                    window.location.reload();
                },2000)
            }, (error) => {
                toast.error('Erro ao enviar o email!');
            });
    };

    return (
        <Container>
            <Content>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.115500604655!2d-46.737013823789084!3d-23.528347860381828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8b922ee4721%3A0x223daa2ce302f0!2sAv.%20Imperatriz%20Leopoldina%2C%20550%20-%20Vila%20Leopoldina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005305-000!5e0!3m2!1spt-BR!2sbr!4v1730741834162!5m2!1spt-BR!2sbr"
                        width="1200"
                        height="500"
                        style={{ border: 0 }} // Corrigido: agora está como um objeto
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização no Mapa"
                    ></iframe>
                </div>

                <ContainerText>
                    <DivInformation>
                        <TitleTexte>...OU CONTATE-NOS DIRETAMENTE</TitleTexte>

                        <Description>Entre em contato conosco para esclarecer dúvidas, fazer sugestões ou saber mais sobre nossos serviços. <br />
                            Estamos prontos para atender você e ajudar com o que precisar.
                        </Description>

                        <DivContact>
                            <P><BsTelephoneFill color="#EBB576" size={13} /> (11) 96528-1895</P>
                            <P> <HiMiniMapPin color="#EBB576" size={15} /> Av. Imperatriz Leopoldina, 550 - Vila Leopoldina</P>
                            <P> <MdEmail color="#EBB576" size={15} /> info@seudominio.com</P>
                        </DivContact>

                        <p>SIGA-NOS</p>

                        <SocialMidia>
                            <div><FaFacebookF color="white" size={14} /></div>
                            <div><FaXTwitter color="white" size={14} /></div>
                            <div><TfiYoutube color="white" size={14} /></div>
                            <div><BsInstagram color="white" size={14} /></div>
                        </SocialMidia>
                    </DivInformation>

                    <DivForm>
                        <TitleTexte>DEIXE-NOS UMA MENSAGEM</TitleTexte>
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name="first_name" placeholder="Primeiro Nome" required />
                                <input type="text" name="last_name" placeholder="Sobrenome" required />
                            </div>

                            <div>
                                <input type="tel" name="phone" placeholder="Telefone" required inputMode="numeric" />
                                <input type="email" name="email" placeholder="E-mail" required />
                            </div>

                            <Textarea name="message" placeholder="Mensagem" required />
                            <Button type="submit">ENVIAR MENSAGEM</Button>
                        </Form>

                    </DivForm>
                </ContainerText>
            </Content>
        </Container>
    );
}
