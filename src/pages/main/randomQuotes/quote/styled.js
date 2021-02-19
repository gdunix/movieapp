import styled, { css } from 'styled-components';
import Image from 'components/image';

export const MovieContainer = styled.div`
    border-radius: 8px;
    overflow: hidden; 
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    background-color: rgba(33,61,91, 0.9);
    border: 1px solid #d02b1f;
    width: 170px;
    margin: 8px;
    ${(props) =>
        props.hover ?
            css`
                margin-top: -20px;
            ` :
            css`
                max-height: 600px;
            `}
    &:hover {
        box-shadow: 3px 3px 20px rgba(0, 0, 0, .9);
        max-height: 1000px;
    }
`;

export const ViewContainer = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;

export const ImageContainer = styled.div`
    min-width: 170px;
    height: 260px;
    
`;

export const StyledImage = styled(Image)`
    height: 260px;
`;

export const DetailsContainer = styled.div`
    box-sizing: border-box;
    background-color: rgba(33,61,91, 0.9);
    padding: 10px 20px;
    width: 100%;
    p {
        font-size: 1.1em;
    }

    @media (max-width: 800px) {
        width: 170px;
        padding: 10px;
    }
`;

export const Quote = styled.div`
    font-family: Georgia, serif;
    font-size: 18px;
    font-style: italic;
    line-height: 1.45;
    @media (max-width: 800px) {
        font-size: 12px;
        line-height: 1;
    }
`;

