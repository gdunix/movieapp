import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
    padding: 15px;
    background-color: #1d2f4a;
    color: #fff;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Logo = styled.div`
    font-family: 'Lobster Two',cursive;
`;

export const LogoLink = styled.a`
    font-size: 34px;
    font-weight: 600;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    line-height: 20px;
    &:hover {
        text-decoration: none;
        color: #9d9d9d;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 800px) {
        flex-direction: column;
    }
    margin-left: 100px;
    
`;

export const LinkContainer = styled.div`
    margin: 0 45px;
`;

export const Link = styled(NavLink)`
    color: #fff;
    fill: #fff;
    transition: .2s;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    font-size: 18px;
    font-weight: 400;
    &:hover {
        text-decoration: none;
        color: #9d9d9d;
    }
    &.active {
        text-decoration: none;
        color: #9d9d9d;
    }
`;
