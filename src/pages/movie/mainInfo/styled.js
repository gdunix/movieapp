import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Image from 'components/image';

export const Container = styled.div`
    background-color: rgba(33,61,91, 1);
    border-radius: 8px;
    overflow: hidden; 
    margin:0;
    padding;0;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
`;

export const ViewContainer = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ImageContainer = styled.div`
    min-width: 333px;
    height: 500px;
    
`;

export const StyledImage = styled(Image)`
    height: 500px;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: rgba(33,61,91, 0.9);
    font-family: 'Slabo 27px',serif;
    padding: 20px 30px;
    width: 100%;
    p {
        font-size: 1.1em;
    }

    @media (max-width: 800px) {
        width: 300px;
        padding: 20px 0;
    }
`;

export const Title = styled.h2`
    padding: 0;
    margin: 0;
    font-size: 2.4em;
    line-height: 1.1em;
    display: inline-block;
`;

export const ReleaseDate = styled.span`
    opacity: 0.6;
    font-size: 0.7em
`;

export const Overview = styled.div`
    margin-top: 15px;
    margin-bottom: 30px;
    max-height: 150px;
    overflow-y: scroll;
    word-wrap: break-all;
    overflow-wrap: break-word;
`;

export const Tagline = styled.div`
    font-size: 1.6em;
    line-height: 1.3em;
    font-weight: bold;
    font-style: italic;
`;

export const Link = styled(NavLink)`
    color: #fff;
    &:hover {
        text-decoration: none;
        font-weight: bold;
        font-style: italic;
    }
`;