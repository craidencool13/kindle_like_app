import {Dimensions, Platform, StatusBar} from 'react-native';

export const HEADER_HEIGHT = Math.round(
  Platform.OS === 'android' ? StatusBar.currentHeight + 46 : 50,
);

export const WIDTH = Dimensions.get('window').width;

export const HEIGHT = Dimensions.get('window').height;
