import {
  CONSTANT_TYPE,
} from '../actions/types';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT_TYPE:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
