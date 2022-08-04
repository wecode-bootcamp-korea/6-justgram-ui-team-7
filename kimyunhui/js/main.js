const commentAppendP = document.getElementsByClassName('commentAppendP');
const addButton = document.getElementsByClassName('add-button');
const commentAppend = document.getElementsByClassName('commentAppend');
//class는 순번을 정확히 해주기 ex. document.getElementsByClassName('commentAppendP')[0], [1], ...

// 게시 버튼 클릭시
Array.from(addButton).forEach((button, index) => {
    button.addEventListener("click", ()=>{
        const content = commentAppendP[index].value;
        console.log(content);
        if(content && content!= null){
            let new_li = document.createElement('li');
            new_li.innerHTML ="<span style='font-weight: 700;'>profile_id33</span>" + content;
            commentAppend[index].append(new_li);
            // input 비워주기
            commentAppendP[index].value = "";
        }
    });
});

// 엔터버튼 클릭시
Array.from(commentAppendP).forEach((input, index) => {
    input.addEventListener("keypress", (key)=>{ // (key)를 매개변수로 받아옴
        if((key.key == 'Enter'||key.keyCode == 13)){
            const content = commentAppendP[index].value;
            console.log(content);
            if(content && content!= null){
                let new_li = document.createElement('li');
                new_li.innerHTML ="<span style='font-weight: 700;'>profile_id33</span>" + content;
                commentAppend[index].append(new_li);
                // input 비워주기
                commentAppendP[index].value = "";
            }
        }
    });
});




// 게시글 하나만 있을때
// addButton.addEventListener("click", ()=>{
//     const content = commentAppendP.value;

//     if(content && content!= null){
//         let new_li = document.createElement('li');
//         new_li.innerHTML ="<span style='font-weight: 700;'>profile_id33</span>" + content;
//         commentAppend.append(new_li);
        
//         commentAppendP.value = "";
//     }
// });