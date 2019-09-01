import styled from 'styled-components';
import Image from 'components/image'

export const ViewContainer = styled.div`
    background-image: radial-gradient(circle at 20% 50%, rgba(19.61%, 7.84%, 7.84%, 0.94) 0%, rgba(42.35%, 30.98%, 24.71%, 0.94) 100%);
    background-color: #ff5717;
    margin-top:30px;
    padding:0;
    width: 100%;
    position: relative;
    z-index: 1;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    height:450px;
`;

export const ImageContainer = styled.div`
    width: 30%
`;

export const StyledImage = styled(Image)`
    width: 300px;
    height:450px;
`;

export const DetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 70px;
    padding-right: 30px;
    font-family: 'Slabo 27px',serif;

    p {
        font-size: 1.1em;
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
`;

export const Tagline = styled.div`
    font-size: 1.6em;
    line-height: 1.3em;
    font-weight: bold;
    font-style: italic;
`;