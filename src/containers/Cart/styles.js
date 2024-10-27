import styled from "styled-components";
import Texture from '../../assets/texture.svg'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    width: 100%;
    background-color: #f0f0f0;
    background: linear-gradient(
        rgba(255,255,255, 0.4),
        rgba(255,255,255, 0.4)
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
    color: #61a120;
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        left: calc(50% - 28px);
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: #61a120;
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
    font-size: 20px;
    color: #5C2669;
    font-weight: 600;
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