const inputId = document.getElementById('input-id');
const inputPw = document.getElementById('input-pw');
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.disabled = true;
let checkinputId = false;
let checkinputPw = false;

function checkId() {
  if (inputId.value !== ' ' || inputId.value.includes('@')) {
    checkinputId = true;
  } else {
    checkinputId = false;
  }
}

function checkPw() {
  if (inputPw.value !== ' ' && inputPw.value.length >= 8) {
    checkinputPw = true;
  } else {
    checkinputPw = false;
  }
}

function changeBtnstate() {
  if (checkinputId === true && checkinputPw === true) {
    loginBtn.style.background = '#039be5';
    loginBtn.disabled = false;
    loginBtn.style.cursor = 'pointer';
  } else {
    loginBtn.style.background = '#bbdefb';
    loginBtn.disabled = true;
    loginBtn.style.cursor = 'not-allowed';
  }
}

function onLoginForm(e) {
  e.preventDefault();
  // 커스텀 로직
}

inputId.addEventListener('keyup', checkId);
inputPw.addEventListener('keyup', checkPw);
inputId.addEventListener('keyup', changeBtnstate);
inputPw.addEventListener('keyup', changeBtnstate);
loginForm, addEventListener('submit', onLoginForm);
