import React from 'react';

import * as S from './styled';

const Years = ({ years, selectedYear, onChange }) => (
    <S.Container>
        {
            years && years.map((year, index) =>
                <S.Year key={index} href={year} selected={(year == selectedYear)} onClick={onChange}>{year}</S.Year>
            )
        }
    </S.Container>
);

export default Years;