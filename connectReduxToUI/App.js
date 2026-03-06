import React from "react";
import { increment, decrement } from "./store";

function App({ state, dispatch}) {
  // Dispatch increment action
  const incrementerClicked = () => {
  dispatch(increment())
  }
  // Dispatch decrement action
  const decrementerClicked = () => {
  dispatch(decrement())
  }

  return(
    <main>
      <p id='counter'>{state}</p>
      <button id='incrementer' onClick={incrementerClicked}>+</button>
      <button id='decrementer' onClick={decrementerClicked}>-</button>
    </main>
  )
}

export default App;
 /*The store is connected to the reducer when it’s created, so any action dispatched to the store is automatically handled by that reducer, even though the store’s name is not mentioned in the dispatch call.The store is connected to the reducer when it’s created, so any action dispatched to the store is automatically handled by that reducer, even though the store’s name is not mentioned in the dispatch call.

 IMPORTANT When you create the store with `createStore(reducerName)`, the store is set up to use that reducer for all actions. The `dispatch` function you use in your component is the store’s own method. So, when you call `dispatch(decrement())`, you are actually calling the store’s dispatch method, which sends the action to the reducer attached to the store. 

You don’t need to mention the store’s name in the dispatch call because the connection was made when the store was created. The store always knows to use its reducer for any dispatched action.


Yes, that’s the key point. The `dispatch` function is the store’s own method. When you call `dispatch(action)`, it always sends the action to the reducer attached to that store. This is why you don’t need to mention the store or reducer name in the dispatch call. The connection is automatic.*/