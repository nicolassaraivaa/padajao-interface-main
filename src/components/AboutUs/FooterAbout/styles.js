import styled from "styled-components";

import BackgroundFooter from '../../../assets/footer/BackgroundFooter.png'

export const Container = styled.div`
    background-color: #ffff;
`

export const DivFooter = styled.div`
    padding: 40px 0px;
    background: url(${BackgroundFooter});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 70%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    p{
        color: white;
        text-align: center;
    }
`;

export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 180px;
        margin: 30px 0;
    }

    .informationFooter{
        
    }
`;

export const DivInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .informationFooter{
        color: white;
        font-size: 14px;
        opacity: 0.8;
    }

    hr{
        height: 15px;
        border: 1px solid #EBB576
        ;
    }
`;

export const Copyright = styled.div`
    p{
        font-size: 13px;
        font-weight: 400;
        opacity: 0.5;
    }
`