// 내장 함수
// 인코딩, 디코딩 함수
// 인코딩은 한글을 16진수 유니코드로 변환하는 함수
var encodeStr = "자바스크립트";
// 한글은 에러가 발생할 수 있으므로 코드화함
console.log(encodeURIComponent(encodeStr));

// 디코딩은 16진수 유니코드를 한글로 변환하는 함수
var decodeStr = encodeURIComponent(encodeStr);
console.log(decodeURIComponent(decodeStr));

// 숫자, 유한 무한 값 판별
// NaN(Not a Number)
var num1 = "숫자";
if(!isNaN(num1)) { // !true - false
    console.log("숫자");
}else {
    console.log("숫자 아님");
}

// 자바스크립트 코드 변경 함수
let str1 = "var num7 = 10";
let str2 = "var num8 = 20";

// 자바스크립트 코드로 변경
eval(str1); // var num7 = 10
eval(str2); // var num8 = 20
console.log(num7 + num8); // 30

console.log(eval("2*30")); // 60
console.log(eval("2/30")); // 0.06
