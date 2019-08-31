import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
    padding: 15px;
    background-color: #232323;
    color: #fff;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Logo = styled.div``;

export const LogoLink = styled.a`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.25);
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
`;

export const LinkContainer = styled.div`
    margin: 0 45px;
`;

export const Link = styled(NavLink)`
    color: #fff;
    fill: #fff;
    transition: .2s;
    text-decoration: none;
    font-size: 16px;
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
