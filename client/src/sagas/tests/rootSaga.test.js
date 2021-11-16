import { testSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import {
  createSocketChannel,
  createWebSocketConnection,
  rootSaga,
} from "../rootSaga";
import { actionSetFinanceData } from "../../actions";

describe("rootSaga", () => {
  describe("rootSaga", () => {
    const payload = [
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
    ];
    const url = "http://localhost:4000";

    const socket = {};
    const socketChannel = { close: jest.fn() };

    it("- successful", () => {
      testSaga(rootSaga)
        .next()
        .call(createWebSocketConnection, url)
        .next(socket)
        .call(createSocketChannel, socket)
        .next(socketChannel);
      // .take(socketChannel)
      // .next(payload);
      // .put(actionSetFinanceData(payload))
      // .next()
      // .isDone();
    });

    it("- failed", () => {
      testSaga(rootSaga)
        .next()
        .call(createWebSocketConnection, url)
        .next(socket);
      // .call(createSocketChannel, socket)
      // .next(socketChannel)
      // .take(socketChannel)
      // .next(payload);
      // .throw(new TestError('Error'))
      // .next()
      // .isDone();
    });
  });
});
