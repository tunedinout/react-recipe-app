import { RecipeBookState, AuthContract } from '../types/types';

const initialState: RecipeBookState = {
  isAuthenticated: false,
};

export default (state = initialState, action: AuthContract): RecipeBookState => {
  switch (action.type) {
    case 'SET_IS_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };

    default:
      return state;
  }
};
