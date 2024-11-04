import styled from "styled-components";

export const Container = styled.div`
    background-color: #F7F7F7;
    padding: 60px 0;
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0;

    .react-multi-carousel-dot button {
        border: solid 2px #757575;
        background: transparent;
        padding: 6px;
        position: relative;
        bottom: 0px;
        left: 3px;
    }

    .react-multi-carousel-dot--active button { 
        background: #EBB576; 
    }

`;

export const Content = styled.div`
    width: 70%;
`;

export const ContentText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    gap: 40px;

    h3 {
        font-size: 18px;
        font-weight: bold;
        color: #555555;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: 150px;
            height: 2px;
            background-color: #EBB576;
            bottom: -15px;
            left: calc(50% - 75px);
        }
    }

    p{
        font-size: 15px;
        color:#888888;
    }

`;

export const ContentServices = styled.div`
    background-color: #ffff;
    margin-top: 40px;
    max-width: 400px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
    gap: 20px;
    cursor: grab;
`;


export const City = styled.p`
    font-size: 16px;
    font-weight: bold;
    color:#555555 ;
`;


export const Description = styled.p`
    font-size: 13px;
    color: #888888;
`;



