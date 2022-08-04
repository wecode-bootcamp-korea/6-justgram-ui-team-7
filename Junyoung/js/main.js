//초기 선언
//댓글창 ul태그 가죠오기
const commentArea = document.getElementsByClassName("comment-ul");
//댓글창 버튼요소 가져오기
const commentBtn = document.getElementsByClassName("comment-btn");
//댓글창 인풋요소 가져오기
const commentInput = document.getElementsByClassName("comment-input");
// 버튼 기본 비활성화
Array.from(commentBtn).forEach((button) => {
  button.disabled = true;
});

// 인풋에 버튼 활성화 비활성화 디자인 추가
Array.from(commentInput).forEach((textInput) => {
  textInput.addEventListener("input", () => {
    if (textInput.value.length > 0) {
      Array.from(commentBtn).forEach((button) => {
        button.disabled = false;
        button.style.color = "#3eb0fc";
        button.style.border = "0.3px solid lightgray";
        button.style.ccursor = "pointer";
      });
    } else if (textInput.value.length < 1) {
      Array.from(commentBtn).forEach((button) => {
        button.disabled = true;
        button.style.color = "#b6dffa";
        button.style.border = "none";
        button.style.cursor = "default";
      });
    }
  });
});

// //버튼 클릭 가시화
// //마우스 클릭하는동안 보더라인 없앰
Array.from(commentBtn).forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.border = "none";
  });
});
// //눌렀던 마우스 땠을때 다시 보더 추가

Array.from(commentBtn).forEach((button) => {
  button.addEventListener("mouseup", () => {
    button.style.border = "0.3px solid lightgray";
  });
});

//클릭시 댓글 추가기능
//버튼요소를 어레이로 변환 후 각 버튼의 값과 인덱스를 가져온다.
Array.from(commentBtn).forEach((button, index) => {
  //append하기위한 태그들을 만드는 과정
  const createList = document.createElement("li");
  const createNickname = document.createElement("span");
  const createComment = document.createElement("span");
  //각 버튼에 클릭이벤트 등록
  button.addEventListener("click", () => {
    //만약 버튼이 활성화 되어있는 상태라면
    if (button.disabled == false) {
      //Junyoung + 공백 이라는 내용을 가진 스팬태그를 만든다
      createNickname.textContent = "Junyoung" + " ";
      //작성한 댓글내용을 가진 스팬태그를 생성한다.
      createComment.textContent = commentInput[index].value;
      //생성한 span태그에 nickname클래스를 추가시킨다
      createNickname.classList.add("nickname");
      //생성한 span태그에 comment-text클래스를 추가한다
      createComment.classList.add("comment-text");
      //생성한 두 스팬태그를 li태그에 자식요소로 추가
      createList.appendChild(createNickname);
      createList.appendChild(createComment);
      //각 ul태그에 li태그 자식요소로 추가
      commentArea[index].appendChild(createList);
      //내용 추가후 텍스트 초기화
      commentInput[index].value = "";
      //버튼도 비활성화
      button.disabled = true;
      //비활성화가 됐다면 비활성화에 맞는 스타일css 다시 적용
      if (button.disabled == true) {
        button.style.color = "#b6dffa";
        button.style.border = "none";
        button.style.cursor = "default";
      }
    }
  });
});

// //클릭시 댓글 추가기능
// commentBtn[0].addEventListener("click", () => {
//   const createList = document.createElement("li");
//   const createNickname = document.createElement("span");
//   const createComment = document.createElement("span");

//   if (commentBtn[0].disabled == false) {
//     createNickname.textContent = "Junyoung" + " ";
//     // 스팬태그 생성후 댓글밸류
//     createComment.textContent = commentInput[0].value;
//     //닉네임에 클래스 추가
//     createNickname.classList.add("nickname");
//     //댓글에 클래스 추가
//     createComment.classList.add("comment-text");
//     // li태그에 자식으로 추가
//     createList.appendChild(createNickname);
//     createList.appendChild(createComment);
//     // ul태그에 자식으로 추가
//     commentArea[0].appendChild(createList);
//     commentInput[0].value = "";
//     commentBtn[0].disabled = true;
//     if (commentBtn[0].disabled == true) {
//       commentBtn[0].style.color = "#b6dffa";
//       commentBtn[0].style.border = "none";
//       commentBtn[0].style.cursor = "default";
//     }
//   }
// });
