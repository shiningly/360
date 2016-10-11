(function(){
	var e=function(){
		var e=0,t=null,n=null,r=0,i=0,s=0,o=0,u=$(".sub_nav li"),a=$("html,body"),f=$(window);
		f.resize(function(e){
			s=$(window).height()
		}).resize(),
		
		f.scroll(function(t){
			r=$(this).scrollTop(),
			r<.3*s?e=0:r>=s&&r<1.3*s?e=1:r>=2*s&&r<2.3*s?e=2:r>=3*s&&r<3.3*s&&(e=3),
			u.removeClass("cur").eq(e).addClass("cur")
		}),
		
		a.on("mousewheel",function(n){
			o=window.event.detail?-(window.event.detail||0)/3:window.event.wheelDelta/120,
			clearTimeout(t),
			t=setTimeout(function(){
				o>0&&e>0?e--:o<0&&e<3&&e++,
				a.animate({scrollTop:s*e},700,"easeInOutQuart")
			},300),n.preventDefault()
		}),
		u.on("click",function(t){
			i=$(this).index(),
			a.animate({scrollTop:s*i},700,"easeInOutQuart",function(){e=i})
		})
		
	},
		
	t=function(){
		var e=$(".nav ul"),
		t=e.find("li").not(".nav_focus"),
		n=e.find(".cur"),
		r=e.find(".nav_focus"),
		i=n.width(),
		s=n.position().left+26,
		o=n.index();
		
		r.stop(!0,!1).animate({left:s,width:i},300),
		
		t.eq(o).addClass("cur").end().on("mouseenter",function(e){
			var t=$(this),
			n=t.position().left+26,i=t.width();
			
			t.addClass("cur").siblings().removeClass("cur"),
			r.stop(!0,!1).animate({left:n,width:i},300)
		}).siblings().removeClass("cur"),
		
		e.on("mouseleave",function(e){
			r.stop(!0,!1).animate({left:s,width:i},300),
			t.eq(o).addClass("cur").siblings().removeClass("cur")
		})
	},
		
	n=function(){
		var e=$(".video"),
		t=$(document),
		n='<div class="mask-layer"></div><div id="videobox"><a href="#nogo" id="cls-btn" title="\u5173\u95ed">X</a><iframe src="http://yuntv.letv.com/bcloud.html?uu=789b624579&vu=bde787ab6e&auto_play=1&gpcflag=1&width=750&height=465" width="750" height="465" frameborder="0"></iframe></div>';
		
		e.on("click",function(e){
			e.preventDefault(),
			$(n).appendTo("body")
		}),
		t.on("click","#cls-btn",function(e){
			e.preventDefault(),
			t.find(".mask-layer").remove().end().find("#videobox").remove()
		})
	};
		
		t(),e(),n()
})()
