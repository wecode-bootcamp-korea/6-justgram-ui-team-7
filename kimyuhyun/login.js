const inputId = document.getElementById("inputUsername");
const inputPw = document.getElementById("inputPassword");
const buttonGet = document.getElementById("btn");

function excute() {
  const id = inputId.value;
  const pw = inputPw.value;

  if (id.length > 1 && pw.length > 1) {
    buttonGet.style.backgroundColor = "#4ec5f4";
    console.log("버튼 활성");
  } else {
    buttonGet.style.backgroundColor = "#cde9f4";
    console.log("버튼 비활성");
  }
}

inputId.addEventListener("input", excute);

inputPw.addEventListener("input", excute);

buttonGet.addEventListener("submit", (event) => {
  event.preventDefault;
});

// ? disable 사용 코드 수정 후 상기 logic 구현할 것!
// let input1 = document.getElementsByClassName("inputUsername");
// let input2 = document.getElementsByClassName("inputPassword");
// let button = document.getElementsByClassName("btn");

// console.log(button);
// console.log(input1);
// console.log(input2);

// addEventListener("keyup", excute);

// function excute() {
//   if (input1 !== null && input2 !== null) {
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//   }
// }
