import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Constants from 'App/constant/Constants';
import TabNavigation from './TabNavigation';
import Book from 'App/screens/Book';

const {Navigator, Screen} = createStackNavigator();

const RootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator {...{screenOptions}}>
        <Screen name={Constants.TAB_NAVIGATION} component={TabNavigation} />
        <Screen name={Constants.BOOK_SCREEN} component={Book} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
