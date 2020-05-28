import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import BookGrid from 'App/components/library/BookGrid';
import {LibraryTypes} from 'App/redux/library';
import {RootContainer} from 'App/components/containers';
import {Header} from 'App/components/common';
import Colors from 'App/constant/Colors';

const ScreenContainer = styled(RootContainer)`
  background-color: ${Colors.LIGHT_GREY};
`;

const Library = () => {
  const dispatch = useDispatch();
  const {books} = useSelector(state => state.library);

  useEffect(() => {
    dispatch({type: LibraryTypes.REQUEST});
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Header />
      <BookGrid {...{books}} />
    </ScreenContainer>
  );
};

export default Library;
