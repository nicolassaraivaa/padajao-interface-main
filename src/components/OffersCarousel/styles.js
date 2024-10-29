import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    .react-multi-carousel-list{
        overflow: visible;
    }

    overflow-x: hidden;
    padding-left: 30px;
    padding-bottom: 40px;

    .react-multiple-carousel__arrow--left {
    left: 35px;
    top: 10px;
    }

    .react-multiple-carousel__arrow--right {
    right: 70px;
    top: 10px;
    }


`



export const Title = styled.h2`
    font-size: 26px;
    font-weight: 600;
    color:#555555;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0px;

    &::after{
        content: '';
        position: absolute;
        width: 150px;
        height: 3px;
        background-color: #EBB576;
        bottom: 0;
        left: calc(50% - 75px);
    }
`

