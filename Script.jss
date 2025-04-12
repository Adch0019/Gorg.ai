async function sendMessage() {
      const input = document.getElementById("userInput");
        const chatBox = document.getElementById("chatBox");
          const userText = input.value;
            input.value = "";

              chatBox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

                const response = await fetch("https://api.openai.com/v1/completions", {
                        method: "POST",
                            headers: {
                                      "Content-Type": "application/json",
                                            "Authorization": "Bearer YOUR_API_KEY"
                            },
                                body: JSON.stringify({
                                          model: "text-davinci-003",
                                                prompt: userText,
                                                      max_tokens: 100
                                })
                });

                  const data = await response.json();
                    const aiText = data.choices?.[0]?.text?.trim() || "No response";

                      chatBox.innerHTML += `<div><b>Gorg AI:</b> ${aiText}</div>`;
                        chatBox.scrollTop = chatBox.scrollHeight;
}

                                })
                            }
                })
}