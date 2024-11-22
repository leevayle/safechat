const ws = new WebSocket("ws://127.0.0.1:7758");

const textMessage = document.getElementById('text-message');
const submitButton = document.getElementById('submit-message');

submitButton.addEventListener("click", () => {
  const userMessage = textMessage.value;
  const timestamp = new Date().toISOString();
  const from = "+254748673538"; 
  const to = "+254111774067"; 
  const username = "lee"; 

  const messageData = {
    from,
    to,
    username,
    message: userMessage,
    timestamp,
  };

  ws.send(JSON.stringify(messageData));
  textMessage.value = '';
});