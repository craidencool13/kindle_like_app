import {call, put, select} from 'redux-saga/effects';
import {LibraryActions} from 'App/redux/library';
import {getEndpoint} from 'App/constant/Environment.js';
import Constants from 'App/constant/Constants';

export function* getBooks(api, {payload}) {
  try {
    const url = getEndpoint(Constants.API_BOOK_LIST);
    const {data} = yield call(api.getRequest, url);
    yield put(LibraryActions.success(data));
  } catch (error) {
    yield put(LibraryActions.failed());
  }
}
