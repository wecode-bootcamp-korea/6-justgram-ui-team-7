const writeInput = document.getElementsByClassName('write-comment-input'); // 스프레드 문법
const writeBtn = document.getElementsByClassName('write-comment-btn');
const userComments = document.getElementsByClassName('feeds-comments'); //HTMLCollection << Array-like object 동적 객체
const USERID = 'roxylife'; // 댓글 아이디

// writeBtn.disabled = true;

fetch('./data/comments.json')
  .then((res) => res.json())
  .then((data) => {
    // 데이터를 받아서 배열로 다시 할당하기
    let commentArray = data.comments;
    // 배열에 담긴 댓글을 하나하나 반복문 돌기
    commentArray.forEach((comment) => {
      // 먼저 userComments 반복문 돌면서 피드 하나하나에 댓글 하나씩 넣어주기
      for (let i = 0; i < commentArray.length; i++) {
        // 댓글을 넣을 div
        let commentElem = document.createElement('div');
        // 댓글 닉네임을 넣을 li
<<<<<<< HEAD
        const childComment = document.createElement('span');
        childComment.className = 'nickname';
        childComment.textContent = comment.userName;
        // 댓글 내용을 넣어주기
        const content = comment.content;
        commentElem.append(childComment, content); // 
=======
        const nameSpan = document.createElement('span');
        nameSpan.className = 'feed-nickname';
        nameSpan.textContent = comment.userName;
        // 댓글 내용을 넣어주기
        const content = comment.content;
        commentElem.append(nameSpan, content);
>>>>>>> Modify: 순서 정리
        // 피드 하나하나에 댓글 넣기
        userComments[i].append(commentElem); // 
      }
    });
  });

// 댓글 입력 함수 작성
Array.from(writeBtn).forEach((button, i) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const content = writeInput[i].value;
    const commentElem = document.createElement('div');
    const nameSpan = document.createElement('span');
    nameSpan.className = 'feed-nickname';
    nameSpan.textContent = USERID;
    commentElem.append(nameSpan, content);
    userComments[i].appendChild(commentElem);
    writeInput[i].value = '';
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
  });
});
