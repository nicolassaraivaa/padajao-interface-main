import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 100px 0;
    .carousel-item{
        padding-right: 40px;
        padding-left: 30px
    }

    .react-multiple-carousel__arrow--left {
    left: 35px;
    top: 70px;
    }

    .react-multiple-carousel__arrow--right {
    right: 50px;
    top: 70px;
    }
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color:#555555;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;

    &::after{
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        background-color: #EBB576;
        bottom: 0;
        left: calc(50% - 28px);
    }
`

export const ContainerItems = styled.div`
    background: url('${(props) => props.$imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
`

export const CategoryButton = styled(Link)`
    color: white;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    margin-top: 120px;
    font-weight: 500;
    text-decoration: none;

    &:hover{
        background-color: #EBB576;
    }

`