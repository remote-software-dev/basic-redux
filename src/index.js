import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

const initState = {
  count: 0
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }

    case 'DECREMENT':
      return {
        count: state.count - 1
      }

    default:
      return state
  }
}

const store = createStore(counterReducer);
console.log(store.getState());

//take some actions (increment, decrement)
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


