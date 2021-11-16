import { initialState, rootReducer } from "../rootReducer";
import { actionSetFinanceData } from "../../actions";

describe("rootReducer tests", () => {
  it("should return initial state", () => {
    expect(rootReducer({ data: null }, {})).toEqual(initialState);
  });

  it("Should set array of tickers with payload", () => {
    const payload = [];
    const action = actionSetFinanceData(payload);
    const expectedState = {
      ...initialState,
      data: [],
    };

    const actual = rootReducer({ data: null }, action);

    expect(actual).toEqual(expectedState);
  });
});
