const defaultState = {
  inputValue: '123',
  list: [
    'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
  ],
}

// export (state = defaultState, action) => { //%%%不是變數不能直接export
export default (state = defaultState, action) => {
  // console.log(state,action);
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;//%%上面有return了還是要return 因為一開始上面還沒發生dispatch!
}