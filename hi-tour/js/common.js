
var isOver1 = false; // isOver1를 true로 바꿔주면 자동으로 숨겨진 메뉴가 나타나게 하기
var isOver2 = false; // isOver2를 true로 바꿔주면 자동으로 숨겨진 메뉴가 나타나게 하기
function goHide1() { 
	if (!isOver1 && !isOver2) { // isOver1이 false이고 isOver2가 false일 때
		$('.gnb_depth2_1').stop().fadeOut('fast'); // gnb_depth2_1을 숨기기
	}
}
var isOver11 = false; // isOver11를 true로 바꿔주면 자동으로 숨겨진 메뉴가 나타나게 하기
var isOver22 = false; // isOver22를 true로 바꿔주면 자동으로 숨겨진 메뉴가 나타나게 하기
function goHide2() {
	if (!isOver11 && !isOver22)	{ // isOver11이 false이고 isOver22가 false일 때
		$('.gnb_depth2_2').stop().fadeOut('fast'); // gnb_depth2_2을 숨기기
	}
}
var isOver111 = false;
var isOver222 = false;
function goHide3() {
	if (!isOver111 && !isOver222) { // isOver111이 false이고 isOver222가 false일 때
		$('.gnb_depth2_3').stop().fadeOut('fast'); // gnb_depth2_3을 숨기기
	}
}
var isOver1111 = false;
var isOver2222 = false;
function goHide4() {
	if (!isOver1111 && !isOver2222) { // isOver1111이 false이고 isOver2222가 false일 때
		$('.gnb_depth2_4').stop().fadeOut('fast'); // gnb_depth2_4을 숨기기
	}
}
var isOver11111 = false;
var isOver22222 = false;
function goHide5() {
	if (!isOver11111 && !isOver22222) {	// isOver11111이 false이고 isOver22222가 false일 때
		$('.gnb_depth2_5').stop().fadeOut('fast'); // gnb_depth2_5을 숨기기
	}
}

