// number
window.onload = function() {
    let num1 = 10;
    let num2 = 10.2;
    let num3 = 1e+2; // 10의 제곱

    console.log(num1 + "," + num2 + "," + num3);

    let str1 = "문자";
    let str2 = "문자는 '문자'";
    let str3 = '문자는 "문자"';
    let str4 = 'you\'re too smart...';
    // document.write(str1 + "," + str2 + "," + str3 + "," + str4);

    // boolean
    let com1 = ( 5 > 4);
    let com2 = ( 5 < 4);
    // storage = "A";
    console.log(com1 + ", " + com2);

    let storage;
    console.log(storage);

    // null
    let gnb = document.getElementById('gnb');
    gnb.style.background = '#fff';
    console.log(gnb);
    // document.write(gnb);

    // type of
    let type1 = 10;
    let type2 = '문자';
    let type3 = true;
    console.log(typeof type1 + ", " + typeof type2 + ", " + typeof type3);
};