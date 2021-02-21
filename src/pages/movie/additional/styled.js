import styled from 'styled-components';

export const Additional = styled.div`
    ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        list-style-position: inside; 
        flex-wrap: wrap;
    }
    ol li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.9em;
        width: 140px;
        box-sizing: border-box;
        margin: 10px;
        border: 1px solid #d02b1f;
        border-radius: 8px;
        background-color: #F0F3F4;
        text-align: center;
        padding: 10px;
    }
}`;