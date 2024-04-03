const passwordText = document.querySelector("input");
const passwordButton = document.querySelector("button");

passwordButton.addEventListener("click", passwordVisibilityToggle);

function passwordVisibilityToggle() {
  if (passwordText.type === "password") {
    passwordButton.textContent = "Hide Password";
    passwordText.setAttribute("type", "text");
  } else {
    passwordButton.textContent = "Show Password";
    passwordText.setAttribute("type", "password");
  }
}
