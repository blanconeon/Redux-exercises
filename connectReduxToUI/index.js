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