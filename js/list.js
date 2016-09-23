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
	
//--------------------ajax加载商品-----------------------------------------	
	$.ajax({
			type:"post",
			url:"../js/jsondata.json",
			dataType:"json",
			success:function(mag){
				var data = mag.data;//获取json数据里的data
				var str = '';
				//var dataid = "";
				for(var i in data){
					str += "<dl>";
					str += "<dt><a href='detail.html'><img class='tiaozhuan' style='width:200px;height:200px' dataid='"+data[i].id+"' src='"+data[i].img+"'/></a></dt>";
					str += "<dd><a class='tiaozhuan' href='detail.html'>"+data[i].name+"</a></dd>";
					str += "<dd class='price'>市场价：<span class='span1'>¥"+data[i].price1+"</span>商城价：<span class='span2'>¥"+data[i].price2+"</span></dd>";
					str += "</dl>";
					
				}
				
				$("#content .w .detail .you .productlist").append(str);
			}
		})
//--------------------点击商品跳转详情页-----------------------------------
	$("#content .w .detail .you .productlist").on("click",".tiaozhuan",function(){
		var dataid = $(this).attr("dataid");
		setCookie("dataid",dataid,setCookieDate(7),"/");
	})



//--------------------#cityshop分店地图-----------------------------------------
	$("#cityshop .city").on("mouseover","div",function(){
		//鼠标移入当前标题div加背景,移出去背景
		$(this).css("background","url(../img/select.gif) no-repeat 0 bottom").siblings().css("background",0);
		//鼠标移入当前标题div显示li，移出隐藏li
		$("#cityshop .address ul li").eq($(this).index()).show().siblings().hide();
	})

//----------------------------商品分类-----------------------------------------
	$("#content .w .detail .zuo .sort .onecontent .dingjiachanpin").on("click",".open",function(){
		//--------------定价产品-------------------
		$("#content .w .detail .zuo .sort .onecontent .dingjiachanpin").find(".list").css("display","block");
		$("#content .w .detail .zuo .sort .onecontent .dingjiachanpin").find(".head a.open").css("background","url(../img/hidebg.jpg) no-repeat 0 6px");
		
		$("#content .w .detail .zuo .sort .onecontent .dingjiachanpin").siblings().find(".list").css("display","none");
		$("#content .w .detail .zuo .sort .onecontent .dingjiachanpin").siblings().find(".head a.open").css("background","url(../img/showbg.jpg) no-repeat 0 6px");
	})
	
		$("#content .w .detail .zuo .sort .onecontent .zuanjiedingzhi").on("click",".open",function(){
			//--------------钻戒定制-------------------
		$("#content .w .detail .zuo .sort .onecontent .zuanjiedingzhi").find(".list").css("display","block");
		$("#content .w .detail .zuo .sort .onecontent .zuanjiedingzhi").find(".head a.open").css("background","url(../img/hidebg.jpg) no-repeat 0 6px");
		$("#content .w .detail .zuo .sort .onecontent .zuanjiedingzhi").siblings().find(".list").css("display","none");
		$("#content .w .detail .zuo .sort .onecontent .zuanjiedingzhi").siblings().find(".head a.open").css("background","url(../img/showbg.jpg) no-repeat 0 6px");
	})
		
			$("#content .w .detail .zuo .sort .onecontent .luozuan").on("click",".open",function(){
			//----------------裸钻-------------------
				
		$("#content .w .detail .zuo .sort .onecontent .luozuan").find(".list").css("display","block");
		$("#content .w .detail .zuo .sort .onecontent .luozuan").find(".head a.open").css("background","url(../img/hidebg.jpg) no-repeat 0 6px");
		$("#content .w .detail .zuo .sort .onecontent .luozuan").siblings().find(".list").css("display","none");
		$("#content .w .detail .zuo .sort .onecontent .luozuan").siblings().find(".head a.open").css("background","url(../img/showbg.jpg) no-repeat 0 6px");
	})
			
				$("#content .w .detail .zuo .sort .onecontent .huangjin").on("click",".open",function(){
			//--------------------黄金------------------
		$("#content .w .detail .zuo .sort .onecontent .huangjin").find(".list").css("display","block");
		$("#content .w .detail .zuo .sort .onecontent .huangjin").find(".head a.open").css("background","url(../img/hidebg.jpg) no-repeat 0 6px");
		$("#content .w .detail .zuo .sort .onecontent .huangjin").siblings().find(".list").css("display","none");
		$("#content .w .detail .zuo .sort .onecontent .huangjin").siblings().find(".head a.open").css("background","url(../img/showbg.jpg) no-repeat 0 6px");
	})


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
























})