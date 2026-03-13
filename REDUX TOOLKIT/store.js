import { createStore, combineReducers } from 'redux';
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
  }
});





/* ok state just contains the slice If both `addTodo` and `toggleTodo` are handled by the same reducer (for example, `todosReducer`), the state would look like:

```js
{
  todos: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Practice coding', completed: true }
  ],
  filters: { ... }
}
```

Both `addTodo` and `toggleTodo` are actions that update the `todos` array, but they do not create separate properties in state. The reducer manages the entire `todos` array, handling different actions for that array. The state does **not** look like:

```js
todos: {
  todo: ...,
  completed: ...
}
```

Instead, `todos` is usually an array of todo objects, and each object can have properties like `text` and `completed`. The reducer updates the array based on the action.*/