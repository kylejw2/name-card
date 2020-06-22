const userText = document.getElementById("user_text");
const displayArea = document.querySelector("p");

const updateDisplayArea = (e) => {
    displayArea.innerHTML = userText.value;
}

userText.addEventListener("input", updateDisplayArea);