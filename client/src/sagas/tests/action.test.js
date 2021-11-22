import { actionSetFinanceData } from "../actions";
import actionTypes from "../actionTypes";

describe("Action", () => {
  it("actionSetFinanceData", () => {
    expect(actionSetFinanceData()).toEqual({
      type: actionTypes.SET_FINANCE_DATA,
    });
  });
});
