import styled from "styled-components";
import Texture from '../../assets/BackgroundCounter.png'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    width: 100%;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255,255,255, 0.9),
        rgba(255,255,255, 0.9)
    ), 
    url('${Background}');
    min-height: 100vh;
    
`

export const Banner = styled.div`
    background: url('${Texture}');
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;

    img{
        height: 140px;
    }
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #555555;
    text-align: center;
    position: relative;
    margin: 20px 0;

    &::after{
        position: absolute;
        left: calc(50% - 28px);
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: #555555;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
    padding: 40px;
    margin: 0 auto;
`

export const DivBack = styled.div`
    display: flex;
    justify-content: center;

`

export const ButtonBack = styled.button`
    font-size: 27px;
    color: #555555;
    font-weight: 900;
    text-decoration: none;
    background-color: transparent;
    border: none;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
    
`