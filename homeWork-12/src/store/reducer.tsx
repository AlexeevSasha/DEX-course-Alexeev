import { combineReducers } from "redux";
import { historyReducer as historyState } from './inputHistory/reducer'
import { сommandBufferTypeReducer as сommandBuffer } from "./commandBuffer/reducer";

export const reducers = combineReducers({
    historyState,
    сommandBuffer
})