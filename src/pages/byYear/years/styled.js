import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    border-bottom: 1px solid #1d2f4a;
    max-height: 120px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
`;


export const Year = styled.a`
    padding:10px;
    font-family: 'Slabo 27px',serif;
    font-size: 2.4em;
    line-height: 1.1em;
    text-shadow: 0.5px 0.5px 0.5px #000;
    color: ${props => (props.selected ? '#d02b1f' :  '#1d2f4a')};

    &:hover {
        color: #d02b1f;
    }
`;