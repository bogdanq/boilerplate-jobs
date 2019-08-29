import { combineReducers } from "redux";
import { chatReducer } from "./chat";

export const rootReducer = combineReducers({ chatReducer });
