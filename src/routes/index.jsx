import { createBrowserRouter } from "react-router-dom";

import { Header } from "../components/Header/inde";
import {Footer} from "../components/Footer/index"
import { Cart, Login, Home, Menu, Register, CompletePayment, Checkout, AboutUs, Contato } from "../containers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header/>
                <Home />
                <Footer/>
            </>
        )
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header/>
                <Menu />
            </>
        )
    },
    {
        path: '/carrinho',
        element: <Cart/>
    },
    {
        path: '/checkout',
        element: <Checkout/>
    },
    {
        path: '/complete',
        element: <CompletePayment/>
    },
    {
        path: '/sobre-nos',
        element: (
            <>
                <Header/>
                <AboutUs />
            </>
        )
    },
    {
        path: '/contato',
        element: (
            <>
                <Header/>
                <Contato />
            </>
        )
    }
])