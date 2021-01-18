import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    padding: 10px;
    border-bottom: 1px solid #1d2f4a;
`;

export const Letter = styled.div`
    display: block;
    font-family: 'Slabo 27px',serif;
    font-size: 2.4em;
    margin: 30px 0;
    text-shadow: 0.5px 0.5px 0.5px #000;
    border-bottom: 1px solid #1d2f4a;
`;

export const Director = styled(NavLink)`
    padding:10px 30px 10px 0;
    font-family: 'Slabo 27px',serif;
    font-size: ${props => 1.6 + (0.2 * props.count)}em;
    line-height: 1.1em;
    text-shadow: 0.5px 0.5px 0.5px #000;
    color: ${props => (props.selected ? '#d02b1f' : '#1d2f4a')};

    &:hover {
        color: #d02b1f;
    }
`;