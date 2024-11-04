import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 70px 0;
    gap: 100px;
`
export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    background-color: palegoldenrod;
    
    img{
        width: 360px;
    }
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    gap:  27px;
    width: 37%;
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    opacity: 0.6;
`
export const P = styled.p`
    font-size: 14px;
    color:#888888;
`