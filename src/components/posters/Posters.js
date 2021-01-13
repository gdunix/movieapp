import * as S from './styled';

const Posters = Poster => ({ items }) => (
    <S.List>
        {
            items.map((props, index) => (
                <S.Item key={index}>
                    <Poster {...props} />
                </S.Item>
            ))
        }
    </S.List>
);

export default Posters;