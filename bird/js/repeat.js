$(function(){
	$('.head').load('head.html');
	$('.foot').load('foot.html');
	$('.backtop').load('backtop.html');
	var num = 0;
	var lo_search = location.search.substr(1);
	var lo_arr = lo_search.split('&');
	$.each(lo_arr, function(i,v) {
		var result = v.split('=');
		if(result[0] == 'num'){
			 num = result[1];
		}
	});
	$.ajax({
		url:"js/repeat.json",
		success:function(res){
			$('.nav_top_text').prepend('<h1 class="title">' + res[num].title + '</h1><h2 class="Headlines">' + res[num].Headlines + '</h2>	');
			$('.liebiao').prepend('<h1 class="lb">' + res[num].lb + '<span class="pen on"></span></h1><h2 class="time">' + res[num].time + '</h2>');
			$('.liebiao').after('<div class="picture"><img src="' + res[num].picu + '"></div>');
			$('.words').append('<h3 class="words1">' + res[num].words1 + '</h3><p class="words2" style="padding:20px 0;">' + res[num].words2 + '</p><p class="words3">' + res[num].words3 + '</p><p class="words4">' + res[num].words4 + '</p><p class="words5" style="padding:0 0 20px 0;">' + res[num].words5 + '</p><p class="words6" style="padding:0 0 20px 0;">' + res[num].words6 + '</p><p class="words7">' + res[num].words7 + '</p><h3 class="words8"">' + res[num].words8 + '</h3><p class="words9">' + res[num].words9 + '</p><p class="words10" style="padding:0 0 20px 0;">' + res[num].words10 + '</p><p class="words11">' + res[num].words11 + '</p><p class="words12">' + res[num].words12 + '</p><p class="words13">' + res[num].words13 + '</p><p class="words14">' + res[num].words14 + '</p><p class="words15" style="padding:0 0 20px 0;">' + res[num].words15 + '</p><p class="words16">' + res[num].words16 + '</p><p class="words17">' + res[num].words17 + '</p>');
		}
	});
	$('.like_pic').click(function(){
		if($('.like_nav').css('left') == '415px'){
			$('.like_nav').css({bottom:'400px'}).animate({bottom:'200px',opacity:1},500).delay(2000).animate({left:'0',opacity:0},500)
			$('.like_pic').delay(2500).animate({backgroundPositionY:'-74px'},500)
		}
	})
})