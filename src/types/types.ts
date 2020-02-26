import { Action } from 'redux';

export interface RecipeBookState {
    isAuthenticated: boolean;
}

export interface AuthContract extends Action{
    type: string;
    isAuthenticated: boolean;
}
