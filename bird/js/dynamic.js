window.onload = function(){
	var num = 0;
	$('.header').load('head.html');
	$('.foot').load('foot.html');
	$('.backtop').load('backtop.html');
	$('.pen').click(function(){
		$('.liebiao').css({width:'100px'}).animate({width:'1100px'},1000,'easeOut');
	})
	$('.nav_foot').click(function(){
		++ num;
		if(num == 1){
			$('.nav_center').css({height:'1600px'});
		}else if(num == 2){
			$('.nav_center').css({height:'2160px'});
			$('.nav_bottom').css({backgroundImage:'url(img/list_gomore_bg_nomore.jpg)'});
			$('.nav_foot').css({display:'none'});
		};
	});
}