import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"
import { store } from "./store.js"

const root = createRoot(document.getElementById("app"));

// Store State Change Listener
const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
}

render();

// Subscribe to state changes
store.subscribe(render);


//`store.subscribe()` registers a function to run after every Redux store state change. This keeps the UI or other logic in sync with the latest state. It returns a function you can call to remove the listener if needed. Commonly used to re-render the UI when state updates.

/*There’s no strict hierarchy for where createStore is imported, but there are common patterns:

- `createStore()` is usually called in a separate file (like `store.js`) where the reducer is defined or imported.
- The store is created once and then imported wherever it’s needed (like in `index.js`).
- The `App` component does not manage the state directly; it receives state and dispatch as props from the store.

So, the store is the main source of truth for state, not the `App` component. The store should be created before any components need access to state.*/