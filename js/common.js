$(function(){

//-----------------------------------悬浮导航栏----------------------------------
	$(".floatdanghao li").click(function(){//打开对话框
		$(this).find(".dialog").css("display","block");
	})
	
	$(".floatdanghao li .close").click(function(event){//close按钮
		$(".floatdanghao li .dialog").css("display","none");
		event.stopPropagation();//阻止事件冒泡
	})
		
	$(".floatdanghao li.erweima").mouseover(function(){//二维码鼠标移入显示
		$(".vm").css("display","block");
	})
	$(".floatdanghao li.erweima").mouseout(function(){//二维码鼠标移入隐藏
		$(".vm").css("display","none");
	})
	
	$(".floatdanghao li.returntop").click(function(){//返回顶部
		$("html,body").animate({"scrollTop":0})
	})

	$(".floatdanghao li").mouseover(function(){//鼠标移入当前li变色
		$(this).css("background","#d0383a")
	})
	$(".floatdanghao li").mouseout(function(){//鼠标移入当前li恢复原色
		$(this).css("background","#c11e20")
	})



//	//----------------判断购物车件数--------------------- 		
//	 	var cookies = document.cookie ;
//		var cook = cookies.split("; ") ;
//		//console.log(cook);
//		var arr = [] ;
//		for(var i = 0; i < cook.length; i ++) {
//			var daid = cook[i].split("=") ;
//			var nameid = daid[0] ;
//			if(!(isNaN(nameid))){
//				arr.push(daid[1])
//			}
//		}
//		//console.log(arr);
//		$("#top .w .you .jianshu").html(arr.length);//修改件数


//----------------判断购物车件数--------------------- 		
		
	 	var cookies = document.cookie;
		//alert(cookies);
		var cook = cookies.split("; ");
		var arr = [];
		for(var i=0;i<cook.length;i++){
			var daid=cook[i].split("=");
			var nameid=daid[0]*1;
			var goods = daid[1]*1
			
			if((!isNaN(nameid)) && (!isNaN(goods))){
				arr.push(daid[1]);
			}
		}

		$("#top .w .you .jianshu").html(arr.length);//修改件数




})
