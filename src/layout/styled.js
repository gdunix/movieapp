import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto Slab', serif;
    }
  
    div {
        display: block;   
    }
    
    a {
        text-decoration: none;
    }

    h3 {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    box-sizing: border-box;
    padding-top: 50px;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`;

export const InnerContent = styled.div`
    width: 1000px;
`;
