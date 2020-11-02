import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

// export const store = createStore(reducer);
// export default const store = createStore(reducer);//%%必須是運算式
// !!!我知道了 export必須有名
export default store;//%%這樣才能直接import匿名給名字