import io from "socket.io-client";

const socket = io(
  process.env.REACT_APP_SOCKET,
  { path: "/socket.io" },
  { reconnection: true }
);

export default socket;
