// FAQ Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const body = header.nextElementSibling;

        // Toggle Active Class
        item.classList.toggle('active');

        // Smooth Height Animation
        if (item.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = 0;
        }
    });
});

// Chat Widget Logic
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messagesContainer = document.getElementById('chat-messages');

// Open/Close Chat
if (chatToggle) {
    chatToggle.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
}
if (closeChat) {
    closeChat.addEventListener('click', () => chatWindow.classList.add('hidden'));
}

// Send Message
if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
}
if (userInput) {
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    // Add User Message
    addMessage(text, 'user');
    userInput.value = '';

    // Show Loading Dots
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-dots';
    loadingDiv.classList.add('message', 'bot');
    loadingDiv.innerText = '...';
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate Network Delay then get response
    setTimeout(async () => {
        // Remove loading
        const loading = document.getElementById('loading-dots');
        if(loading) loading.remove();

        const botReply = await getBotResponse(text);
        addMessage(botReply, 'bot');
    }, 800);
}

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.innerHTML = `<p>${text}</p>`;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// BOT RESPONSE LOGIC
async function getBotResponse(input) {
    // --- MODE A: STATIC SITE (Current) ---
    // If you are just hosting HTML, use this logic:
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        return "Our custom setups range from $500 (Basic) to $3000+ (Enterprise). Would you like a quote?";
    } else if (lowerInput.includes('home assistant') || lowerInput.includes('automation')) {
        return "We specialize in Home Assistant! We can set up local voice control that doesn't send your audio to the cloud.";
    } else if (lowerInput.includes('privacy') || lowerInput.includes('private')) {
        return "Your privacy is our #1 priority. We disable external internet access for the models by default.";
    } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
        return "You can use the form on this page or email us directly at hello@theailabs.net.";
    } else {
        return "That's a great question about Local AI. To get a specific technical answer, please use the contact form to reach Surya directly.";
    }

    // --- MODE B: BACKEND SERVER (Future) ---
    // If you run the Node.js server, use this logic instead:
    /*
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input })
        });
        const data = await response.json();
        return data.reply;
    } catch (error) {
        return "Error connecting to The AI Labs server.";
    }
    */
}