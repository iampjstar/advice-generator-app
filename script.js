const API_URL = "https://api.adviceslip.com/advice";

const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceButton = document.getElementById("advice-button");

async function getAdvice() {
    adviceButton.disabled = true; // Disable the button while fetching advice
    adviceText.textContent = "Loading advice..."; // Show loading message

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        const slip = data.slip;

        adviceId.textContent = slip.id;
        adviceText.textContent = slip.advice;
    } catch (error) {
        console.error("Could not fetch advice:", error);
        adviceText.textContent = "Oops! Could not load advice. Please try again.";
    } finally {
        adviceButton.disabled = false; // Re-enable the button after fetching advice
    }
}

adviceButton.addEventListener("click", getAdvice);

getAdvice(); // Fetch advice on initial load
