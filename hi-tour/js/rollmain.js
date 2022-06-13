
 	var wnum=0; //현재 보여지는 이미지 번호
	var wwslidingAuto=null; //자동슬라이드 실행중인지 여부
	function play_w(directw) { // 이미지 슬라이드 함수
			if(directw=="right"){ // directw가 right이면
				wnum++; // wnum을 1증가
				if(wnum>2)wnum=0; // wnum이 3이상이면 wnum을 0으로
			}else if(directw=="left"){ // directw가 left이면
				wnum--; // wnum을 1감소
				if(wnum<0)wnum=2; // wnum이 0미만이면 wnum을 2로
			}else { // directw가 right도 left도 아니면
				wnum = directw; // wnum을 directw로
			}
			
			$(".rollingbtn").find('li.seq a').each(function(){ // rollingbtn의 li.seq a를 찾아 각각 실행
				$(".rollingbtn li.seq a img").attr('src',$(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png')); // rollingbtn의 li.seq a의 img에서 _on.png를 _off.png로 바꾸기
			});
			$(".rollingbtn li.butt"+wnum+ " a img").attr('src',$(".rollingbtn li.butt"+wnum+ " a img").attr('src').replace('_off.png','_on.png')); // rollingbtn의 li.butt에서 wnum의 a의 img에서 _off.png를 _on.png로 바꾸기

				if(wnum==0) { // wnum이 0이면
				$(".viewImgList li.imglist1").animate({'opacity' : 0 },1000); // viewImgList의 li.imglist1을 애니메이션을 1초 동안 투명도를 0으로 변경
				$(".viewImgList li.imglist2").animate({'opacity' : 0 },1000); // viewImgList의 li.imglist2를 애니메이션을 1초 동안 투명도를 0으로 변경
				$(".viewImgList li.imglist0").animate({'opacity' : 1 },1000); // viewImgList의 li.imglist0을 애니메이션을 1초 동안 투명도를 1로 변경
			}else if (wnum==1){ // wnum이 1이면
				$(".viewImgList li.imglist0").animate({'opacity' : 0 },1000); // viewImgList의 li.imglist0을 애니메이션을 1초 동안 투명도를 0으로 변경
				$(".viewImgList li.imglist2").animate({'opacity' : 0 },1000); // viewImgList의 li.imglist2를 애니메이션을 1초 동안 투명도를 0으로 변경
				$(".viewImgList li.imglist1").animate({'opacity' : 1 },1000); // viewImgList의 li.imglist1을 애니메이션을 1초 동안 투명도를 1로 변경
			}else if (wnum==2){ // wnum이 2이면
				$(".viewImgList li.imglist0").animate({'opacity' : 0 },1000); // viewImgList의 li.imglist0을 애니메이션을 1초 동안 투명도를 0으로 변경
				$(".viewImgList li.imglist1").animate({'opacity' : 0 },1000); // viewImgList의 li.imglist1을 애니메이션을 1초 동안 투명도를 0으로 변경
				$(".viewImgList li.imglist2").animate({'opacity' : 1 },1000); // viewImgList의 li.imglist2를 애니메이션을 1초 동안 투명도를 1로 변경
			}

			if(wwslidingAuto)clearTimeout(wwslidingAuto); // wwslidingAuto가 있으면 clearTimeout. clearTimeout은 실행중인 일정시간을 중지시키는 함수
			wwslidingAuto=setTimeout("play_w('right')",6000); // wwslidingAuto를 setTimeout으로 실행시키고 6000밀리초마다 play_w('right')을 실행
	}
	var wwslidingAuto=setTimeout("play_w('right')",6000); // wwslidingAuto를 setTimeout으로 실행시키고 6초마다 play_w('right')을 실행. setTimeout은 일정시간을 중지시키지 않고 실행시키는 함수

$(document).ready(function(){

	$(".rollstop a").click(function(){ // rollstop의 a를 클릭하면
		$(this).parent().hide(); // this를 호출한 객체의 parent를 숨기기. this는 rollstop의 a를 의미.
		$(".rollplay").css('display','inline-block'); // rollplay를 보이게 하기.
		if(wwslidingAuto)clearTimeout(wwslidingAuto); // wwslidingAuto가 있으면 clearTimeout. clearTimeout은 실행중인 일정시간을 중지시키는 함수.
	});

	$(".rollplay a").click(function(){ // rollplay의 a를 클릭하면
		$(this).parent().hide(); // this를 호출한 객체의 parent를 숨기기. this는 rollplay의 a를 의미.
		$(".rollstop").css('display','inline-block'); // rollstop을 보이게 하기.
		play_w('right'); // play_w('right')을 실행.
	});

	$(".rollingbtn li.seq a").each(function(index){ // rollingbtn의 li.seq의 a를 각각 순서대로 수행하기.
		$(this).click(function(){ // this를 호출한 객체의 click을 수행. this는 rollingbtn의 li.seq의 a를 의미.
			$(".rollplay").hide(); // rollplay를 숨기기.
			$(".rollstop").css('display','inline-block'); // rollstop을 보이게 하기.
			if(wwslidingAuto)clearTimeout(wwslidingAuto); // wwslidingAuto가 있으면 clearTimeout. clearTimeout은 실행중인 일정시간을 중지시키는 함수.
			play_w(index); // play_w(index)을 실행. index는 0,1,2.
		});
	});

});