const userText = document.getElementById("user_text");
const displayArea = document.querySelector("p");
const btn = document.getElementById("btn");

const updateDisplayArea = (e) => {
    displayArea.innerHTML = userText.value;
}
const openPopup = (e) => {
    alert("Hello, my name is " + displayArea.innerHTML);
}

userText.addEventListener("input", updateDisplayArea);
btn.addEventListener("click", openPopup);