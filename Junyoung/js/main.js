//초기 임시 선언

const commentBtn = document.getElementsByClassName("comment-btn")[0];
const commentInput = document.getElementsByClassName("comment-input")[0];

commentBtn.disabled = true;

commentInput.addEventListener("input", () => {
  if (commentInput.value.length > 0) {
    commentBtn.disabled = false;
    commentBtn.style.color = "#3eb0fc";
    commentBtn.style.border = "0.3px solid lightgray";
    commentBtn.style.cursor = "pointer";
  } else if (commentInput.value.length < 1) {
    commentBtn.disabled = true;
    commentBtn.style.color = "#b6dffa";
    commentBtn.style.border = "none";
    commentBtn.style.cursor = "default";
  }
});

commentBtn.addEventListener("mousedown", () => {
  commentBtn.style.border = "none";
});

commentBtn.addEventListener("mouseup", () => {
  commentBtn.style.border = "0.3px solid lightgray";
});

commentBtn.addEventListener("click", () => {
  const commentArea = document.getElementsByClassName("comment-ul")[0];
  const createList = document.createElement("li");
  const createNickname = document.createElement("span");
  const createComment = document.createElement("span");

  if (commentBtn.disabled == false) {
    createNickname.innerHTML = "Junyoung" + " ";
    // 스팬태그 생성후 댓글밸류
    createComment.innerHTML = commentInput.value;
    //닉네임에 클래스 추가
    createNickname.classList.add("nickname");
    //댓글에 클래스 추가
    createComment.classList.add("comment-text");
    // li태그에 자식으로 추가
    createList.appendChild(createNickname);
    createList.appendChild(createComment);
    // ul태그에 자식으로 추가
    commentArea.appendChild(createList);
    commentInput.value = "";
    commentBtn.disabled = true;
    if (commentBtn.disabled == true) {
      commentBtn.style.color = "#b6dffa";
      commentBtn.style.border = "none";
      commentBtn.style.cursor = "default";
    }
  }
});
