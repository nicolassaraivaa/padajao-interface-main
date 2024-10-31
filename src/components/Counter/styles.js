import styled from "styled-components";
import Background from '../../assets/BackgroundCounter.png'

export const Container = styled.div`
    background: url(${Background});
    width: 100%;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 70px 0;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 200px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ffff;
        font-size: 30px;
        font-weight: 600;
        gap: 20px;


        h4{
            display: flex;
            direction: row;
            position: relative;

            &::after{
                content: '';
                position: absolute;
                width: 40px;
                height: 2px;
                background-color: #ffff;
                bottom: 0;
                left: calc(50% - 20px);
            }

            span{
                position: relative;
                top: 17px;
                left: 5px;
            }
        }

        P{
            position: relative;
            font-size: 16px;
            font-weight: 500;
        }

    }
`