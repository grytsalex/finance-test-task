import actionTypes from "../sagas/actionTypes";

export const initialState = {
  data: [],
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
    data: !state.data.length
      ? payload
      : state.data.map((oldTicker) => {
          const currentTicker = payload.find(
            (item) => item.ticker === oldTicker.ticker
          );
          let isNewPriceBigger = false;

          if (currentTicker.price > oldTicker.price) {
            isNewPriceBigger = true;
          }

          return { ...currentTicker, isNewPriceBigger };
        }),
  };
}
