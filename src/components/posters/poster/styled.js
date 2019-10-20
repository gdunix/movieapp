import styled from 'styled-components';

import Image from 'components/image';

export const Card = styled.div`
    border-radius: 8px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    overflow: hidden;
    width: 170px;
`;

export const Img = styled(Image)`
    width: 170px;
    height: 260px;
    box-sizing: border-box;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
`;
