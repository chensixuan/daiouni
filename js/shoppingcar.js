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
	
//--------------------hot轮播图-----------------------------------------	
	var currentImgIndex = 0;
	var oUl = $("#content .w .hot .hotbody ul");
	var oLi = $("#content .w .hot .hotbody ul li");
	
	$("#content .w .hot .hotbody .lbtn").click(function(){//左按钮点击事件
		oUl.animate({"left":"-1274px"},function(){
			$("#content .w .hot .hotbody ul li").eq(0).appendTo(oUl);
			oUl.css({"left":"-1092px"});
		})	
	})
	
	$("#content .w .hot .hotbody .rbtn").click(function(){//右按钮点击事件
		oUl.animate({"left":"-910px"},function(){
			$("#content .w .hot .hotbody ul li").eq(17).prependTo(oUl);
			oUl.css({"left":"-1092px"});
		})	
	})
	

//--------------------#cityshop分店地图-----------------------------------------
	$("#cityshop .city").on("mouseover","div",function(){
		//鼠标移入当前标题div加背景,移出去背景
		$(this).css("background","url(../img/select.gif) no-repeat 0 bottom").siblings().css("background",0);
		//鼠标移入当前标题div显示li，移出隐藏li
		$("#cityshop .address ul li").eq($(this).index()).show().siblings().hide();
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
	
	
	//----------------判断购物车件数--------------------- 		
		
	 	var cookies = document.cookie;
				//alert(cookies);
				var cook = cookies.split("; ");
				var arr = [];
				for(var i=0;i<cook.length;i++){
					var daid=cook[i].split("=");
					var nameid = daid[0]*1;
					var goods = daid[1]*1;
					
					if((!isNaN(nameid)) && (!isNaN(goods))){
						arr.push(daid[1]);
					}
				}
	
//	 	var cookies = document.cookie ;
//		var cook = cookies.split("; ") ;
//		//console.log(cook);
//		var arr = [] ;
//		for(var i = 0; i < cook.length; i ++) {
//			var daid = cook[i].split("=") ;
//			var nameid = daid[0] ;
//			console.log(nameid);
//			if(!(isNaN(nameid))){
//				arr.push(daid[1]);
//			}
//		}
		//console.log(arr);
		//console.log(arr.length);
		$("#content .w .car .mycar .mycarbody .tfoot .jianshu").html(arr.length);//修改件数

//
////------------------购物车为空界面---------------------------------
//	if(arr.length == 0){
//		
//	}else{}
//	
	
//----------------------------加载商品-------------------------------------
	//var dataid=getCookie("dataid");
	 $.ajax({
	 	url:"../js/jsondata.json",
	 	success:function(mag){
	 		var data = mag.data;
	 		var str = "";
			var sum1 = 0;
			var sum2 = 0;
			var sum3 = 0;
			for(var j in arr){
				for(var i in data){
					if(arr[j] == data[i].id){
						//console.log(data[i].id);
						//console.log(arr[j]);
						str +="<div class='box' da='"+data[i].id+"'>";
						str += "<div style='width:130px; background:#f7f7f7;height: 140px;' class='l'><img style='width:120px;height:120px;margin:10px' src='"+data[i].img+"'/></div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 210px; background:#f7f7f7'>"+data[i].name+"</div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 110px; background:#f7f7f7'>"+data[i].chicun+"</div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 160px; background:#f7f7f7'></div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 110px;text-decoration:line-through; background:#f7f7f7'>¥"+data[i].price1+"</div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 110px; background:#f7f7f7'>¥"+data[i].discount+"</div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 110px; background:#f7f7f7'>¥"+data[i].price2+"</div>";
						str += "<div class='l' style='text-align: center;height: 140px;line-height:130px;width: 110px; background:#f7f7f7'><a style='cursor:pointer;' class='delete''>删除</a></div>";
						str += "</div>";
						sum1 += Number(data[i].price1);
						sum2 += Number(data[i].discount);
						sum3 += Number(data[i].price2);
					}
				}
			}
			$("#content .w .car .mycar .mycarbody .tbody").append(str);
			$("#content .w .car .mycar .mycarbody .tfoot .zong .sum").html(sum1);
			$("#content .w .car .mycar .mycarbody .tfoot .zong .discount").html(sum2);
			$("#content .w .car .mycar .mycarbody .tfoot .zong .sumall").html(sum3);
		
		
	 
	//------------------点击删除按钮移除box并删除cookie-----------------
	 	$("#content .w .car .mycar .mycarbody .tbody").on("click",".delete",function(){
		var da = $(this).parents(".box").attr("da");
		deleteCookie(da);
		$(this).parents(".box").remove();
		
		window.location.reload();
	})
	 	
	 

//	------------------点击清空按钮-----------------
//	$("#content .w .car .mycar .mycarbody .tfoot .clear").on("click",function(){
//		removeCookie("da");
//	 	
//	 }) 	
	 	
	 	
	
	
	
	
	
	 	
	 	
	 	}
	 });


	



















})