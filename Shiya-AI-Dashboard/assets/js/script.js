document.addEventListener("DOMContentLoaded", () => {
    // Chat Popup Toggle
    const chatPopup = document.getElementById("chat-popup");
    const chatToggleBtn = document.getElementById("chat-toggle-btn");
    const chatCloseBtn = document.getElementById("chat-close-btn");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Initially hide chat popup
    chatPopup.style.display = "none";

    // Toggle chat popup on button click
    chatToggleBtn.addEventListener("click", () => {
        chatPopup.style.display = chatPopup.style.display === "none" ? "flex" : "none";
    });

    // Close chat popup
    chatCloseBtn.addEventListener("click", () => {
        chatPopup.style.display = "none";
    });

    // Function to add message to chatbox
    const addMessageToChat = (message, isUser = true) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add(isUser ? "user-message" : "ai-message");
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    };

    // Send message to AI (mock functionality)
    const sendMessageToAI = async (message) => {
        // Display user's message
        addMessageToChat(message, true);
        userInput.value = ""; // Clear input

        // Simulate AI response (replace with actual API call)
        setTimeout(() => {
            const aiMessage = "This is Shiya AI responding to: " + message;
            addMessageToChat(aiMessage, false);
        }, 1000);
    };

    // Handle send button click
    sendBtn.addEventListener("click", () => {
        const message = userInput.value.trim();
        if (message) {
            sendMessageToAI(message);
        }
    });

    // Handle pressing Enter to send message
    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const message = userInput.value.trim();
            if (message) {
                sendMessageToAI(message);
            }
        }
    });

    // Slider (if needed for future sections)
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");

    // Show slide based on index
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    };

    // Show initial slide
    if (slides.length > 0) {
        showSlide(slideIndex);
    }

    // Next slide
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        });
    }

    // Previous slide
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            showSlide(slideIndex);
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.innerText = document.body.classList.contains("dark-mode") ? "Disable Dark Mode" : "Enable Dark Mode";
    });

});
