function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const model = document.getElementById("modelSelector").value;

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

  const aiReply = getAIResponse(userMessage, model);
  chatbox.innerHTML += `<p><strong>Gorg ${model}:</strong> ${aiReply}</p>`;

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getAIResponse(msg, model) {
  const lower = msg.toLowerCase();

  if (model === "lite") {
    return lower.includes("hello") ? "Hi there!" : "I'm Gorg Lite. Ask simple questions!";
  }

  if (model === "pro") {
    if (lower.includes("your name")) return "I'm Gorg Pro, your friendly AI assistant.";
    return "Hmm, that's a great question! Let me think...";
  }

  if (model === "expert") {
    return `Analyzing deeply: "${msg}"... Response coming soon.`;
  }

  return "I'm learning more every day!";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
