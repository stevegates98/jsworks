// 자리 배치도
let customNum = 23; // 고객 수
let colNum = 5; // 열 수
let rowNum = 0; // 행(줄) 수

// 입장객 수에 따른 행과 열 계산
// 조건 - 나누어 떨어질 때, 나머지가 있을 때

if(customNum % colNum == 0) {
    rowNum = customNum / colNum;
}
else {
    rowNum = parseInt(customNum / colNum) + 1;
}


document.write(rowNum)