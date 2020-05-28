import React, {useRef, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';

import {WIDTH} from 'App/utils/Dimensions';
import Page from './Page';

const FullScreenScroll = ({content}) => {
  const {page} = useSelector(state => state.library);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef) {
      // Requires timeout for transition
      setTimeout(() => {
        scrollRef.current.snapToItem(page, false);
      }, 200);
    }
  }, [page, scrollRef]);

  return (
    <Carousel
      ref={scrollRef}
      data={content}
      renderItem={({item, index}) => (
        <Page {...{item}} key={index} pageNum={index + 1} />
      )}
      sliderWidth={WIDTH}
      itemWidth={WIDTH}
    />
  );
};

export default FullScreenScroll;
