import { combineReducers } from 'redux';
import types from './types';
// import messageReducer from './DisplayMessages'

const defaultState = [];
//reducers are responsible for state modifications that takes place in response to actions dispatched.
const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD:
            // doing [...state] because we do not want to mutate its original state. we are making a clone
            // return [...state].concat(action.message)
            return [...state, action.message]
            break;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    message: messageReducer
});

export default rootReducer;