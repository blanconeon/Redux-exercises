import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchRecipes } from './api';

const searchRecipesByName = createAsyncThunk(
  'recipes/searchRecipesByName',
  async (recipeName, thunkAPI) => {
    const response = await searchRecipes(recipeName);
    return response.data;
  }
);
/* 
Here’s a conceptual map in text form:

```
[UI Event]
   |
   v
dispatch(searchRecipesByName('Pizza'))
   |
   v
[Thunk Action Creator]
   |
   |-- receives 'Pizza' as recipeName
   |
   v
calls searchRecipes(recipeName)
   |
   v
[API Helper Function]
   |
   |-- builds URL: /api/recipes?name=Pizza
   |-- makes fetch request
   |
   v
[API Server]
   |
   |-- returns data
   |
   v
[Thunk returns data to Redux store]
```

This shows how the parameter flows from the UI, through the thunk, to the API, and back.
*/