import { selectorGetAppState, selectorGetFinanceData } from "../selectors";

const initialState = {
  data: {},
};

describe("Selectors", () => {
  it("selectorGetAppState", () => {
    expect(selectorGetAppState(initialState)).toEqual(initialState);
  });

  it("selectorGetFinanceData", () => {
    expect(selectorGetFinanceData(initialState)).toEqual(initialState.data);
  });
});
