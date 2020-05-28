import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

import {Button} from '../common';
import {HEADER_HEIGHT} from 'App/utils/Dimensions';
import Colors from 'App/constant/Colors';

const Row = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Left = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

const Right = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Btn = styled(Button)`
  height: ${HEADER_HEIGHT}px;
  width: 50px;
`;

const I = styled(Icon)`
  color: ${Colors.BLACK};
  font-size: 32px;
`;

const NavOptions = () => {
  return (
    <Row>
      <Left>
        <Btn onPress={() => {}}>
          <I name="menu" />
        </Btn>
      </Left>
      <Right>
        <Btn onPress={() => {}}>
          <I name="search" />
        </Btn>
        <Btn onPress={() => {}}>
          <I name="font-download" />
        </Btn>
        <Btn onPress={() => {}}>
          <I name="assignment" />
        </Btn>
        <Btn onPress={() => {}}>
          <I name="share" />
        </Btn>
        <Btn onPress={() => {}}>
          <I name="bookmark-border" />
        </Btn>
      </Right>
    </Row>
  );
};

export default NavOptions;
