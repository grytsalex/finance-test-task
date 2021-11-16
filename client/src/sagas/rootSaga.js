import { eventChannel } from "redux-saga";
import { call, take, put } from "redux-saga/effects";
import io from "socket.io-client";
import { actionSetFinanceData } from "../actions";

export function createWebSocketConnection(url) {
  return io.connect(url);
}

export function createSocketChannel(socket) {
  return eventChannel((emitter) => {
    socket.emit("start");

    const eventHandler = (data) => {
      emitter(data);
    };

    const errorHandler = (errorEvent) => {
      emitter(new Error(errorEvent.reason));
    };

    socket.on("ticker", eventHandler);
    socket.on("error", errorHandler);

    return () => {
      socket.off("disconnect", eventHandler);
    };
  });
}

export function* rootSaga() {
  const socket = yield call(createWebSocketConnection, "http://localhost:4000");
  const socketChannel = yield call(createSocketChannel, socket);
  console.log(socketChannel);

  while (true) {
    try {
      const payload = yield take(socketChannel);
      yield put(actionSetFinanceData(payload));
    } catch (err) {
      console.error("socket error:", err);
      socketChannel.close();
    }
  }
}
