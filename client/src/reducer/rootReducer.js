import actionTypes from "../actionTypes";

export const initialState = {
  data: null,
};

export const rootReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_FINANCE_DATA:
      return setFinanceData(state, payload);

    default:
      return state;
  }
};

function setFinanceData(state, payload) {
  return {
    ...state,
    data: payload,
  };
}
