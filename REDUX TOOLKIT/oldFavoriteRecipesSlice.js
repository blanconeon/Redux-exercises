import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Reducer
///////////////////////////////////////

const initialState = [];
export const favoriteRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...state, action.payload]
    case 'favoriteRecipes/removeRecipe':
      return state.filter(recipe => recipe.id !== action.payload.id)
    default:
      return state;
  }
}

// Action Creators
///////////////////////////////////////

export function addRecipe(recipe) {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  }
}

export function removeRecipe(recipe) {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  }
}

// Selectors
///////////////////////////////////////

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};