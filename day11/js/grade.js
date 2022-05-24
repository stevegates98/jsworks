// 입력(변수 선언 및 값 저장)
let score = Number(prompt("점수를 입력하세요."));
let examGrade = ""; // 문자형 변수 초기화

// 연산(if 조건문) 및 출력
if(score >= 90 && score <= 100){
    examGrade = "A";
}
else if(score >= 80 && score < 90){
    examGrade = "B";
}
else if(score >= 70 && score < 80){
    examGrade = "C";
}
else if(score >= 60 && score < 70){
    examGrade = "D";
}
else{
    examGrade = "F";
}
document.write("<span class='title'>학점 계산 프로그램</span><br>학점은 <span class='accent'>" + examGrade + "</span>입니다.");