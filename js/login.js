$(function(){
//-----------------------------------纵向导航栏----------------------------------
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
	
//--------------------------得焦失焦事件+正则验证--------------------------------
		$("#content .login .shoujihaoma input").val("11位数字");
		$("#content .login .denglumima input").val("6-20位包含字母数字");
		//-------------手机号码框得焦事件---------------------------------
	$("#content .login .shoujihaoma input").on("focus",function(){
		$("#content .login .shoujihaoma input").val("");
		$("#content .login .yanzheng1").html("");
	})
		//-------------手机号码框失焦事件件---------------------------------
	$("#content .login .shoujihaoma input").on("blur",function(){
		var phone = $("#content .login .shoujihaoma input").val();
		if(phone == getCookie("phone")){//输入有效时
			
		}else{//输入无效时，提示用户输入有误
			$("#content .login .yanzheng1").html("<span style='color:#db3962;'>请输入有效手机号码</span>");
			$("#content .login .shoujihaoma input").val("11位数字");
		}
		
	})
	
	
		//-------------登录密码框得焦事件---------------------------------
	$("#content .login .denglumima input").on("focus",function(){
		$("#content .login .denglumima input").val("");
		$("#content .login .yanzheng2").html("");
	})
		//-------------登录密码框失焦事件---------------------------------
	$("#content .login .denglumima input").on("blur",function(){
		var pass = $("#content .login .denglumima input").val();
		if(pass == getCookie("pass")){//输入有效时
			
		}else{//输入无效时，提示用户输入有误
			$("#content .login .yanzheng2").html("<span style='color:#db3962;'>密码输入有误</span>");
			$("#content .login .denglumima input").val("6-20位必须包含字母数字");
		}
		
	})

	$("#content .login .denglu").click(function(){
		window.location.href = "../index.html";
	})
	

	
	
	
	
	
	
	

})