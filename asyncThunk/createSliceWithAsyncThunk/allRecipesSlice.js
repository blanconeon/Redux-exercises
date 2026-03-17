import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../favoriteRecipes/favoriteRecipesSlice";
import { selectSearchTerm } from "../search/searchSlice";
export const loadRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async () => {
    const data = await fetch("api/recipes?limit=10");
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
     [loadRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },
    [loadRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const allRecipesSlice = createSlice(sliceOptions);

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default allRecipesSlice.reducer;

/* The connection is made through the action type string you provide to `createAsyncThunk`. In your case, `"allRecipes/loadRecipes"` is used as the action type prefix. 

Redux Toolkit uses this string to generate action types like:
- `allRecipes/loadRecipes/pending`
- `allRecipes/loadRecipes/fulfilled`
- `allRecipes/loadRecipes/rejected`

Your slice’s `extraReducers` listens for these exact action types. So, the connection is not a direct code reference, but a match between the action type string in the thunk and the keys in `extraReducers`. The slice name (`allRecipes`) helps keep action types unique and organized.*/

