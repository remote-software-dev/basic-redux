### Brief Explanation

This repo was meant to be as simple redux as possible for learning purpose only. There are two branch on this repo, First is the **master** and the **refactored** branch. I supposed that we understand the theoretical concept already.<br/>
In the nutshell, what I understand redux has to have <br/>
1. Global store, 
2. Actions which is plain java object then dispatch them and 
3. Reducer to update the state.<br/>

### Steps
#### Step 1
- Create store where reducer is passed as argument

````javascript
const store = createStore(counterReducer);
````
#### Step 2
- Define the actions as object, and passed as an argument in the dispatch function 
````javascript
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
````
#### Step 3
- Tell reducer to take the action of updating

````javascript
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
````

The result can be console logged as in the picture shown <br/>

![Alt text](https://github.com/remote-software-dev/basic-redux/blob/master/public/result.PNG)

#### Step 4
- Now, let's use App component, and pass the data as props. But before that, we need to make data **available** in the `App.js` component by using ***Higher Order component*** function which is ***connect***. Let's define a function for that purpose 
````javascript
const mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}
````
- Also we want to have function available in our `App.js`, so we map it as props
````javascript
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
````
- Finally, we wrap our App component with ***connect*** function where we pass `mapStateToProps` and `mapDispatchToProps`
````javascript
export default connect(mapStateToProps, mapDispatchToProps)(App);
````
Here is what the `App.js`` looks like
```javascript
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
```
When we `npm start` the app, we get visualization as shown. Just pass
`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
in the index.js file

````javascript
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

````
![Alt text](https://github.com/remote-software-dev/basic-redux/blob/master/public/redux-devtool.PNG)
- Practically, we are done. But, to make it more professional, normally for real life application, the app's file structure will be placed separately based on their functionality. So let's refactor it

#### Step 5 Refactoring
This step is a no-brainer activities, simply follow the file structure on the **refactoring branch**

![Alt text](https://github.com/remote-software-dev/basic-redux/blob/master/public/file-structure.PNG)

That's all, Mate... Happy Coding
