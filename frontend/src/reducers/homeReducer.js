import { types } from '../types/types';

const initialState = {}

export const homeReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case types.homeReducer:
            return {
                ...state
            }
    
        default:
            return state;
    }
};