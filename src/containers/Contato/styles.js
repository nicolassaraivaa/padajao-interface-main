import styled from "styled-components";
import BannerImage from '../../assets/aboutus/banner.png'

export const Banner = styled.div`
    background: url(${BannerImage});
    height: 180px;
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;

    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: white;
        font-size: 25px;
        font-weight: 900;
    }
    
`
