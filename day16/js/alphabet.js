// 대문자 26자를 배열에 저장
// 배열에 26개의 공간을 생성
let alphabet = new Array(26);
let ch = 'a';
ch = ch.charCodeAt(0);
console.log(ch);

// console.log(ch); // A
// console.log(ch.charCodeAt(0)); // 65

for (let i = 0; i < alphabet.length; i++) {
    alphabet[i] = ch;
    ch++;
}

// 출력
for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]));
}