//-------------------获取CSS属性函数----------------------
function getStyle(obj,attr){//参数为 对象，属性名
if(obj.currentStyle){
	return obj.currentStyle[attr];
}else{
	return getComputedStyle(obj,false)[attr];
	}
}
//css中使用“——”连接的属性，在js中使用小驼峰表示 font-size 变为fontSize
//-----------------开始运动函数-----------------------
var timer = null;
function startMove(obj,target,attr,fn){//fn为链式运动的函数
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;//定义一个变量cur接收各种属性的当前值
		if(attr == 'opacity'){//如果属性为opacity
			//opacity初始值为0.4 ，把这个值*100
			cur = parseInt(parseFloat(getStyle(obj,attr))*100);
		}else{
			cur = parseInt(getStyle(obj,attr));//其他属性
		}
		var speed = (target - cur)/8;//定义缓冲运动的速度
		speed = speed > 0?Math.ceil(speed):Math.floor(speed);
		
		if(target == cur){
			clearInterval(obj.timer);
			if(fn){//在停止一个计时器后，判断是否有下一个运动，有则运行 (链式运动)
				fn();
			};
			
		}else{
			if(attr == 'opacity'){//如果属性为opacity时
				obj.style.filter = "alpha(opacity=" + (cur + speed) +")" ;
				obj.style.opacity =  (cur + speed)/100 ;//定义obj的透明度
			}else{
				obj.style[attr] = cur + speed + "px";//定义obj的其他属性
			}
		}
	},30);
}