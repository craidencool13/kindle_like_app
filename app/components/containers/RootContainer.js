import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
`;

const RootContainer = ({children, ...rest}) => {
  return <Container {...rest}>{children}</Container>;
};

export default RootContainer;
