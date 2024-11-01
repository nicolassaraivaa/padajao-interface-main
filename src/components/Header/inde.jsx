import { UserCircle, ShoppingCart } from '@phosphor-icons/react'
import { useNavigate, useResolvedPath } from 'react-router-dom';
import Logo from '../../assets/logo-login.png'
import {
    Container,
    HeaderLink,
    LinkContainer,
    Navigation,
    Options,
    Profile,
    Logout,
    Content
} from "./styles";
import { useUser } from '../../hooks/UserContext';


export function Header() {
    const navigate = useNavigate()
    const { logout, userInfo } = useUser()

    const { pathname } = useResolvedPath()

    function logoutUser() {
        logout()
        navigate('/login')
    }

    return (
        <Container>

            <Content>
                <div>
                    <img src={Logo} />
                </div>
                <Navigation>
                    <div>
                        <HeaderLink to='/' $isActive={pathname === '/'}>HOME</HeaderLink>
                        <hr/>
                        <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'} >CARDÁPIO</HeaderLink>
                        <hr/>
                        <HeaderLink to='/sobre-nos' $isActive={pathname === '/sobre-nos'} >SOBRE</HeaderLink>
                        <hr/>
                        <HeaderLink to='/' $isActive={pathname === '/cardapio'} >CONTATO</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color="#000" size={30} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCart to='/carrinho' color="#000" size={30} />
                        <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>

            </Content>
        </Container>
    )
}