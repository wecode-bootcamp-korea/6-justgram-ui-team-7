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
Array.from(commentInput).forEach((textInput, index) => {
  //각 피드 인풋태그에 이벤트리스너 추가
  textInput.addEventListener("input", () => {
    //각 인풋태그의 버튼을 순회하면서 값을 가져오고
    //버튼의 각 버튼의 스타일을 활성화에 맞는 스타일을 입힘
    //인풋태그의 값의 길이가 0보다 크다면
    if (textInput.value.length > 0) {
      commentBtn[index].disabled = false;
      commentBtn[index].style.color = "#3eb0fc";
      commentBtn[index].style.border = "0.3px solid lightgray";
      commentBtn[index].style.cursor = "pointer";
    }
    //그렇지 않고 각 인풋태그의 값의 길이가 1보다 작다면
    else if (textInput.value.length < 1) {
      //각 인풋태그의 객체를 순회하면서 비활성화에 맞는 스타일 추가
      commentBtn[index].disabled = true;
      commentBtn[index].style.color = "#b6dffa";
      commentBtn[index].style.border = "none";
      commentBtn[index].style.cursor = "default";
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
  //각 버튼에 클릭이벤트 등록
  button.addEventListener("click", () => {
    //append하기위한 태그들을 만드는 과정
    const createList = document.createElement("li");
    const createNickname = document.createElement("span");
    const createComment = document.createElement("span");
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

//엔터 키로 댓글기능 추가
Array.from(commentInput).forEach((textInput, index) => {
  //각 인풋태그를 순회하며 키업 에빈트 추가
  //각 인풋태그는 매개변수 e가 키업 이벤트를 발생시킨다.
  textInput.addEventListener("keyup", (e) => {
    //append하기위한 태그들을 만드는 과정
    const createList = document.createElement("li");
    const createNickname = document.createElement("span");
    const createComment = document.createElement("span");
    //만약 키업의 인자의 키코드가 엔터라면
    if (e.keyCode == 13) {
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
      commentBtn[index].disabled = true;
      //비활성화가 됐다면 비활성화에 맞는 스타일css 다시 적용
      if (commentBtn[index].disabled == true) {
        commentBtn[index].style.color = "#b6dffa";
        commentBtn[index].style.border = "none";
        commentBtn[index].style.cursor = "default";
      }
    }
  });
});
