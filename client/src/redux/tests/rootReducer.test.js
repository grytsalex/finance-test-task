import { initialState, rootReducer } from "../rootReducer";
import { actionSetFinanceData } from "../../sagas/actions";

describe("rootReducer tests", () => {
  it("should return initial state", () => {
    expect(rootReducer({ data: [] }, {})).toEqual(initialState);
  });

  it("Should set array of tickers with payload", () => {
    const payload = [];
    const action = actionSetFinanceData(payload);
    const expectedState = {
      ...initialState,
      data: [],
    };

    const actual = rootReducer({ data: [] }, action);

    expect(actual).toEqual(expectedState);
  });
});
