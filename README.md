## Explanation

This repo was meant to be as simple redux as possible for learning purpose only. There are two branch on this repo, First is the **master** and the **refactored** branch. I supposed that we understand the theoretical concept already.<br/>
In the nutshell, what I understand redux has to have <br/>
1. Global store, 
2. Actions which is plain java object then dispatch them and 
3. Reducer to update the state.<br/>

## Steps
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
The result can be console logged as in the picture shown 
![Alt text](https://github.com/remote-software-dev/basic-redux/blob/master/public/result.PNG)
