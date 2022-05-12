const password = document.getElementById("password");
const confirmPassword = document.querySelector(
  'input[name="confirm-password"]'
);
const passwordVerify = document.querySelector(".password-verify");
const submitButton = document.getElementById("confirm-password");
const form = document.querySelector("form");

form.addEventListener("submit", passwordAuthentication);
function passwordAuthentication(event) {
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    password.classList.add("password-invalid")
    confirmPassword.classList.add("password-invalid")
    passwordVerify.classList.remove("password-verify-hidden");
  } else if (password.value === confirmPassword.value) {
    password.classList.remove("password-invalid")
    passwordVerify.classList.add("password-verify-hidden");
  }
}
console.log(password.value, confirmPassword.value);
