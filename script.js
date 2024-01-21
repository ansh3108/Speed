let originalText, startTime, endTime, timerInterval;

function startTest() {
    originalText = generateRandomText();
    document.getElementById("quote").innerHTML = originalText;
    document.getElementById("quote").classList.remove("glowing");
    document.getElementById("result").innerHTML = "";
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").focus();
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
    document.getElementById("result").innerHTML = `Time: ${elapsedTime} seconds`;
}

function updateWPM() {
    const userInput = document.getElementById("inputText").value;
    const userWords = userInput.trim().split(/\s+/).length;
    const timeElapsedInMinutes = (new Date().getTime() - startTime) / (1000 * 60);
    const wordsPerMinute = Math.round(userWords / timeElapsedInMinutes);
    document.getElementById("result").innerHTML = `Speed: ${wordsPerMinute} WPM`;

    // Highlight typed words with a glowing effect
    highlightTypedWords(userInput);
}

function highlightTypedWords(userInput) {
    const words = originalText.split(/\s+/);
    const typedWords = userInput.trim().split(/\s+/);
    let highlightedText = '';

    for (let i = 0; i < words.length; i++) {
        if (typedWords[i] === words[i]) {
            highlightedText += `<span>${words[i]}</span> `;
        } else {
            highlightedText += `<span class="glowing">${typedWords[i] || ''}</span> `;
        }
    }

    document.getElementById("quote").innerHTML = highlightedText.trim();
}

function generateRandomText() {
    const texts = [
        "The quick brown fox jumps over the lazy dog.",
        "To be or not to be, that is the question.",
        "All that glitters is not gold.",
        "In the beginning God created the heavens and the earth.",
        "The only thing we have to fear is fear itself.",
        "A journey of a thousand miles begins with a single step."
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}
