import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import Constants from 'App/constant/Constants';
import Colors from 'App/constant/Colors';

import {RootContainer} from 'App/components/containers';
import {Header, Button} from 'App/components/common';
import NavOptions from 'App/components/books/NavOptions';
import Footer from 'App/components/books/Footer';
import DefaultScreenScroll from 'App/components/books/DefaultScreenScroll';
import FullScreenScroll from 'App/components/books/FullScreenScroll';
import GridScreenScroll from 'App/components/books/GridScreenScroll';

const ScreenContainer = styled(RootContainer)`
  background-color: ${Colors.LIGHT_GREY};
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${Colors.BLACK};
`;

const Row = styled.View`
  padding-vertical: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(Button)`
  width: 50px;
`;

const I = styled(Icon)`
  color: ${Colors.BLUE};
  font-size: 25px;
`;

const Book = ({}) => {
  const {activeBook, view} = useSelector(state => state.library);

  if (!activeBook) null;

  return (
    <ScreenContainer>
      {view === Constants.DEFAULT_VIEW && (
        <Fragment>
          <Header
            fromPage={Constants.TAB_NAVIGATION}
            middleComponent={NavOptions}
          />
          <Row>
            <Title>{activeBook.title}</Title>
            <Btn onPress={() => {}}>
              <I name="info" />
            </Btn>
          </Row>
          <DefaultScreenScroll content={activeBook.content} />
        </Fragment>
      )}

      {view === Constants.FULL_VIEW && (
        <FullScreenScroll content={activeBook.content} />
      )}

      {view === Constants.GRID_VIEW && (
        <GridScreenScroll content={activeBook.content} />
      )}
      {(view === Constants.GRID_VIEW || view === Constants.DEFAULT_VIEW) && (
        <Footer />
      )}
    </ScreenContainer>
  );
};

export default Book;
