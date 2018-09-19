// creating an action
// Every Action should have a type property, type is nothing but a string
// The reducer will use that string to determine how to calculate the next state

import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});