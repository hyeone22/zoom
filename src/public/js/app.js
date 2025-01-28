const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected Server✅");
});

socket.addEventListener("message", (message) => {
  console.log("New message :", message.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected Server❌");
});

setTimeout(() => {
  socket.send("hello from Browser");
}, 10000);
