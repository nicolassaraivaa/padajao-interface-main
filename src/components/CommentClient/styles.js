import styled from "styled-components";
import Background from '../../assets/background-fixed.png';

export const Container = styled.div`
    background: url(${Background});
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment:fixed;
    background-position: center;
    height: 460px;

    .react-multi-carousel-dot button {
        border: solid 1px #ffff;
        background: transparent;
        padding: 6px;
        position: relative;
        bottom: 28px;
        left: 10px;
    }

    .react-multi-carousel-dot--active button { 
        background: #ffff; 
    }


`

export const CommentCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 30px;
    height: 400px;
    width: 100vw;
    cursor: grab;
`

export const ProfileImg = styled.img`
    width: 100px;
    border-radius: 100px;
    border: solid 4px #F1F1F1;
`;

export const Quote = styled.p`
    font-size: 16px;
    font-weight: 400;
    width: 800px;
    color: #ffff;
    text-indent: 20px;
    text-align: center;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: #F1F1F1;
        top: 90px;
        left: calc(50% - 15px);
    }
`;

export const Name = styled.h4`
    font-size: 14px;
    color: #E7B173;
    font-weight: 900;

`;