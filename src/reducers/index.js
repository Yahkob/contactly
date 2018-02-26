import * as types from '../constants/ActionTypes';
const initialState = {
  contacts: [],
  isFetching: false,
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
