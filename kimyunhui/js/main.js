let commentAppendP = document.getElementsByClassName('commentAppendP')[0];
let commentAppend = document.getElementsByClassName('commentAppend')[0];
//class는 순번을 정확히 해주기 ex. document.getElementsByClassName('commentAppendP')[0], [1], ...

commentAppendP.addEventListener('keypress', function(key){
    if((key.key == 'Enter'||key.keyCode == 13)){
        check();
    }

})

function enterkeyA(){
    check();
}

function check(key){
        if(commentAppendP.value && commentAppendP.value!= null){
            let inputValue = commentAppendP.value;
            console.log(inputValue);
            let new_li = document.createElement('li');
            new_li.innerHTML ="<span style='font-weight: 700;'>profile_id33</span>" + inputValue;
            commentAppend.append(new_li);

            commentAppendP.value = "";
        }
}