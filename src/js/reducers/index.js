// root Reducer
// A simple State

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

// rootReducer is the main Reducer of the app, which takes initialState as an input and a Action and return the state as it is
const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            }; // spread operator

        default:
            return state;
    }
};

export default rootReducer;