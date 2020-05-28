import React from 'react';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import createStore from 'App/redux/';
import RootNavigation from './navigation/RootNavigation';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const store = createStore();

const App = () => {
  console.disableYellowBox = true;
  return (
    <SafeAreaProvider>
      <Provider {...{store}}>
        <StatusBar barStyle="dark-content" />
        <StyledSafeAreaView>
          <RootNavigation />
        </StyledSafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
