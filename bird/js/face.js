window.onload = function(){
	//加载头部
	$('.header').load('head.html');
	//加载页脚
	$('.footer').load('foot.html');
	//加载回到顶部
	$('.backtop').load('backtop.html');
	//轮播图
	num = 0;
	var len = $('.banner_pic').length
	$('.banner_text1').delay(500).css({left:0,top:'204px'}).animate({left:'39%',opacity: 1},1000);
	$('.banner_text2').delay(1000).css({left:'100%',top:'300px'}).animate({left:'42%'},1000,'elasticOut');
	$('.banner_text3').delay(1000).css({left:'41%',top:'360px'}).fadeIn(1000);
	$('.banner_dian').click(function(){
		num = $(this).index()
		move()
	});
	$('.banner_left').click(function(){
		num --;
		num = (num+3) % len;
		move()
	});
	$('.banner_right').click(function(){
		num ++;
		num = num % len;
		move()
	});
	function move (){
		$('.banner_pic').eq(num).stop(true,false).fadeIn(100).siblings('.banner_pic').fadeOut(100);
		$('.banner_dian').eq(num).addClass('curr').siblings().removeClass('curr');
		$('.banner_text1').css({opacity:0})
		$('.banner_text3').fadeOut(0);
		if(num == 0){
			$('.banner_text1').delay(500).css({left:0,top:'204px'}).stop(true,false).animate({left:'39%',opacity: 1},1000);
			$('.banner_text2').delay(1000).css({left:'100%',top:'300px'}).stop(true,false).animate({left:'42%'},1000,'elasticOut');
			$('.banner_text3').delay(1000).css({left:'41%',top:'360px'}).stop(true,false).fadeIn(1000);
		}else if(num == 1){
			$('.banner_text1').delay(500).css({left:0,top: '177px'}).stop(true,false).animate({left:'24%',opacity: 1},1000);
			$('.banner_text2').delay(1000).css({left:'100%',top:'70px'}).stop(true,false).animate({left:'34%'},1000,'elasticOut');
			$('.banner_text3').delay(1000).css({left:'35%',top:'195px'}).stop(true,false).fadeIn(1000);
		}else if(num == 2){
			$('.banner_text1').delay(500).css({left:0,top:'188px'}).stop(true,false).animate({left:'42%',opacity: 1},1000);
			$('.banner_text2').delay(1000).css({left:'100%',top:'300px'}).stop(true,false).animate({left:'44%'},1000,'elasticOut');
			$('.banner_text3').delay(1000).css({left:'41%',top:'360px'}).stop(true,false).fadeIn(1000);
		}
	}
	//主要产品
	var num1 = 0
	$('.nav_btn_right').click(function(){
		num1 = (++ num1) % 6;
		gogogo(400,1200)
	});
	$('.nav_btn_left').click(function(){
		num1 = (-- num1) % 6;
		gogogo(-400,-1200)
	});
	$('.nav_yuan').click(function(){
		var LeftI = num1;
		var RightI = $(this).index();
		num1 = RightI;
		if (LeftI > RightI) {
			gogogo(-400,-1200)
		} else if (LeftI < RightI) {
			gogogo(400,1200)
		}
	})
	function gogogo(lnum,rnum){
		$('.nav_banner_pic').eq(num1).fadeIn(1000).siblings('.nav_banner_pic').hide();
		$('.nav_banner_pic').eq(num1).find('.nav_banner_left').css('left',lnum);
		$('.nav_banner_pic').eq(num1).find('.nav_banner_right').css('left',rnum)
		$('.nav_banner_left').stop(true,false).animate({left:0},1000);
		$('.nav_banner_right').stop(true,false).animate({left:'441px'},1000);
		$('.nav_yuan').eq(num1).addClass('cuur').removeClass('nav_yuan1').siblings().addClass('nav_yuan1').removeClass('cuur')
	}
	//业务范围
	$('.btn').click(function(){
		if($(this).parent().next().css('display')=='block'){
			$(this).animate({backgroundPositionX:0,backgroundPositionY:0})
			$(this).parents('.business_nav').siblings().find('.btn').animate({backgroundPositionX:0,backgroundPositionY:0});
		}else{
			$(this).animate({backgroundPositionX:0,backgroundPositionY:'-67px'})
			$(this).parents('.business_nav').siblings().find('.btn').animate({backgroundPositionX:0,backgroundPositionY:0});
		};
		$(this).parent().next().slideToggle().parent().siblings().find('.title2').slideUp(500);
	});
	$('.picture').click(function(){
		if($(this).parent().next().css('display')=='block'){
			$(this).siblings('.btn').animate({backgroundPositionX:0,backgroundPositionY:0})
			$(this).siblings('.btn').parents('.business_nav').siblings().find('.btn').animate({backgroundPositionX:0,backgroundPositionY:0});
		}else{
			$(this).siblings('.btn').animate({backgroundPositionX:0,backgroundPositionY:'-67px'})
			$(this).siblings('.btn').parents('.business_nav').siblings().find('.btn').animate({backgroundPositionX:0,backgroundPositionY:0});
		};
		$(this).parent().next().slideToggle().parent().siblings().find('.title2').slideUp(500);
	});
	//团队介绍
	numm = 0;
	$('.team_banner_btnl').click(function(){
		-- numm;
		numm = numm % 3;
		$('.team_banner').stop(false,true).animate({marginLeft:0},1000,'backIn',function(){
			$('.team_banner').prepend($('.team_bannernav:last'));
			$('.team_banner').css({marginLeft: '-1100px'});
		})
		$('.team_banner_dian').eq(numm).addClass('cuurr').siblings().addClass().removeClass('cuurr')
	});
	$('.team_banner_btnr').click(function(){
		++ numm;
		numm = numm % 3;
		$('.team_banner').stop(false,true).animate({marginLeft:'-2200px'},1000,'backIn',function(){
			$('.team_banner').append($('.team_bannernav:first'));
			$('.team_banner').css({marginLeft: '-1100px'});
		})
		$('.team_banner_dian').eq(numm).addClass('cuurr').siblings().addClass().removeClass('cuurr')
	});
	var time = setInterval(function(){
		++ numm;
		numm = numm % 3;
		$('.team_banner').stop(false,true).animate({marginLeft:'-2200px'},1000,'backIn',function(){
			$('.team_banner').append($('.team_bannernav:first'));
			$('.team_banner').css({marginLeft: '-1100px'});
		})
		$('.team_banner_dian').eq(numm).addClass('cuurr').siblings().addClass().removeClass('cuurr')
	},10000);
	//联系我们
	$("input,textarea").focus(function(){
		$(this).parent().css("border","1px solid #b5b5b5");
	});
	$("input,textarea").blur(function(){
		$(this).parent().css("border","1px solid #dedfe3");
	});
	//地图
	var map = new BMap.Map("allmap");    // 创建Map实例
	var point = new BMap.Point(116.355905,40.094756);
	map.centerAndZoom(point, 15);// 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
	        BMAP_NORMAL_MAP,
	        BMAP_HYBRID_MAP
	    ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.disableDragging();     //禁止拖拽
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	map.addControl(top_left_control);        
	map.addControl(top_left_navigation);     
	var content = '<div style="margin:0;line-height:20px;padding:2px;">' + '<img src="img/xiaoniao_icon.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' + '地址：北京市昌平区站前东街2号<br/>电话：(010)028-8888888<br/>简介：回龙观田园风光综合商业楼3层，为小鸟掌学研发及办公地址。' + '</div>';
	 var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
		title  : "卓新思创",      //标题
		width  : 290,             //宽度
		height : 105,              //高度
		panel  : "panel",         //检索结果面板
		enableAutoPan : true,     //自动平移
		searchTypes   :[
			BMAPLIB_TAB_SEARCH,   //周边检索
			BMAPLIB_TAB_TO_HERE,  //到这里去
			BMAPLIB_TAB_FROM_HERE //从这里出发
		]
	});
	var marker = new BMap.Marker(point); //创建marker对象
	marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
	})
	map.addOverlay(marker); //在地图中添加marker
}