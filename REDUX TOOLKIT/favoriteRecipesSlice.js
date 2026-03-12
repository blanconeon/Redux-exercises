import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

/* Create your Slice object here. */
//Configuration object for createSlice()
const options = {
  name: 'favoriteRecipes', //Name of slice
  initialState: [], //Initial state of slice
  reducers: {
   //Reducer for "addRecipe" action
   addRecipe: (state, action) => {
    return [...state, action.payload]
   },
   // Reducer for RemoveRecipe
   removeRecipe: (state, action) => {
   return state.filter(recipe => recipe.id !== action.payload.id) 
   }

  }
};
 export const favoriteRecipesSlice = createSlice(options);
/* A default return is not needed in a case reducer function because Redux Toolkit uses the Immer library. With Immer, you can directly mutate the state or return a new state. If you don’t return anything, Immer will handle the state update for you. 

A default return is only needed in a traditional reducer with a switch statement, to handle unknown actions. In a slice, each case reducer only handles its specific action, so a default return is not required.*/

/* Do not delete the code below...*/

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};