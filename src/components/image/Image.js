import { useState, useCallback } from 'react';

import { SmallLoader } from 'components/loader';

import * as S from './styled';

const Image = props => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => setLoaded(true));

  return (
    <S.Container>
      {!loaded && <SmallLoader />}
      <img {...props} onLoad={onLoad} />
    </S.Container>

  )
};

export default Image;