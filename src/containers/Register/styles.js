import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom"; 

import BackgroundLogin from '../../assets/background-login.png'
import Background from '../../assets/background.svg'


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`
export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position:center;

    height: 100%;
    width: 100%;
    max-width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 70%;
    }
`
export const RightContainer = styled.div`
    background: url('${Background}');
    background-color: #1E1E1E;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 60%;

    p{
        color: #ffff;
        font-size: 18px;
        font-weight: 800;
        a{
            color: #ffff;
            text-decoration: underline;
        }
    }
`
export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    color: #EBB576;
    font-size: 40px;
    font-weight: 400;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label{
        color: white;
        font-size: 18px;
        font-weight: 600;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`
export const Link = styled(ReactLink)`
    text-decoration: none;
    color: white;
`