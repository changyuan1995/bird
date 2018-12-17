$(function() {
	var num = location.hash.substr(1);
	//开始动画
	if(num > 0) {
		$('.popup').stop().slideUp(500);
	};
	$('.popup').dblclick(function() {
		$('.popup').stop().slideUp(500)
	});
	$('.popup_gif').delay(4000).animate({
		marginTop: 0
	}, 500);
	$('.popup_text').delay(4000).fadeIn(500).animate({
		top: '380px'
	}, 500);
	$('.popup').delay(6000).slideUp(500);
	//轮播图动画
	$(window).resize(function(){
		$('.banner').height($('body').innerHeight());
		$('.bannertu').css('marginTop',$('body').innerHeight() * -num);
	});
	$('.banner').css('height', $('body').innerHeight());
	//头部点击
	$('.header_nav_txt').click(function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		if($(this).index() == 3) {
			$('.header_nav_txt').eq(4).addClass('cur');
		} else if($(this).index() == 4) {
			$('.header_nav_txt').eq(3).addClass('cur');
		};
		num = $(this).index() + 1;
		if(num == 5) {
			num = 4
		};
		$('.bannertu').animate({
			marginTop: $('body').innerHeight() * -num
		}, 500);
	});
	var flag = true;
	$('.bannertu').animate({
		marginTop: $('body').innerHeight() * -num + 1
	}, 500);
	//鼠标滚动
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		var detail = e.originalEvent.wheelDeltaY || e.originalEvent.detail * -40;
		if(flag && $('.popup').css('display')=='none') {
			flag = false;
			if(detail < 0) {
				num = num < $('.banner').length - 1 ? ++num : $('.banner').length - 1;
			} else {
				num = num > 0 ? --num : 0;
			}
			$('.bannertu').animate({
				marginTop: $('body').innerHeight() * -num
			}, 500, function() {
				flag = true
			})
		}
		if(num > 0) {
			$('.header_nav_txt').eq(num - 1).addClass('cur').siblings().removeClass('cur');
		} else {
			$('.header_nav_txt').eq(num).addClass('cur').siblings().removeClass('cur');
		}
		if(num == 4) {
			$('.header_nav_txt').eq(4).addClass('cur');
		}
	})
	//第一块轮播箭头点击
	$('.turndown').click(function() {
		$('.bannertu').animate({
			marginTop: $('body').innerHeight() * -1
		})
	});
	//左右轮播点击
	var num1 = 0;
	//右箭头点击
	$(".banner_banner_right").click(function() {
		if(num1 < $('.banner_banner').length - 1) {
			num1++;
			$('.banner2_nav').animate({
				marginLeft: $('body').innerWidth() * -num1
			});
			$(".banner_banner_left").css({
				opacity: 1
			});
		}
		if(num1 == $('.banner_banner').length - 1) {
			$(".banner_banner_right").css({
				opacity: 0.5
			})
		}
	})
	//左箭头点击
	$(".banner_banner_left").click(function() {
		if(num1 > 0) {
			num1--;
			$('.banner2_nav').animate({
				marginLeft: $('body').innerWidth() * -num1
			});
			$(".banner_banner_right").css({
				opacity: 1
			});
		}
		if(num1 == 0) {
			$(".banner_banner_left").css({
				opacity: 0.5
			})
		}
	})
	//企业价值四角闪烁
	var xy = 0;
	setInterval(function() {
		xy++;
		if(xy % 2 == 0) {
			$('.banner3_nav_pic1 img').eq(1).animate({
				opacity: 0
			}, 1000);
			$('.banner3_nav_pic2 img').eq(1).animate({
				opacity: 0
			}, 1000);
			$('.banner3_nav_pic3 img').eq(1).animate({
				opacity: 0
			}, 1000);
			$('.banner3_nav_pic4 img').eq(1).animate({
				opacity: 0
			}, 1000);
		} else {
			$('.banner3_nav_pic1 img').eq(1).animate({
				opacity: 1
			}, 1000);
			$('.banner3_nav_pic2 img').eq(1).animate({
				opacity: 1
			}, 1000);
			$('.banner3_nav_pic3 img').eq(1).animate({
				opacity: 1
			}, 1000);
			$('.banner3_nav_pic4 img').eq(1).animate({
				opacity: 1
			}, 1000);
		}
	}, 1000)
	$('.banner4_nav_bottom_left').click(function() {
		$('.banner4_nav_txt').animate({
			marginLeft: 0
		}, 500)
	})
	$('.banner4_nav_bottom_right').click(function() {
		$('.banner4_nav_txt').animate({
			marginLeft: '-910px'
		}, 500)
	})
	//小鸟掌云点击
	//左按钮点击
	$('.banner4_nav_bottom_left').click(function() {
		$('.banner4_nav_bottom_right').stop(true, false).animate({
			backgroundPositionX: '-78px'
		}, 500);
		$(this).delay(100).animate({
			backgroundPositionX: 0
		}, 500);
		$(this).addClass('cuur').siblings().removeClass('cuur');
	})
	//右按钮点击
	$('.banner4_nav_bottom_right').click(function() {
		$('.banner4_nav_bottom_left').stop(true, false).animate({
			backgroundPositionX: '78px'
		}, 500);
		$(this).delay(100).animate({
			backgroundPositionX: 0
		}, 500);
		$(this).addClass('cuur').siblings().removeClass('cuur');
	})
})