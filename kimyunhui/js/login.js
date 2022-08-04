let idInput = document.getElementById('idInput');
let pwInput = document.getElementById('pwInput');
let loginButton = document.getElementById('loginButton');

idInput.addEventListener('keyup', check);
pwInput.addEventListener('keyup', check);


function check(){
    if (idInput.value || pwInput.value) {
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "rgb(79, 167, 255)";
        loginButton.style.cursor = "pointer";
      } else {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "rgb(186, 220, 255)";
        loginButton.style.cursor = "not-allowed";
      }

}

/*
//기명함수
function onInput(event){
    console.log(event);
    const id = idInput.value;
    const pw = pwInput.value;

    if(id.length>1 && pw.length>1 ){
    //버튼 활성화 로직
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "rgb(79, 167, 255)";
    }else{
    //버튼 비활성화 로직
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "rgb(186, 220, 255)";
    }
}

//함수가 재사용되지 않아서 익명함수(아래 함수를 쓰면 재사용이 불가능하기 때문에 위에 기명 함수로 만들어준다)
idInput.addEventListener('input', onInput);//감지할 요소에 이벤트
pwInput.addEventListener('input', onInput);//감지할 요소에 이벤트

loginButton.addEventListener("submit", (event)=>{
//로그인 버튼 클릭시
    event.preventDefault(); // 해당 기능을 꺼버리고
    //커스텀 로직
    
});
*/