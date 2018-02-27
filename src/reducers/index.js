import * as types from '../constants/ActionTypes';

const initialState = {
  contacts: []
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CONTACTS_LIST:
      return {
        contacts: action.list
      };
    default:
      return state;
  }
}
