// 아이템 리스트
let itemList = [];

let addBtn = document.getElementById('add');
addBtn.addEventListener('click', addList);

// 아이템 추가 함수
function addList(){
    let item = document.getElementById('item').value; // 아이템 입력

    itemList.push(item); // 아이템 추가
    document.getElementById('item').value = ''; // 아이템 초기화
    document.getElementById('item').focus(); // 커서 위치

    // console.log(itemList);

    showList();
}

// 아이템 목록 조회 함수
function showList(){
    let list = "<ul>"; // 목록 리스트 변수 할당
    for(let i = 0; i < itemList.length; i++){
        list += "<li>" + itemList[i] + "span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";
    document.getElementById("itemList").innerHTML = list;

    // 아이템 삭제 - 'X' 클릭
    let removeList = document.querySelectorAll('.close');

    for(let i = 0; i < removeList.length; i++){
        removeList[i].addEventListener('click', remove);
    }
}