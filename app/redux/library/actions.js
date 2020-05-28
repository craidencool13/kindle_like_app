import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  request: null,
  success: ['books'],
  failed: null,
  selectBook: ['book'],
  setView: ['view'],
  setPage: ['page'],
});

export const LibraryTypes = Types;
export default Creators;
