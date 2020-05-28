import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.TouchableOpacity``;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = ({children, ...rest}) => {
  return (
    <StyledButton {...rest}>
      <Container>{children}</Container>
    </StyledButton>
  );
};

export default Button;
