import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-color: #ffff;
    position: relative;
    cursor: grab;

    div{
        width: 100%;
        height: 80px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: space-between;
    }

    p{
        font-size: 18px;
        color: #555555;
        line-height: 20px;
        font-weight: 700;
        margin-top: 40px;
    }

    strong{
        font-size: 22px;
        color: #EBB576;
        font-weight: 800;
        line-height: 20px;
    }
`
export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`
