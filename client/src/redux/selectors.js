import { createSelector } from "reselect";
import { initialState } from "./rootReducer";

export const selectorGetAppState = (state) => state || initialState;

export const selectorGetFinanceData = createSelector(
  selectorGetAppState,
  (state) => {
    return state.data;
  }
);
