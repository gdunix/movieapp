import styled from 'styled-components';

import Image from 'components/image';

export const Card = styled.div`
    border-radius: 8px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    overflow: hidden;
    width: 170px;
    background-color: rgba(0, 0, 0, .8);
    &:hover {
        box-shadow: 3px 3px 20px rgba(0, 0, 0, .9);
    }
`;

export const Img = styled(Image)`
    height: 260px;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
`;
