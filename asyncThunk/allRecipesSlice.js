import { fetchRecipes } from '../../app/api'
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'

const loadRecipes = createAsyncThunk('allRecipes/loadRecipes', async () => { const data = await fetchRecipes()  // fetch data
const json = await data.json()  // transform to JSON
return json  // return data as JSON
}
 )

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },  
});

export default allRecipesSlice.reducer;


/* 

Here’s a simplified version of what `createAsyncThunk` creates under the hood, based on your code:

```js
function fetchUserById(id) {
  return async function(dispatch, getState) {
    dispatch({ type: 'users/fetchUserById/pending' });
    try {
      const response = await fetchUser(id);
      const data = await response.json();
      dispatch({ type: 'users/fetchUserById/fulfilled', payload: data });
    } catch (error) {
      dispatch({ type: 'users/fetchUserById/rejected', error: error });
    }
  }
}
```

This is the thunk pattern:  
- `fetchUserById(id)` returns a function.
- That inner function does the async work and dispatches actions for pending, fulfilled, and rejected states.

Redux Toolkit’s `createAsyncThunk` builds this for you automatically.*/