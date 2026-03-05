//  Action Creators


import { createStore } from 'redux';

// Create your action creators here.
export const increment = () => {
  return { type: "increment" };
}

export const decrement = () => {
  return { type: "decrement" };
}

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
}

const store = createStore(countReducer);

// Modify the dispatches below.
store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());

/*That’s a good way to think about it! The reducer contains the logic for how the state should change. The action creator just creates the action object with the correct `type` (the “label” the reducer recognizes). 

The normal flow is:
1. User triggers an event (like a click).
2. The event handler calls the action creator to get the action object.
3. The event handler dispatches the action to the store.
4. The store sends the action to the reducer.
5. The reducer updates the state based on the action’s type.

Action creators are not required, but they help keep code organized and reduce mistakes.


store.dispatch({type:'toggle'}); // const toggle = () => {
  return { type: "toggle" };
}
store.dispatch(toggle()); // both do exactly the same thing correct?

Yes, both do exactly the same thing. They both dispatch an action object with `{ type: "toggle" }` to the store. The difference is that the action creator helps prevent mistakes and keeps your code organized, especially when you need to dispatch the same action in multiple places.
*/