import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import Constants from 'App/constant/Constants';
import Colors from 'App/constant/Colors';
import {HEADER_HEIGHT, WIDTH} from 'App/utils/Dimensions';
import {Button} from '../common';
import {LibraryActions} from 'App/redux/library';

const FooterContainer = styled.View`
  width: 100%;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  background-color: ${Colors.WHITE};
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.LIGHT_GREY};
`;

const Row = styled.View`
  flex-direction: row;
`;

const Left = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

const Right = styled.View`
  flex: 1
  align-items: center;
  justify-content: center;
`;

const Btn = styled(Button)`
  height: ${HEADER_HEIGHT}px;
  width: 70px;
`;

const I = styled(Icon)`
  color: ${Colors.BLACK};
  font-size: 32px;
`;

const Footer = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const {view, page, activeBook} = useSelector(state => state.library);

  useEffect(() => {
    setProgress(Math.round(page * activeBook.content.length) / 100);
  }, [page, activeBook]);

  const changeView = () => {
    let newView =
      view === Constants.DEFAULT_VIEW
        ? Constants.GRID_VIEW
        : Constants.DEFAULT_VIEW;
    dispatch(LibraryActions.setView(newView));
  };

  return (
    <FooterContainer>
      <Row>
        <Left>
          <Btn onPress={changeView}>
            <I name={view === Constants.DEFAULT_VIEW ? 'grid-on' : 'list'} />
          </Btn>
        </Left>
        <Right>
          {activeBook && (
            <Progress.Bar
              progress={progress}
              color={Colors.BLACK}
              height={1}
              width={WIDTH - 100}
            />
          )}
        </Right>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
