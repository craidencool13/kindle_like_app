import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from './Button';
import {HEADER_HEIGHT} from 'App/utils/Dimensions';
import Colors from 'App/constant/Colors';

const NavContainer = styled.View`
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

const Middle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Right = styled.View`
  min-width: 16px;
  align-items: flex-end;
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

const SearchInput = styled.TextInput`
  width: 100%;
  border-radius: 10px;
  background-color: ${Colors.LIGHT_GREY};
  border-width: 1px;
  border-color: ${Colors.LIGHT_GREY};
  padding-horizontal: 16px;
  font-size: 16px;
  padding-vertical: 7px;
`;

const Header = ({fromPage = null, middleComponent = null}) => {
  const {goBack} = useNavigation();

  const backBtn = () => (
    <Btn onPress={() => goBack()}>
      <I name="keyboard-arrow-left" />
    </Btn>
  );

  const leftIconBtn = () => (
    <Btn>
      <I name="notifications-none" />
    </Btn>
  );

  return (
    <NavContainer>
      <Row>
        <Left>{fromPage ? backBtn() : leftIconBtn()}</Left>
        <Middle>
          {middleComponent ? (
            middleComponent()
          ) : (
            <SearchInput placeholder="Search Kindle" />
          )}
        </Middle>
        <Right />
      </Row>
    </NavContainer>
  );
};

export default Header;
