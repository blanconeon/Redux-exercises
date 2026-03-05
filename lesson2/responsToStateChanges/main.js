import { store, increment, decrement } from "./store"

// Define your change listener function here.
const printCountStatus = () => {
  console.log(`The count is ${store.getState()}`);
}
// Subscribe change listener function to the store here
const unsubscribe = store.subscribe(printCountStatus);

store.dispatch(decrement()); // store.getState() === -1

store.dispatch(increment()); // store.getState() === 0
store.dispatch(increment()); // store.getState() === 1





/*Yes, that’s correct. 

- `store.subscribe(reactToChange)` tells Redux to run `reactToChange` every time the store’s state changes.
- `reactToChange` is just a function. It does nothing until it is subscribed.
- The function returned by `store.subscribe()` (commonly named `unsubscribe`) is only for stopping the listener, not for running it.

So, `store.subscribe(reactToChange)` sets up the connection. The store calls `reactToChange` after each state change. Calling `unsubscribe()` removes that connection.  here: const unsubscribe = store.subscribe(reactToChange);
 we are activating the listener for the store to run reactToChange on every state update and at the same time we are setting up the disabling of that functionality making the variable a function at the same time that when called will deactivate the listener */