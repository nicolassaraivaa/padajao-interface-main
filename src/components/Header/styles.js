import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 120px;
    padding: 0 56px;
    
    img{
        width: 100px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;


`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    hr{
        height: 24px;
        border: 1px solid #625e5e;
    }
`

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? '#EBB576' : '#555555' };
    border-bottom: ${props => props.$isActive ?'1px solid #EBB576' : 'none'};
    padding-bottom:5px;
    text-decoration: none;
    font-size: 16px;
    transition: color 200ms;
    font-weight: bold;

    &:hover{
       color: #EBB576;
    }
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;

    p{
        color: black;
        line-height: 90%;
        font-weight: 400;
    }

    span{
        font-weight: 700;
        color: #EBB576;

    }
`

export const Logout = styled.button`
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;

`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

