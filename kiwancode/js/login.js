// Enable/Disable button
const loginContent = document.getElementsByClassName("login-input");

let id = loginContent[0];
let pw = loginContent[1];
let btn = loginContent[2];

document.addEventListener("keyup", function () {
  if (id.value.length > 0 && pw.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
