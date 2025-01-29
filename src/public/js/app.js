const socket = io();

const welcome = document.getElementById("Welcome");
const form = welcome.querySelector("form");

function backendDone(msg) {
  console.log(`The Backend said :`, msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  socket.emit("enter_room", input.value, backendDone);
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
