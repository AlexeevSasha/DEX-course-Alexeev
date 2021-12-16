import { combineReducers } from "redux";
import { historyReducer as history } from './inputHistory/reducer'
import { сommandBufferTypeReducer as сommandBuffer } from "./сommandBuffer/reducer.";

export const reducers = combineReducers({
    history,
    сommandBuffer
})