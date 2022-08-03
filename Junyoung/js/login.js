//html에서 아이디,패스워드 입력칸 버튼요소 가져오기
const loginId = document.getElementsByClassName("login-input")[0];
const loginPw = document.getElementsByClassName("login-input")[1];
const btn = document.getElementsByClassName("login-button")[0];
btn.disabled = true;
//if문으로 id나 pw입력칸에 글자가 하나라도 들어간다면 버튼활성화 및 색상변경
function btnEnable(event) {
  if (loginId.value.length >= 1 && loginPw.value.length >= 1) {
    btn.style.backgroundColor = "#39bad3";
    btn.disabled = false;
    btn.style.cursor = "pointer";
  } else {
    btn.style.backgroundColor = "#a3e5f3";
    btn.disabled = true;
  }
}

loginId.addEventListener("input", btnEnable);
loginPw.addEventListener("input", btnEnable);

btn.addEventListener("mousedown", () => {
  btn.style.backgroundColor = "#a3e5f3";
  // btn.style.border = "0.5px solid lightgray";
});
btn.addEventListener("mouseup", () => {
  btn.style.backgroundColor = "#39bad3";
  // btn.style.border = "none";
});
// btn.addEventListener("mouseover", () => {
//   btn.style.border = "0.5px solid lightgray";
// });
// btn.addEventListener("mouseout", () => {
//   btn.style.border = "none";
// });
