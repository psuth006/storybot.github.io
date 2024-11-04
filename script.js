// Function to add message to the chat
function addMessage(message, sender) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender; // Assign class based on sender
    messageDiv.innerText = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

// Function to generate a story based on keywords
function generateStory(keywords) {
    const storyTemplates = [
        `Once upon a time in a world filled with ${keywords[0]}, there lived a ${keywords[1]} who loved ${keywords[2]}. Together, they went on an adventure to discover the secrets of ${keywords[3]}.`,
        `In a faraway land where ${keywords[0]} was abundant, a ${keywords[1]} named Bob decided to ${keywords[2]} with a magical ${keywords[3]}. They faced many challenges along the way!`,
        `The ${keywords[1]} had a dream to ${keywords[2]} among the ${keywords[0]} in ${keywords[3]}. Little did they know, a great journey awaited them!`,
        `On a stormy night, a ${keywords[1]} found a ${keywords[2]} in the middle of the ${keywords[0]}. It was then they realized that ${keywords[3]} would change their life forever.`,
        `In the heart of ${keywords[3]}, a ${keywords[1]} searched for ${keywords[0]} while dreaming of ${keywords[2]}. What adventures awaited them?`
    ];

    // Pick a random story template
    return storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
}

// Event listener for sending messages
document.getElementById('sendButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addMessage(userMessage, 'user');
        userInput.value = ''; // Clear input field

        // Split the user message into keywords
        const keywords = userMessage.split(',').map(keyword => keyword.trim()).filter(Boolean);
        
        if (keywords.length >= 4) {
            const story = generateStory(keywords);
            addMessage(story, 'bot');
        } else {
            addMessage("Please enter at least four keywords separated by commas.", 'bot');
        }
    }
});

// Optional: Allow sending message by pressing 'Enter'
document.getElementById('userInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});
