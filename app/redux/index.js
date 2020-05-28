import {combineReducers} from 'redux';
import configureStore from './createStore';
import rootSaga from '../saga';

import {LibraryReducer} from './library';

export const reducers = combineReducers({
  library: LibraryReducer,
});

export default () => {
  let {store, sagasManager, sagaMiddleware} = configureStore(
    reducers,
    rootSaga,
  );

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     const nextRootReducer = require('./').reducers;
  //     store.replaceReducer(nextRootReducer);

  //     const newYieldedSagas = require('../saga').default;
  //     sagasManager.cancel().done.then(() => {
  //       sagasManager = sagaMiddleware(newYieldedSagas);
  //     });
  //   });
  // }

  return store;
};
