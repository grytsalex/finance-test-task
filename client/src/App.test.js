import { mount } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "./App";

describe("With React Testing Library", () => {
  const initialState = {
    data: [],
  };
  const mockStore = configureStore();
  let store;

  it("expect render loader when state is empty array", () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".loader").length).toBeGreaterThan(0);
  });

  it("expect not render element with tableContainer class when state is empty array", () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".tableContainer").length).toBeLessThan(1);
  });

  it("expect render FinanceTable component when state contains ticker object", () => {
    const initialState = {
      data: [
        {
          change: "127.14",
          change_percent: "0.55",
          dividend: "0.18",
          exchange: "NASDAQ",
          last_trade_time: "2021-11-16T18:16:13.000Z",
          price: "289.32",
          ticker: "AAPL",
          yield: "1.85",
        },
      ],
    };
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".tableContainer").length).toBeGreaterThan(0);
  });
});
