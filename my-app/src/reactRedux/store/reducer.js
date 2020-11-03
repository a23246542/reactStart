
import {CHANGE_INPUT_VALUE} from './actionTypes';

const defaultValue = {
  inputValue: '112',
  list: [],
}

export default (state = defaultValue,action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:{
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.payload.inputValue;
      return newState;
    }

    default:
      return state;
  }
}