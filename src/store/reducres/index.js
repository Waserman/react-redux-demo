import { combineReducers } from 'redux';

// the initial state will applied only on first run.
// later the state will be the current state of the application (at this level)
const initialState = null

const todos = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case 'FETCH_TODOS':
            return action.result
        default:
            // if no type was satisfied, we must return the current state
            return state;
    }
}

const users = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case 'FETCH_USERS':
            return action.result
        default:
            // if no type was satisfied, we must return the current state
            return state;
    }
}

export default combineReducers({ todos, users });