$(document).ready( function() {
	$('a.s_point').smoothScroll(); // smoothScroll을 사용하기 위해서는 아래에 있는 코드를 추가해야 함

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide'); // 스크롤이 50px 이하일 때 클래스 hide를 추가하기
	else $('.to_top').removeClass('hide'); // 스크롤이 50px 이상일 때 클래스 hide를 제거하기
	$(window).scroll( function() { // 스크롤이 발생할 때마다 아래에 있는 코드를 실행하기
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide'); // 스크롤이 50px 이하일 때 클래스 hide를 추가하기
	  else $('.to_top').removeClass('hide'); // 스크롤이 50px 이상일 때 클래스 hide를 제거하기
	});

	//gnb_depth2_1	
	$('.openAll1').mouseover(function(){ // openAll1을 마우스로 오버할 때
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_1').fadeIn('fast'); // header의 width가 800px 이상일 때 gnb_depth2_1을 보이게 하기
		isOver1 = true; // isOver1을 true로 바꿔준다
	});	
    $('.openAll1').focus(function(){ // openAll1을 포커스로 오버할 때
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_1').fadeIn('fast'); // header의 width가 800px 이상일 때 gnb_depth2_1을 보이게 하기
		isOver1 = true; // isOver1을 true로 바꿔준다
	});
	$('.openAll1').mouseout(function(){ // openAll1을 마우스로 아웃할 때
		isOver1 = false; // isOver1을 false로 바꿔준다
		setTimeout("goHide1()",200); // 0.2초 후에 goHide1을 실행하기
	});	
	$('.gnb_depth2_1 li:last-child a').blur(function(){ // gnb_depth2_1의 마지막 a를 포커스를 잃었을 때
		isOver1 = false; // isOver1을 false로 바꿔준다
		setTimeout("goHide1()",200); // 0.2초 후에 goHide1을 실행하기
	});	
	$('.gnb_depth2_1').mouseover(function(){ // gnb_depth2_1을 마우스로 오버할 때
		isOver2 = true;			 // isOver2를 true로 바꿔준다
	});	
	$('.gnb_depth2_1').focus(function(){ // gnb_depth2_1을 포커스로 오버할 때
		isOver2 = true;			 // isOver2를 true로 바꿔준다
	});	
	$('.gnb_depth2_1').mouseout(function(){ // gnb_depth2_1을 마우스로 아웃할 때
		isOver2 = false; // isOver2를 false로 바꿔준다
		setTimeout("goHide1()",200); // 0.2초 후에 goHide1을 실행하기
	});	
	$('.gnb_depth2_1').blur(function(){	// gnb_depth2_1을 포커스를 잃었을 때
		isOver2 = false; // isOver2를 false로 바꿔준다
		setTimeout("goHide1()",200); // 0.2초 후에 goHide1을 실행하기
	});	
	//gnb_depth2_2	
	$('.openAll2').mouseover(function(){ // openAll2를 마우스로 오버할 때
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_2').fadeIn('fast'); // header의 width가 800px 이상일 때 gnb_depth2_2를 보이게 하기
		isOver11 = true; // isOver11을 true로 바꿔준다
	});
	$('.openAll2').focus(function(){ // openAll2를 포커스로 오버할 때
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_2').fadeIn('fast'); // header의 width가 800px 이상일 때 gnb_depth2_2를 보이게 하기
		isOver11 = true; // isOver11을 true로 바꿔준다
	});
	$('.openAll2').mouseout(function(){ // openAll2를 마우스로 아웃할 때
		isOver11 = false; // isOver11을 false로 바꿔준다
		setTimeout("goHide2()",200); // 0.2초 후에 goHide2를 실행하기
	});	
	$('.gnb_depth2_2 li:last-child a').blur(function(){ // gnb_depth2_2의 마지막 a를 포커스를 잃었을 때
		isOver11 = false; // isOver11을 false로 바꿔준다
		setTimeout("goHide2()",200); // 0.2초 후에 goHide2를 실행하기
	});	
	$('.gnb_depth2_2').mouseover(function(){ // gnb_depth2_2을 마우스로 오버할 때
		isOver22 = true;			 // isOver22를 true로 바꿔준다
	});	
	$('.gnb_depth2_2').focus(function(){ // gnb_depth2_2을 포커스로 오버할 때
		isOver22 = true;			 // isOver22를 true로 바꿔준다
	});	
	$('.gnb_depth2_2').mouseout(function(){ // gnb_depth2_2을 마우스로 아웃할 때
		isOver22 = false; // isOver22를 false로 바꿔준다
		setTimeout("goHide2()",200); // 0.2초 후에 goHide2를 실행하기
	});	
	$('.gnb_depth2_2').blur(function(){  // gnb_depth2_2을 포커스를 잃었을 때
		isOver22 = false; // isOver22를 false로 바꿔준다
		setTimeout("goHide2()",200); // 0.2초 후에 goHide2를 실행하기
	});	
	//gnb_depth2_3	
	$('.openAll3').mouseover(function(){ 	// openAll3를 마우스로 오버할 때
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_3').fadeIn('fast'); // header의 width가 800px 이상일 때 gnb_depth2_3를 보이게 하기
		isOver111 = true; // isOver111을 true로 바꿔준다
	});
	$('.openAll3').focus(function(){ // openAll3를 포커스로 오버할 때
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_3').fadeIn('fast'); // header의 width가 800px 이상일 때 gnb_depth2_3를 보이게 하기
		isOver111 = true; // isOver111을 true로 바꿔준다
	});
	$('.openAll3').mouseout(function(){ // openAll3를 마우스로 아웃할 때
		isOver111 = false; // isOver111을 false로 바꿔준다
		setTimeout("goHide3()",200); // 0.2초 후에 goHide3을 실행하기
	});	
	$('.gnb_depth2_3 li:last-child a').blur(function(){
		isOver111 = false;
		setTimeout("goHide3()",200);
	});	
	$('.gnb_depth2_3').mouseover(function(){
		isOver222 = true;			
	});	
	$('.gnb_depth2_3').focus(function(){
		isOver222 = true;			
	});	
	$('.gnb_depth2_3').mouseout(function(){
		isOver222 = false;
		setTimeout("goHide3()",200);
	});	
	$('.gnb_depth2_3').blur(function(){
		isOver222 = false;
		setTimeout("goHide3()",200);
	});	
	//gnb_depth2_4	
	$('.openAll4').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_4').fadeIn('fast');
		isOver1111 = true;
	});
	$('.openAll4').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_4').fadeIn('fast');
		isOver1111 = true;
	});
	$('.openAll4').mouseout(function(){
		isOver1111 = false;
		setTimeout("goHide4()",200);
	});	
	$('.gnb_depth2_4 li:last-child a').blur(function(){
		isOver1111 = false;
		setTimeout("goHide4()",200);
	});	
	$('.gnb_depth2_4').mouseover(function(){
		isOver2222 = true;			
	});	
	$('.gnb_depth2_4').focus(function(){
		isOver2222 = true;			
	});	
	$('.gnb_depth2_4').mouseout(function(){
		isOver2222 = false;
		setTimeout("goHide4()",200);
	});	
	$('.gnb_depth2_4').blur(function(){
		isOver2222 = false;
		setTimeout("goHide4()",200);
	});	
    
	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){ // openMOgnb를 클릭할 때
		$('header').addClass('on'); // header에 on을 추가한다
		$('header .header_cont').slideDown('fast'); // header_cont를 빠르게 슬라이드 내리기
		$('header .header_area .header_cont .closePop').show();			 // header_area의 header_cont의 closePop을 보이게 한다
		$("body").bind('touchmove', function(e){e.preventDefault()}); // body에 touchmove를 바인딩한다
	});
	$('header .header_cont .closePop').click(function(){ // closePop을 클릭할 때
        $('.header_cont').slideUp('fast'); // header_cont를 빠르게 슬라이드 올리기
        $('header').removeClass('on'); // header에 on을 제거한다
        $("body").unbind('touchmove'); // body에 touchmove를 언바인딩한다
	});
	
});


$(document).ready(function(){ // 문서가 준비되면 실행
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() { // window의 resize를 실행할 때
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show(); // header의 width가 800px 이상일 때 header_cont를 보이게 하기
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){ // btn_more을 클릭할 때
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') { // subtxt의 display가 none일 때
			$(this).parent().parent().find('.subtxt').css('display','inline'); // subtxt의 display를 inline으로 변경한다
			$(this).text('접기'); // text를 접기로 변경한다
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none'); // subtxt의 display를 none으로 변경한다
			$(this).text('더보기'); // text를 더보기로 변경한다
		}
	});
   
});
