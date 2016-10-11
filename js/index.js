$(function(){
	$(window).scroll(function(){
		var n=parseInt($(window).scrollTop()/$(window).height());
		$('#left_nav ul li').eq(n).addClass('active').siblings().removeClass('active');
	})
	var timer=null;
	$('#left_nav ul li').click(function(){
		var n=$(this).index();
		
		clearInterval(timer);
		
		
		timer=setInterval(function(){
			
			var speed=(n*$(window).height()-$(window).scrollTop())/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
				
			if($(window).scrollTop()==n*$(window).height()){
				clearInterval(timer);
			}else{
				$(window).scrollTop($(window).scrollTop()+speed);
			}
		},30)
		
	})
	
	$('.nav li').mouseover(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	})
	$('.nav').mouseleave(function(){
		$('.nav li').removeClass('cur');
		$('.nav li').eq(0).addClass('cur');
	})
})
