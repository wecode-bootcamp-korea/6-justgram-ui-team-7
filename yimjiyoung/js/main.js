const writeInput = document.getElementsByClassName('write-comment-input'); // 스프레드 문법
const writeBtn = document.getElementsByClassName('write-comment-btn');
const userComments = document.getElementsByClassName('feeds-comments'); //HTMLCollection << Array-like object 동적 객체
const USERID = 'roxylife'; // 댓글 아이디

// writeBtn.disabled = true;

// 댓글 입력 함수 작성
Array.from(writeBtn).forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const content = writeInput[index].value;
    const childComment = document.createElement('div');
    childComment.className = 'user-comment';
    childComment.innerHTML = `<span class="nickname">${USERID}</span> <span>${content}</span>`;

    userComments[index].appendChild(childComment);
    writeInput[index].value = '';
  });
});

Array.from(writeInput).forEach((el, index) => {
  el.addEventListener('input', () => {
    if (writeInput[index].value) {
      writeBtn[index].style.color = 'blue';
      writeBtn[index].removeAttribute('disabled');
      console.log('value here');
    } else {
      writeBtn[index].style.color = '#6cc1d9;'; // Error
      writeBtn[index].disabled = true;
      console.log('empty');
    }
    // writeBtn[index].style.cursor = 'auto';
  });
});

// 입력칸 Enter 이벤트 등록
// function onEnterKey(e) {
//   if (writeInput.value !== '' && e.keyCode == 13) {
//     writeComment();
//   }
// }

// 게시 버튼 클릭 이벤트 등록
// function onActiveBtn() {
//   if (writeInput.value !== '') {
//     writeBtn.disabled = false;
//     writeBtn.style.cursor = 'pointer';
//   } else {
//     writeBtn.disabled = true;
//     writeBtn.style.cursor = 'pointer';
//   }
// }

// writeInput.addEventListener('keydown', onEnterKey);
// writeInput.addEventListener('keydown', onActiveBtn);
