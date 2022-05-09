const password = document.getElementById("password");
const confirmPassword = document.querySelector(
  'input[name="confirm-password"]'
);
const submitButton = document.getElementById("confirm-password");
const form = document.querySelector("form");

form.addEventListener("submit", passwordAuthentication);
function passwordAuthentication(event) {
  if (password.value !== confirmPassword.value || password.value && confirmPassword.value === "") {
    event.preventDefault();
    password.classList.add("password-invalid");
    confirmPassword.classList.add("password-invalid");
    
  } else if (password.value === confirmPassword.value) {
    password.classList.remove("password-invalid");
    confirmPassword.classList.remove("password-invalid");
  }
}
console.log(password.value, confirmPassword.value);


