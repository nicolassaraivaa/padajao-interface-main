import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    gap: 40px;
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
`

export const ContentServices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;

    .divservices{
        background-color: #F7F7F7;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 25px;
        width: 18%;

        img{
            width: 200px;
            border-radius: 100px;
        }
        
    }

    .ptitle{
        font-size: 16px;
        font-weight: bold;
        color:#555555 ;
    }
    
    p{
        font-size: 14px;
        color:#888888;
    }
`

