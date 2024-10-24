document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  const chatPopup = document.getElementById("chat-popup");
  const chatToggleBtn = document.getElementById("chat-toggle-btn");

  // Toggle popup visibility
  chatToggleBtn.addEventListener("click", () => {
    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
      chatPopup.style.display = "flex";
    } else {
      chatPopup.style.display = "none";
    }
  });

  const fetchAIResponse = async (message) => {
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: message })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const aiMessage = data[0]?.generated_text || "No response from AI.";
      addMessageToChat("ai-message", aiMessage);
    } catch (error) {
      addMessageToChat("ai-message", `An error occurred: ${error.message}`);
    }
  };

  const addMessageToChat = (className, message) => {
    const messageElement = document.createElement("div");
    const timestamp = new Date().toLocaleTimeString();

    messageElement.classList.add("message", className);
    messageElement.innerHTML = `${message} <span class="message-time">${timestamp}</span>`;
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  const sendMessage = () => {
    const message = userInput.value.trim();
    if (message) {
      addMessageToChat("user-message", message);
      fetchAIResponse(message);
      userInput.value = "";
    }
  };

  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendMessage();
      event.preventDefault();
    }
  });
});
