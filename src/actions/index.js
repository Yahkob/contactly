import * as types from '../constants/ActionTypes';
import mockData from '../contacts.json';
// If we were interacting with a real service here and not just mock data
// we'd want to use something like redux-thunk for async logic
function fetchContactsList() {
  return {
    type: types.FETCH_CONTACTS_LIST,
    list: mockData
  };
}

export { fetchContactsList };
