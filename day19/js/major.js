// select 태그 이름에 폼 이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){
    // select option 속성의 인덱스로 선택
    // let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    // alert(selectedText + "선택되었습니다.");

    //id 선택자로 처리
    let selectedText = document.getElementById("subj").value;
    alert(selectedText + "가 선택되었습니다.");
}