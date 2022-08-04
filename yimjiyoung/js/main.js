const writeInput = document.getElementsByClassName('write-comment-input');
const writeBtn = document.getElementsByClassName('write-comment-btn');
const userComments = document.getElementsByClassName('feeds-comments');

// writeBtn.disabled = true;

// 댓글 입력 함수 작성
Array.from(writeBtn).forEach((button, index) => {
  button.addEventListener('click', () => {
    const content = writeInput[index].value;
    const childComment = document.createElement('div');
    const childNickname = document.createElement('span');

    childNickname.className = 'nickname';
    childNickname.textContent = 'roxylife';

    childComment.prepend(childNickname, content);

    userComments[index].prepend(childComment);
    writeInput = '';
    writeBtn.style.color = 'blue';
    writeBtn.disabled = true;
    writeBtn.style.cursor = 'auto';
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
