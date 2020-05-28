import {createReducer} from 'reduxsauce';
import {LibraryTypes} from './actions';
import Constants from 'App/constant/Constants';

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  books: [],
  view: Constants.DEFAULT_VIEW,
  page: 1,
  activeBook: null,
  loading: false,
  error: false,
};

/* ------------- Reducers ------------- */

export const request = state => ({
  ...state,
  loading: true,
  error: false,
});

export const success = (state, {books}) => ({
  ...state,
  books: [...state.books, ...books],
});

export const failed = state => ({
  ...state,
  loading: false,
  error: true,
});

export const select = (state, {book}) => ({
  ...state,
  activeBook: book,
});

export const setView = (state, {view}) => ({
  ...state,
  view: view,
});

export const setPage = (state, {page}) => ({
  ...state,
  page: page,
});

/* ------------- Hookup Reducers To Types ------------- */

export const LibraryReducer = createReducer(INITIAL_STATE, {
  [LibraryTypes.REQUEST]: request,
  [LibraryTypes.SUCCESS]: success,
  [LibraryTypes.FAILED]: failed,
  [LibraryTypes.SELECT_BOOK]: select,
  [LibraryTypes.SET_VIEW]: setView,
  [LibraryTypes.SET_PAGE]: setPage,
});
