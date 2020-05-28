import React from 'react';
import styled from 'styled-components';

import BookCard from './BookCard';

const StyledScroll = styled.ScrollView`
  height: 100%;
  padding: 16px;
`;

const Row = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const Msg = styled.Text`
  font-size: 20px;
  margin: 16px;
  text-align: center;
`;

const BookGrid = ({books}) => {
  return (
    <StyledScroll>
      {books.length > 0 ? (
        <Row>
          {books.map((book, key) => (
            <BookCard {...{book, key}} />
          ))}
        </Row>
      ) : (
        <Msg>No books found.</Msg>
      )}
    </StyledScroll>
  );
};

export default BookGrid;
