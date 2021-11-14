import { eventChannel } from "redux-saga";
import { call, take, put } from "redux-saga/effects";
import io from "socket.io-client";
import { actionSetFinanceData } from "../actions";

function createWebSocketConnection(url) {
  return io.connect(url);
}

function createSocketChannel(socket) {
  return eventChannel((emitter) => {
    const eventHandler = (data) => {
      emitter(data);
    };

    // const errorHandler = (errorEvent) => {
    //   emit(new Error(errorEvent.reason));
    // };

    socket.on("ticker", eventHandler);

    return () => {
      socket.off("disconnect", () => console.log(socket.id));
    };
  });
}

export function* rootSaga() {
  const socket = yield call(createWebSocketConnection, "http://localhost:4000");
  socket.emit("start");
  const socketChannel = yield call(createSocketChannel, socket);

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
