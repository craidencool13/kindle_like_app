import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Constants from 'App/constant/Constants';
import {HEIGHT} from 'App/utils/Dimensions';
import {LibraryActions} from 'App/redux/library';

const Button = styled.TouchableOpacity`
  padding: 5px;
  width: 33%;
  height: ${HEIGHT * 0.2}px;
`;

const ImageCover = styled.Image`
  width: 100%;
  height: 100%;
`;

const BookCard = ({book}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const goToBookDetails = () => {
    dispatch(LibraryActions.selectBook(book));
    navigate(Constants.BOOK_SCREEN);
  };

  return (
    <Button onPress={goToBookDetails} activeOpacity={0.5}>
      <ImageCover resizeMode="contain" source={{uri: book.cover}} />
    </Button>
  );
};

export default BookCard;
