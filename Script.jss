window.onload = () => {
  document.getElementById("loading").style.display = "none";
};

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    document.getElementById("user-name").innerText = `Hello, ${name}!`;
  }
}

function fillSuggestion(text) {
  document.getElementById("input").value = text;
  document.getElementById("input").focus();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleVoice() {
  alert("Voice input coming soon!");
}

function uploadVoice() {
  alert("Voice upload feature under development!");
}

document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value;
  if (!input.trim()) return;
  addMessage("user", input);

  const reply = await getGorgReply(input);
  typeReply(reply);
  document.getElementById("input").value = "";
});

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender;
  msgDiv.textContent = `${sender === 'user' ? 'You' : 'Gorg'}: ${text}`;
  document.getElementById("chat").appendChild(msgDiv);
  document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}

function typeReply(text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "bot";
  document.getElementById("chat").appendChild(msgDiv);

  let index = 0;
  const typing = setInterval(() => {
    msgDiv.textContent += text.charAt(index++);
    if (index >= text.length) clearInterval(typing);
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
  }, 30);
}

async function getGorgReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello")) return "Hey there! I’m Gorg AI.";
  if (msg.includes("what is gorg")) return "Gorg AI is your custom chatbot assistant.";
  if (msg.includes("how are you")) return "I’m great, thanks for asking!";
  if (msg.includes("who made you")) return "I was built with love using HTML, CSS, and JavaScript!";
  return "I’m still learning. Try something else!";
}
