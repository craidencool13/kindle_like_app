import React from 'react';
import styled from 'styled-components';

import {RootContainer} from 'App/components/containers';
import {Header} from 'App/components/common';
import Colors from 'App/constant/Colors';

const ScreenContainer = styled(RootContainer)`
  background-color: ${Colors.LIGHT_GREY};
`;

const More = () => {
  return (
    <ScreenContainer>
      <Header />
    </ScreenContainer>
  );
};

export default More;
