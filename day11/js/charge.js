/*
    놀이공원 입장료 계산 프로그램
    구분 - 나이
    취학전 아동 - 1,000원
    초등학생 - 2,000원
    중.고등학생 - 2,500원
    일반인 - 3,000원
*/

// 입력
// var age = prompt("나이를 입력하세요.");
var age = 15;
var charge = 0;

// 연산 및 출력
if(age < 8){
    document.write("미취학 아동입니다.<br>")
    charge = 1000;
}
else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>")
    charge = 2000;
}
else if(age >= 14 && age < 20){
    document.write("중.고등학생입니다.<br>")
    charge = 2500;
}
else{
    document.write("일반인입니다.<br>")
    charge = 3000;
}
document.write("입장료는 <span class='accent'>" + charge + "원입니다.");
