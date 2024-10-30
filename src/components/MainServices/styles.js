import styled from "styled-components";
import PadeiroAbout from '../../assets/padeiro-aboutHome.jpg'

export const Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 70px 0px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    gap: 70px;
`


export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 40px;

    h3{
        font-size: 18px;
        font-weight: bold;
        color:#555555 ;
        position: relative;


        
        &::after{
            content: '';
            position: absolute;
            width: 150px;
            height: 3px;
            background-color: #EBB576;
            bottom: -17px;
            left: calc(50% - 75px);
        }
    }

    p{
        font-size: 15px;
        color:#888888;
    }
`

export const ContentServices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;

    .divservices{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 18%;
        
    }

    .ptitle{
        font-size: 16px;
        font-weight: bold;
        color:#555555 ;
    }

    .divicon{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:#EBB576;
        height: 150px;
        width: 150px;
        border-radius: 300px;
        transition: background-color 0.5s ease, transform 0.3s ease;
        cursor: pointer;

        &:hover{
            background-color:#555555;
        }
    }

    
    p{
        font-size: 14px;
        color:#888888;
    }
`

export const ContentAbout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    height: 450px;

`


export const DivImage = styled.div`
    background: url(${PadeiroAbout});
    background-size: cover;
    background-position: bottom;
    width: 50%; 
`

export const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F7F7F7;
    width: 50%;

        
    div{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 90%;
        padding: 20px;

        .Title{
            font-size: 17px;
            font-weight: bold;
            color:#555555 ;
            position: relative;
            margin-bottom: 15px;

            &::after{
                content: '';
                position: absolute;
                width: 50px;
                height: 2px;
                background-color: #EBB576;
                bottom: -12px;
                left: calc(15% - 120px);
            }
        }

        .text{
            font-size: 14px;
            color:#888888;
        }

    }
`

export const Button = styled.button`
    border: none;
    background-color:#EBB576;
    color: #ffff;
    font-weight: bold;
    width: 110px;
    height: 35px;
    border-radius: 3px;
    margin-top: 25px;

    &:hover{
        background-color: #F7F7F7;
        color:  #EBB576;
        border: solid 2px #EBB576;
    }
`