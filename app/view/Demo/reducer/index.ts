import {handleActions} from 'redux-actions';

interface Demo {
  receive: any;
}

export const initState = {
  receive: 0,
};

export const reducers = handleActions<Demo>(
  {
    RECEIVE: (state, action) => ({
      ...state,
      receive: action.payload,
    }),
  },
  initState,
);
