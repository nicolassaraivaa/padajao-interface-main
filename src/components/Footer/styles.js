import styled from "styled-components";
import product1 from '../../assets/footer/img1.jpg'
import product2 from '../../assets/footer/img2.jpg'
import product3 from '../../assets/footer/img3.jpg'
import product4 from '../../assets/footer/img4.jpg'
import product5 from '../../assets/footer/img5.jpg'
import product6 from '../../assets/footer/img6.jpg'
import product7 from '../../assets/footer/img7.jpg'
import product8 from '../../assets/footer/img8.jpg'

import BackgroundFooter from '../../assets/footer/BackgroundFooter.png'

export const Container = styled.div`
    height: 600px;
    background-color: #ffff;

    .product{
        background-size:cover;
        height: 305px;
        cursor: pointer;
        transition: opacity 0.6s ease; 

        &:hover{
            opacity: 0.6;
        }
    }
`

export const Product1 = styled.div`
    background: url(${product1});


`;

export const Product2 = styled.div`
    background: url(${product2});
`;

export const Product3 = styled.div`
    background: url(${product3});
`;

export const Product4 = styled.div`
    background: url(${product4});
`;

export const Product5 = styled.div`
    background: url(${product5});
`;

export const Product6 = styled.div`
    background: url(${product6});
`;

export const Product7 = styled.div`
    background: url(${product7});
`;

export const Product8 = styled.div`
    background: url(${product8});
`;

export const DivFooter = styled.div`
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