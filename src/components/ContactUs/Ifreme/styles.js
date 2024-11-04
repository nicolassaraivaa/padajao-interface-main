import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Content = styled.div`
    width: 63%;
    margin: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 50px;

`

export const DivInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    gap: 20px;
`

export const DivForm = styled.div`
    width: 65%;

`
export const TitleTexte = styled.div`
    color: #555555;
    font-weight: 900;
`

export const DivContact = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

`

export const Description = styled.div`
    color: #555555;
    opacity: 0.8;
    font-size: 14px;

`
export const P = styled.p`
    color: #555555;
    opacity: 0.8;
    font-size: 14px;
    position: relative; 
`

export const SocialMidia = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius:100px;
        background-color: #EBB576;
        cursor: pointer;
        transition: background-color 0.5s ease, transform 0.6s ease;

        &:hover{
            background-color: #555555;
        }
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: 20px 0;

    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;

        input{
            width: 100%;
            padding: 10px;
            border: 1px solid #E1E1E1;

            &::placeholder{
                color: #D6D6D6;
                font-size: 13px;
            }
        }
    }


`
export const Textarea = styled.textarea`
    height: 110px;
    width: 100%;
    padding: 10px;
    border: 1px solid #E1E1E1;

        &::placeholder{
            color: #D6D6D6;
            font-size: 13px;
        }
`

export const Button = styled.button`
    border: none;
    background-color:#EBB576;
    color: #ffff;
    font-weight: bold;
    width: 200px;
    height: 35px;
    border-radius: 3px;
    margin-top: 25px;
    position: relative;
    left: 73%;
    transition: background-color 0.8s ease, transform 0.8s ease;

    &:hover{
        background-color: #F7F7F7;
        color:  #EBB576;
        border: solid 2px #EBB576;
    }
`