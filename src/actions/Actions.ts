import { AuthContract } from '../types/types';

export function setIsAuthenticated(isAuthenticated: boolean): AuthContract {
  return {
    type: 'SET_IS_AUTHENTICATED',
    isAuthenticated,
  };
}
