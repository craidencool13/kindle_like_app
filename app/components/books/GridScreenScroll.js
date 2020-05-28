import React from 'react';
import styled from 'styled-components';

import Page from './Page';

const StyledScroll = styled.ScrollView`
  height: 100%;
  padding: 16px;
`;

const Row = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const GridScreenScroll = ({content}) => {
  return (
    <StyledScroll>
      {content.length > 0 && (
        <Row>
          {content.map((item, index) => (
            <Page {...{item}} key={index} pageNum={index + 1} />
          ))}
        </Row>
      )}
    </StyledScroll>
  );
};

export default GridScreenScroll;
