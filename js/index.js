$(function(){
//-----------------------------------纵向导航栏----------------------------------
	$("#nav").on("mouseover",".category",function(){
		//鼠标移入一级菜单，二级菜单显示;一级菜单背景图定位
		$(".xiala").show();
		$(".category").css("background","#c11e20 url(img/sanjiao.png) no-repeat 166px -38px");
	})
	
	$("#nav").on("mouseout",".category",function(){
		//鼠标移出一级菜单，二级菜单隐藏;一级菜单背景图定位改变
		$(".xiala").hide();
		$(".category").css("background","#c11e20 url(img/sanjiao.png) no-repeat 166px 0");
	})
	
	$("#nav").on("mouseover",".xiala",function(){
		//鼠标在二级菜单中移动，二级菜单显示;一级菜单背景图定位
		$(".xiala").show();
		$(".category").css("background","#c11e20 url(img/sanjiao.png) no-repeat 166px -38px");
	})
	
	$("#nav").on("mouseout",".xiala",function(){
		//鼠标在二级菜单中移出，二级菜单隐藏 ;一级菜单背景图定位
		$(".xiala").hide();
		$(".category").css("background","#c11e20 url(img/sanjiao.png) no-repeat 166px 0");
	})
	
	$(".xiala").on("mousemove","li",function(){
		//鼠标在二级菜单中移动，当前二级菜单背景变色
		$(".xiala li").eq($(this).index()).css("background","#1c1919");
	})
	
	$(".xiala").on("mouseout","li",function(){
		//鼠标移出二级菜单后奇数和偶数行的背景色设置
		$(".xiala li:odd").css("background","#383333");
		$(".xiala li:even").css("background","#312d2d");
	})
	
//-----------------------------------首页轮播图----------------------------------
	var $li=$("#banner ul.pic li");
	var _index=0;
	var length=$li.size();
	var timer = null;
	clearInterval(timer);
	timer = setInterval(function(){
		_index++;
		if(_index>=length){
			_index=0;
		}
		$li.eq(_index).fadeIn(1000).siblings().fadeOut(1000);
		$("#banner .dot li").find("a").eq(_index).css("background","url(img/dot2.jpg) no-repeat");
		$("#banner .dot li").eq(_index).siblings().find("a").css("background","url(img/dot1.jpg) no-repeat");
	},3500);
		//----------------轮播图按钮点击事件-----------------
	$("#banner .dot li").on("click",function(){
		_index = $(this).index();
		$li.eq(_index).fadeIn().siblings().fadeOut();
		$(this).find("a").css("background","url(img/dot2.jpg) no-repeat");
		$(this).siblings().find("a").css("background","url(img/dot1.jpg) no-repeat");
	})
	
	
//----------------------------#cityshop分店地图----------------------------------
	$("#cityshop .city").on("mouseover","div",function(){
		//鼠标移入当前标题div加背景,移出去背景
		$(this).css("background","url(img/select.gif) no-repeat 0 bottom").siblings().css("background",0);
		//鼠标移入当前标题div显示li，移出隐藏li
		$("#cityshop .address ul li").eq($(this).index()).show().siblings().hide();
	})


//----------------------------登录后----------------------------------
	if(getCookie("phone")){
		$("#top .w .zuo .dengluzhuce").html(
			"<a href='index.html'>"+getCookie("phone")+"</a>"+
			"<a class='tuichu' href='index.html'>退出</a>"
		)
		
	$("#top .w .dengluzhuce").on("click",".tuichu",function(){
		//alert(1)
		removeCookie("phone");
		removeCookie("pass");
		window.location.href = "index.html";
	})
		
	}






















})











