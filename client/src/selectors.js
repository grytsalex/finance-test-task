import { createSelector } from "reselect";
import { initialState } from "./reducer/rootReducer";

export const selectorGetAppState = (state) => state || initialState;

export const selectorGetFinanceData = createSelector(
  selectorGetAppState,
  (state) => { 
    return state.data
  } 
);
