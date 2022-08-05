const commentWriteInput = document.getElementsByClassName(
  "comment-write-input"
);
const commentWriteButton = document.getElementsByClassName(
  "comment-write-button"
);
const commentList = document.getElementsByClassName("feed-comment-list");

fetch("./comments.json")
  .then((res) => res.json())
  .then((data) => {
    let commentArray = data.comments;
    commentArray.forEach((comment) => {
      for (let i = 0; i < commentArray.length; i++) {
        const commentElem = document.createElement("div");
        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-name";
        nameSpan.textContent = comment.userName;

        const content = comment.content;
        commentElem.append(nameSpan, content);
        commentList[i].append(commentElem);
      }
    });
  });

Array.from(commentWriteButton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentWriteInput[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "Sean";

    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});

// commentWriteButton.addEventListener("click", () => {
//   const content = commentWriteInput.value;

//   const childElem = document.createElement("div");

//   const nameSpan = document.createElement("span");
//   nameSpan.className = "comment-name";
//   nameSpan.textContent = "Sean";

//   childElem.append(nameSpan, content);

//   commentList.appendChild(childElem);
// });
