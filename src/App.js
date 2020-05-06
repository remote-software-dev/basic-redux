import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './store/actions/counterActions';

const App = (props) => {
  return (
    <div className="App">
      <h1>Learn React Redux Counter</h1>
      <h3>Count: {props.counter}</h3>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(INCREMENT);
    },

    decrement: () => {
      dispatch(DECREMENT);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
