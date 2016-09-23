$(function(){
//---------------------------------纵向导航栏----------------------------------
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
	$("#content .register .shoujihaoma input").val("11位数字");
	$("#content .register .duanxinyanzheng input.l").val("6位数字");
	$("#content .register .mima input").val("6-20位必须包含字母数字");
	$("#content .register .queren input").val("6-20位必须包含字母数字");
	
		//-------------手机号码框得焦事件---------------------------------
	$("#content .register .shoujihaoma input").on("focus",function(){
		$("#content .register .shoujihaoma input").val("");
		$("#content .register .yanzheng1").html("");
	})
		//-------------手机号码框失焦事件---------------------------------
	$("#content .register .shoujihaoma input").on("blur",function(){
		var phone = $("#content .register .shoujihaoma input").val();
		if(validatemobile(phone)){//输入有效时
			setCookie("phone",phone,setCookie(7),"/");
		}else{//输入无效时，提示用户输入有误
			$("#content .register .yanzheng1").html("<span style='color:#db3962;'>请输入有效手机号码</span>");
			$("#content .register .shoujihaoma input").val("11位数字");
		}
	})
	
	function validatemobile(phone){//正则表达式判断手机号码
		if((/^1[3|4|5|8][0-9]\d{8}$/.test(phone))){
			return true;
		}else{
			return false;
		}
	}
		//-------------验证码输入框得焦事件---------------------------------
	$("#content .register .yanzhengma input").on("focus",function(){
		$("#content .register .yanzhengma input").val("");
		$("#content .register .yanzheng2").html("");
	})
		//-------------验证码输入框失焦事件---------------------------------
	$("#content .register .yanzhengma input").on("blur",function(){
//		var num = $("#content .register .yanzhengma input").val();
//		if(){//输入有效时
//			
//		}else{//输入无效时，提示用户输入有误
//			$("#content .register .yanzheng2").html("<span style='color:#db3962;'>您输入的验证码不正确,请重新输入</span>")
//		}
	})
	
	
//	$("#content .register .yanzhengma .huanyizhang").click(function(){
//		
//	})
	
	
	
		//-------------短信验证框得焦事件---------------------------------
	$("#content .register .duanxinyanzheng input.l").on("focus",function(){
		$("#content .register .duanxinyanzheng input.l").val("");
		$("#content .register .yanzheng3").html("");
	})
		//-------------短信验证框失焦事件---------------------------------
	$("#content .register .duanxinyanzheng input.l").on("blur",function(){
		var num = $("#content .register .duanxinyanzheng input.l").val();
		if(validateyanzheng(num)){//输入有效时
			
		}else{//输入无效时，提示用户输入有误
			$("#content .register .yanzheng3").html("<span style='color:#db3962;'>短信验证为6位数字</span>");
			$("#content .register .duanxinyanzheng input.l").val("6位数字");
		}
		
	})
	function validateyanzheng(num){//正则表达式判断验证码
		if(/\d{6}/.test(num)){
			return true;
		}else{
			return false;
		}
	}
		//-------------密码设置框得焦事件---------------------------------
	$("#content .register .mima input").on("focus",function(){
		$("#content .register .mima input").val("");
		$("#content .register .yanzheng4").html("");
	})
		//-------------密码设置框失焦事件---------------------------------
	$("#content .register .mima input").on("blur",function(){
		var pass = $("#content .register .mima input").val();
		if(validatepass(pass)){//输入有效时
			setCookie("pass",pass,setCookie(7),"/");
		}else{//输入无效时，提示用户输入有误
			$("#content .register .yanzheng4").html("<span style='color:#db3962;'>设置密码为6-20位必须包含字母和数字</span>");
			$("#content .register .mima input").val("6-20位必须包含字母数字");
		}
	})
	
	function validatepass(pass){//正则表达式密码是否有效
		if(((pass.length>=6)&&(pass.length<=20))&&(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(pass))){
			return true;
		}else {
			return false;
		}
	}
		//-------------密码确认框得焦事件---------------------------------
	$("#content .register .queren input").on("focus",function(){
		$("#content .register .queren input").val("");
		$("#content .register .yanzheng5").html("");
	})
		//-------------密码确认框失焦事件---------------------------------
	$("#content .register .queren input").on("blur",function(){
		var pass2 = $("#content .register .queren input").val();
		if(querenpass(pass2)){//输入有效时
			
		}else{//输入无效时，提示用户输入有误
			$("#content .register .yanzheng5").html("<span style='color:#db3962;'>密码输入有误，请重输</span>");
			$("#content .register .queren input").val("6-20位必须包含字母数字");
		}
	})
	function querenpass(pass2){//正则表达式判断二次密码输入是否正确
		if(pass2==getCookie("pass")){
			return true;
		}else{
			return false;
		}
	}

	$("#content .register .zhuce").click(function(){
		window.location.href = "login.html";
	})
	
	









})