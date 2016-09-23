$(function(){
//--------------------------纵向导航栏-----------------------------------------
	$("#nav").on("mouseover",".category",function(){
		//鼠标移入一级菜单，二级菜单显示;一级菜单背景图定位
		$(".xiala").show();
		$(".category").css("background","#c11e20 url(../img/sanjiao.png) no-repeat 166px -38px");
	})
	
	$("#nav").on("mouseout",".category",function(){
		//鼠标移出一级菜单，二级菜单隐藏;一级菜单背景图定位改变
		$(".xiala").hide();
		$(".category").css("background","#c11e20 url(../img/sanjiao.png) no-repeat 166px 0");
	})
	
	$("#nav").on("mouseover",".xiala",function(){
		//鼠标在二级菜单中移动，二级菜单显示;一级菜单背景图定位
		$(".xiala").show();
		$(".category").css("background","#c11e20 url(../img/sanjiao.png) no-repeat 166px -38px");
	})
	
	$("#nav").on("mouseout",".xiala",function(){
		//鼠标在二级菜单中移出，二级菜单隐藏 ;一级菜单背景图定位
		$(".xiala").hide();
		$(".category").css("background","#c11e20 url(../img/sanjiao.png) no-repeat 166px 0");
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
	
//--------------------#cityshop分店地图-----------------------------------------
	$("#cityshop .city").on("mouseover","div",function(){
		//鼠标移入当前标题div加背景,移出去背景
		$(this).css("background","url(../img/select.gif) no-repeat 0 bottom").siblings().css("background",0);
		//鼠标移入当前标题div显示li，移出隐藏li
		$("#cityshop .address ul li").eq($(this).index()).show().siblings().hide();
	})

//-------------------------轮播图---------------------------------------------
		var currentImgIndex = 0;
		var maxZindex = 1;
		var oSmallLi = $("#content .buy .xiaotu .ul ul li");
		var oSmallUl = $("#content .buy .xiaotu .ul ul");
		
		
	$("#content .buy .xiaotu .lbtn").click(function(){//左按钮点击事件
		currentImgIndex -= 4;
		if(currentImgIndex < 0){
			currentImgIndex = 0 ;
		}
		changeImg();
})
	$("#content .buy .xiaotu .rbtn").click(function(){//右按钮点击事件
		currentImgIndex += 4;
		if(currentImgIndex > (oSmallLi.length-4)){
			currentImgIndex = (oSmallLi.length-4);
		}
		changeImg();
})
	function changeImg(){//切换图片函数
			if(currentImgIndex <= 0){
				oSmallUl.animate({"left":0});
			}else if(currentImgIndex >= (oSmallLi.length - 4)){
				oSmallUl.animate({"left":-(oSmallLi.length - 4) * (oSmallLi[0].offsetWidth+2)});
			}else{
				oSmallUl.animate({"left":-(currentImgIndex) * (oSmallLi[0].offsetWidth+2)});
			}
		}
	//---------------鼠标移入移出事件--------------------------
	$("#content .buy .xiaotu .ul ul li").mouseover(function(){
	$(this).addClass("yiru");
	})
$("#content .buy .xiaotu .ul ul li").mouseout(function(){
	$(this).removeClass("yiru");
	})	
	
	//----------------------点击小图切换大图------------------------
	$("#content .buy .xiaotu .ul ul li").click(function(){
		$(this).addClass("dianji");
		$(this).siblings().removeClass("dianji");
		
		$("#content .buy .datu li").eq($(this).index()).css("z-index",++maxZindex);
		$("#content .w .buy .tu .datu .bigtu img").eq($(this).index()).css("z-index",++maxZindex);	
	})

//--------------------------放大镜-------------------------------------------
	$("#content .buy .datu").mouseover(function(){
		$("#content .buy .datu .xiaokuai").css("display","block");
	})
	$("#content .buy .datu").mouseout(function(){
		$("#content .buy .datu .xiaokuai").css("display","none");
	})
	
	$("#content .buy .datu").mouseover(function(){
		$("#content .buy .datu .bigtu").css("display","block");
	})
	$("#content .buy .datu").mouseout(function(){
		$("#content .buy .datu .bigtu").css("display","none");
	})
		var $oDiv = $("#content .w .buy .tu");
		var $oSmall = $("#content .w .buy .tu .datu");
		var $oMark = $("#content .w .buy .tu .datu .xiaokuai");
		var $oBig = $("#content .w .buy .tu .datu .bigtu");
		var $oImg = $("#content .w .buy .tu .datu .bigtu img");
		$oSmall.mousemove(function(e){
			var L = e.pageX - $oSmall.offset().left - $oMark.outerWidth()/2;
			var T = e.pageY - $oSmall.offset().top - $oMark.outerHeight()/2;
			if(L < 0){
				L = 0;
			}else if(L > $oSmall.outerWidth() - $oMark.outerWidth()){
				L = $oSmall.outerWidth() - $oMark.outerWidth();
			}
			if(T < 0){
				T = 0;
			}else if(T > $oSmall.outerHeight() - $oMark.outerHeight()){
				T = $oSmall.outerHeight() - $oMark.outerHeight();
			}
			$oMark.css("left",L+"px");
			$oMark.css("top",T+"px");
			var percentX = L /($oSmall.outerWidth() - $oMark.outerWidth());
			var percentY = T /($oSmall.outerHeight() - $oMark.outerHeight());
			$oImg.css("left",-percentX*($oImg.outerWidth() - $oBig.outerWidth() )+"px");
			$oImg.css("top",-percentY*($oImg.outerHeight() - $oBig.outerHeight())+"px");
		});

		
//--------------------------选用材质-----------------------------------------
	$("#content .w .buy .buyinformation .goumai p.xuanyongcaizhi a").click(function(){
		$(this).css({"background":"#db3958","color":"#fff"});
		$(this).siblings().not("span").css({"background":"#ccc","color":"#3e3e3e"});
	})

//--------------------------加入购物车------------------------------------------
	$("#content .w .buy .buyinformation .jiaru .jiarugwc").click(function(){
		var dataid=getCookie("dataid");
		setCookie(dataid,dataid,setCookieDate(7),"/");
		window.location.href="shoppingcar.html";
	})



//--------------------------固定导航栏------------------------------------------
$(window).scroll(function(){
	var top = $(this).scrollTop();
	if(top>=880&&top<=12450){
	$("#content .w .detail .information .informationtitle").css("top",top-888+"px");
	}else{
	$("#content .w .detail .information .informationtitle").css("top","0px");
	}
});

	
//----------------------------登录后----------------------------------
	if(getCookie("phone")){
		$("#top .w .zuo .dengluzhuce").html(
			"<a href='../index.html'>"+getCookie("phone")+"</a>"+
			"<a class='tuichu' href='../index.html'>退出</a>"
		)
		
	$("#top .w .dengluzhuce").on("click",".tuichu",function(){
		//alert(1)
		removeCookie("phone");
		removeCookie("pass");
		window.location.href = "../index.html";
	})
		
	}	

//---------------------Ajax加载详情页信息----------------------------------
	$.ajax({
		url:"../js/jsondata.json",
		success:function(mag){
			var data = mag.data;
	 		var str1 = "";
			var dataid=getCookie("dataid");
	 		for(var i in data){
	 			if(dataid == data[i].id){
	 				$("#content .w .buy .tu .datu .bigtu img").eq(0).attr("src",data[i].img1);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(1).attr("src",data[i].img2);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(2).attr("src",data[i].img3);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(3).attr("src",data[i].img4);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(4).attr("src",data[i].img5);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(5).attr("src",data[i].img6);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(6).attr("src",data[i].img7);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(7).attr("src",data[i].img8);
	 				$("#content .w .buy .tu .datu .bigtu img").eq(8).attr("src",data[i].img9);
	 				
	 				$("#content .w .buy .tu .datu ul li").eq(0).find("img").attr("src",data[i].img1);
	 				$("#content .w .buy .tu .datu ul li").eq(1).find("img").attr("src",data[i].img2);
	 				$("#content .w .buy .tu .datu ul li").eq(2).find("img").attr("src",data[i].img3);
	 				$("#content .w .buy .tu .datu ul li").eq(3).find("img").attr("src",data[i].img4);
	 				$("#content .w .buy .tu .datu ul li").eq(4).find("img").attr("src",data[i].img5);
	 				$("#content .w .buy .tu .datu ul li").eq(5).find("img").attr("src",data[i].img6);
	 				$("#content .w .buy .tu .datu ul li").eq(6).find("img").attr("src",data[i].img7);
	 				$("#content .w .buy .tu .datu ul li").eq(7).find("img").attr("src",data[i].img8);
	 				$("#content .w .buy .tu .datu ul li").eq(8).find("img").attr("src",data[i].img9);
	 				
	 				
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(0).find("img").attr("src",data[i].img1);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(1).find("img").attr("src",data[i].img2);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(2).find("img").attr("src",data[i].img3);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(3).find("img").attr("src",data[i].img4);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(4).find("img").attr("src",data[i].img5);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(5).find("img").attr("src",data[i].img6);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(6).find("img").attr("src",data[i].img7);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(7).find("img").attr("src",data[i].img8);
	 				$("#content .w .buy .tu .xiaotu .ul ul li").eq(8).find("img").attr("src",data[i].img9);
	 				
	 				$("#content .w .buy .buyinformation .goumai .aa").html(data[i].name);
	 				$("#content .w .buy .buyinformation .goumai .bb").html("¥"+data[i].price1);
	 				$("#content .w .buy .buyinformation .goumai .cc").html("¥"+data[i].price2);
	 			}
	 		}
		}
	})
		
		













})