function sendMessage() {
  const inputField = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const model = document.getElementById("modelSelector").value;

  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

  // Simulate AI response
  const aiReply = getAIResponse(userMessage, model);
  chatbox.innerHTML += `<p><strong>${model}:</strong> ${aiReply}</p>`;

  inputField.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getAIResponse(message, model) {
  const msg = message.toLowerCase();

  if (model === "gorg-lite") {
    if (msg.includes("hello")) return "Hey there!";
    return "I'm Gorg Lite. Try asking basic questions.";
  }

  if (model === "gorg-pro") {
    if (msg.includes("who are you")) return "I'm Gorg Pro, an AI chatbot built by you.";
    return `That's an interesting question! Gorg Pro is thinking...`;
  }

  if (model === "gorg-expert") {
    return `Processing like ChatGPT... (You said: "${message}")`;
  }

  return "I’m still learning!";
}
