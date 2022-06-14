
var isOver1 = false; // isOver1를 true로 바꿔주면 자동으로 숨겨진 메뉴가 나타나게 하기
var isOver2 = false; // isOver2를 true로 바꿔주면 자동으로 숨겨진 메뉴가 나타나게 하기
// function goHide(locate) {
// 	// for(var i = 1; i <= 4; i++) {
// 		// if(isOver1 == true) {
// 		// 	$(".gnb_depth2_" + i).fadeIn("fast");
// 		// };
// 		// if(isOver2 == true) {
// 		// 	$(".submenu_list").fadeIn("fast");
// 		// };
// 		// if(isOver1 == false) {
// 		// 	$(".gnb_depth2_" + i).fadeOut("fast");
// 		// };
// 		// goHide가 실행된 곳의 함수에 지정된 class값을 가져오기 위해 사용
// 	if(!isOver1 && isOver2) {
// 		console.log(locate);
// 		console.log($(locate + '>.submenu_list').children());
// 		$(locate + '>.submenu_list').children().fadeIn("fast");
// 	};
// 	if (isOver1 && !isOver2) {
// 		console.log(locate);
// 		console.log($(locate + '>.submenu_list').children());
// 		$(locate + '>.submenu_list>li').fadeIn("fast");
// 	};
// 	if (!isOver1 && !isOver2) {
// 		console.log(locate);
// 		console.log($(locate + '>.submenu_list').children());
// 		$(locate + '>.submenu_list').children().fadeOut("fast");
// 	};
// 	if (isOver1 && isOver2) {
// 		$(locate + '>.submenu_list').children().fadeIn("fast");
// 	};

// 		// if(isOver2 == false) {
// 		// 	$(".submenu_list").fadeOut("fast");
// 		// };
// 	};

// isOver1값과 isOver2값에 따라 숨겨진 메뉴가 나타나게 하고 다시 숨기는 함수
function goHide2(locate) {
	if(isOver1 && !isOver2) {
		console.log(isOver1 + " " + isOver2);
		// $(locate + '>.submenu_list').fadeIn("fast");
		$(locate).fadeIn("fast");
	}
	if(!isOver1 == isOver2) {
		$(locate).fadeIn("fast");
		$(locate + '>.submenu_list').fadeIn("fast");
	}
	if(isOver1 == isOver2) {
		console.log(isOver1 + " " + isOver2);
		$(locate + '>.submenu_list').fadeOut("fast");
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
	// 상단 메뉴 마우스 오버, 탭 클릭 코드
	$(".openAll1").mouseover(function() {
		// isOver1 = true;
		console.log("오버");
		// console.log(isOver1)
		// goHide2(".gnb_depth2_1");
		if(parseInt($("header").css("width")) > 800)
			//  $(".gnb_depth2_1").fadeIn("fast");
			 isOver1 = true;
			 goHide2(".gnb_depth2_1");
	}).focus(function() {
		isOver1 = true;
		console.log("포커스");
		if(parseInt($("header").css("width")) > 800)
			 $(".gnb_depth2_1").fadeIn("fast")
			 isOver1 = true;
			 goHide(".gnb_depth2_1");
	}).mouseout(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_1");
		
	}).blur(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_1");
		
	});
	// 하위 메뉴
	$(".gnb_depth2_1 > .submenu_list").mouseover(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_1");
	}).focus(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_1");
	}).mouseout(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_1");
	}).blur(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_1");
	});


	//gnb_depth2_2
	// 상단 메뉴 마우스 오버, 탭 클릭 코드
	$(".openAll2").mouseover(function() {
		isOver1 = true;
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
			isOver1 = true;
			goHide2(".gnb_depth2_2");
	}).focus(function() {
		isOver1 = true;
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast")
			isOver1 = true;
			goHide2(".gnb_depth2_2");
	}).mouseout(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_2");
	}).blur(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_2");
	});
	// 하위 메뉴
	$(".submenu_list").mouseover(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_2");
	}).focus(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_2");
	}).mouseout(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_2");
	}).blur(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_2");
	});

	//gnb_depth2_3
	// 상단 메뉴 마우스 오버, 탭 클릭 코드
	$(".openAll3").mouseover(function() {
		isOver1 = true;
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
			isOver1 = true;
			goHide2(".gnb_depth2_3");
	}).focus(function() {
		isOver1 = true;
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
			isOver1 = true;
			goHide2(".gnb_depth2_3");
	}).mouseout(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_3");
	}).blur(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_3");
	});
	// 하위 메뉴
	$(".submenu_list").mouseover(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_3");
	}).focus(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_3");
	}).mouseout(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_3");
	}).blur(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_3");
	});

	//gnb_depth2_4
	// 상단 메뉴 마우스 오버, 탭 클릭 코드
	$(".openAll4").mouseover(function() {
		isOver1 = true;
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
			isOver1 = true;
			goHide2(".gnb_depth2_4");
	}).focus(function() {
		isOver1 = true;
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast")
			isOver1 = true;
			goHide2(".gnb_depth2_4");
	}).mouseout(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_4");
	}).blur(function() {
		isOver1 = false;
		goHide2(".gnb_depth2_4");
	});
	// 하위 메뉴
	$(".submenu_list").mouseover(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_4");
	}).focus(function() {
		isOver2 = true;
		goHide2(".gnb_depth2_4");
	}).mouseout(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_4");
	}).blur(function() {
		isOver2 = false;
		goHide2(".gnb_depth2_4");
	});

	// .gnb_depth2_4가 끝나면 다시 .gnb_depth2_1로 이동
	
	console.log(isOver1 + " " + isOver2);
    
	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){ // openMOgnb를 클릭할 때
		$('header').addClass('on'); // header에 on을 추가한다
		$('header .header_cont').slideDown('"fast"'); // header_cont를 빠르게 슬라이드 내리기
		$('header .header_area .header_cont .closePop').show();			 // header_area의 header_cont의 closePop을 보이게 한다
		$("body").bind('touchmove', function(e){e.preventDefault()}); // body에 touchmove를 바인딩한다
	});
	$('header .header_cont .closePop').click(function(){ // closePop을 클릭할 때
        $('.header_cont').slideUp('"fast"'); // header_cont를 빠르게 슬라이드 올리기
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
