// setTimeout( ()=>{
//     document.getElementById('body').style.background = "white";
// },900);

const ws = new WebSocket("ws://127.0.0.1:7758");

const textMessage = document.getElementById('text-message');
const submitButton = document.getElementById('submit-message');

submitButton.addEventListener("click", () => {
  const userMessage = textMessage.value;
  ws.send(userMessage);
  textMessage.value = ''; // Clear the input field
});

