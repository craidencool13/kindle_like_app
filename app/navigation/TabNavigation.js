import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Constants from 'App/constant/Constants';
import Colors from 'App/constant/Colors';
import More from 'App/screens/More';
import Library from 'App/screens/Library';
import Book from 'App/screens/Book';

const Image = styled.Image`
  width: 36px;
  height: 90%;
`;

const TabNavigation = () => {
  const {activeBook} = useSelector(state => state.library);
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: Colors.BLUE,
        headerShown: false,
        showLabel: false,
        adaptive: true,
        safeAreaInset: {bottom: 'never', top: 'always'},
      }}>
      <Screen
        name={Constants.LIBRARY_SCREEN}
        component={Library}
        options={{
          tabBarLabel: 'LIBRARY',
          tabBarIcon: ({color, size}) => (
            <Icon name="local-library" {...{color, size}} />
          ),
        }}
      />
      {activeBook && (
        <Screen
          name={Constants.BOOK_SCREEN}
          component={Book}
          options={{
            tabBarVisible: false,
            showLabel: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                resizeMode="contain"
                source={{
                  uri: activeBook.cover,
                }}
              />
            ),
          }}
        />
      )}
      <Screen
        name={Constants.MORE_SCREEN}
        component={More}
        options={{
          tabBarLabel: 'MORE',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" {...{color, size}} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
