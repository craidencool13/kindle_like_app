import React, {Fragment} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import Colors from 'App/constant/Colors';
import {WIDTH, HEIGHT} from 'App/utils/Dimensions';
import Constants from 'App/constant/Constants';
import {LibraryActions} from 'App/redux/library';

const Container = styled.TouchableOpacity`
  margin: 10px;
  padding: 16px;
  height: 95%;
  width: ${WIDTH - 20}px;
  background-color: ${Colors.WHITE};
  border-width: 1px;
  border-color: ${Colors.DARK_GREY};
`;

const FullContainer = styled.TouchableOpacity`
  padding: 16px;
  height: 100%;
  width: ${WIDTH}px;
  background-color: ${Colors.WHITE};
`;

const GridContainer = styled.TouchableOpacity`
  position: relative;
  background-color: ${Colors.WHITE};
  padding: 8px;
  margin: 5px;
  width: 33%;
  height: ${HEIGHT * 0.25}px;
  width: ${WIDTH / 3 - 25}px;
`;

const Content = styled.Text`
  font-size: 16px;
  color: ${Colors.BLACK};
  line-height: 25px;
  text-align: justify;
`;

const GridContent = styled.Text`
  font-size: 5px;
  color: ${Colors.BLACK};
  line-height: 8px;
  text-align: justify;
`;

const PageNum = styled.Text`
  background-color: ${Colors.WHITE}
  color: ${Colors.DARK_GREY};
  padding-vertical: 5px;
  font-size: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Page = ({item, pageNum}) => {
  const dispatch = useDispatch();
  const {view} = useSelector(state => state.library);

  const changeView = () => {
    dispatch(LibraryActions.setPage(pageNum - 1));
    let newView =
      view === Constants.GRID_VIEW || view === Constants.FULL_VIEW
        ? Constants.DEFAULT_VIEW
        : Constants.FULL_VIEW;

    dispatch(LibraryActions.setView(newView));
  };

  return (
    <Fragment>
      {view === Constants.DEFAULT_VIEW && (
        <Container onPress={changeView} activeOpacity={1}>
          <Content>{item}</Content>
        </Container>
      )}
      {view === Constants.FULL_VIEW && (
        <FullContainer onPress={changeView} activeOpacity={1}>
          <Content>{item}</Content>
        </FullContainer>
      )}
      {view === Constants.GRID_VIEW && (
        <GridContainer onPress={changeView} activeOpacity={1}>
          <GridContent>{item}</GridContent>
          {pageNum && <PageNum>{pageNum}</PageNum>}
        </GridContainer>
      )}
    </Fragment>
  );
};

export default Page;
