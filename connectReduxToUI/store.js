import { createStore } from 'redux';

// Action Creators
export function increment() { 
  return {type: 'increment'}
}

export function decrement() { 
  return {type: 'decrement'}
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1; 
    case 'decrement':
      return state - 1; 
    default:
      return state;
  }
};  
export const store = createStore(countReducer);
/*

RENDERING UI:

1. Define the reducer function with state change logic.

2. Create the Redux store using `createStore(reducer)` in `store.js`.  export const store = createStore(countReducer)
3. Import the store into `index.js`.
4. In `index.js`, get the current state with `store.getState()` and the dispatch function with `store.dispatch`.
5. Pass the state and dispatch as props to the `App` component.
6. In `App`, use the state to display data and dispatch to handle events.
7. Use `store.subscribe()` in `index.js` to re-render the UI when state changes. */

