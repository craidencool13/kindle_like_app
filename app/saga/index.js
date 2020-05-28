import {takeLatest, take, fork, all, takeEvery} from 'redux-saga/effects';

/* ------------- TYPES ------------- */
import {LibraryTypes} from 'App/redux/library/actions';

/* ------------- SAGA ------------- */
import {getBooks} from './library';

import {create} from 'App/services/Api';

const api = create();

export default function* root() {
  yield all([takeLatest(LibraryTypes.REQUEST, getBooks, api)]);
}
