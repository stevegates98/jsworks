// 자리 배치도
let customNum = parseInt(prompt("입장객은 몇 명인가요?")); // 고객 수
let colNum = parseInt(prompt("한 줄에 몇 명 앉나요?")); // 열 수
let rowNum = 0; // 행(줄) 수

// 입장객 수에 따른 행과 열 계산
// 조건 - 나누어 떨어질 때, 나머지가 있을 때
if(customNum % colNum == 0) {
    rowNum = customNum / colNum;
}
else {
    rowNum = parseInt(customNum / colNum) + 1;
}

// document.write(rowNum)
for(let i = 0; i < rowNum; i++){
    for(let j = 1; j <= colNum; j++){
        let seatNum = i * colNum + j;
        if(seatNum > customNum) break;
        document.write("좌석" + seatNum + " ");
    }
    document.write("<br>");
}