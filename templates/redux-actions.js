import {
  CONSTANT_TYPE,
} from '../types';

const actionName = (value) => {
  return {
    type: CONSTANT_TYPE,
    payload: value,
  };
};

export default actionName;
