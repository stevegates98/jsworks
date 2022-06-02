// 시험 성적 관리
// 5명의 국어 점수 (한과목인 경우)
// let score = [80, 70, 90, 75, 85];

// 5명의 국어, 수학 성적
let score = [[80, 70], [90, 60], [70, 70], [100, 90], [83, 35]];

let korSum = 0, mathSum = 0;
let korAvg = 0.0, mathAvg = 0.0;

// 과목별 점수 합계
for (let i = 0; i < score.length; i++) {
  korSum += score[i][0];
  mathSum += score[i][1];
}

// 과목별 점수 평균
korAvg = korSum / score.length;
mathAvg = mathSum / score.length;

// 출력
document.write(`국어 점수 합계: ${korSum} <br>`);
document.write(`수학 점수 합계: ${mathSum} <br>`);
document.write(`국어 점수 평균: ${korAvg} <br>`);
document.write(`수학 점수 평균: ${mathAvg} <br>`);