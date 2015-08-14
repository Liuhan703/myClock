var mFlag=0;var hFlag = 0;
var dateFlag = [0,0,0,0,0,0,0];
var data=new Array();

var hoursEle = document.getElementById("hoursBox");
var minutesEle = document.getElementById("minutesBox");

function timeSet(e){
  //鼠标滚轮监听
  e = e||window.event;
  if(e.wheelDelta){
  	var delta = e.wheelDelta;
  }
  else if(e.detail){
  	var delta = e.detail;
  }
	if(e.clientY>78&&e.clientY<280){
		if(e.clientX>555&&e.clientX<615){
			var ele = hoursEle;
			if(delta<0){
			hFlag = hFlag>22?0:hFlag+1;
			}
			else{
			hFlag = hFlag<1?23:hFlag-1;
			}
			ele.style.webkitTransform = "translateY(-"+hFlag*60+"px)";
		}
		else if(e.clientX>760&&e.clientX<820){
			var ele = minutesEle;
			if(delta<0){
			mFlag = mFlag>58?0:mFlag+1;
			}
			else{
			mFlag = mFlag<1?59:mFlag-1;
			}
			ele.style.webkitTransform = "translateY(-"+mFlag*60+"px)";
		}
	}	
}
	/*注册事件*/
	//if(document.addEventListener){document.addEventListener('DOMMouseScroll',timeSet,false);}
	//window.onmousewheel=
	document.onmousewheel=timeSet;


function repeatDate(ele,date){
	if(dateFlag[date] == 0){
		ele.style.color = "#fff";
		ele.style.backgroundColor = "#D1762E";
		ele.style.border = "none";
		dateFlag[date] = 1;
	}
	else{
		ele.style.color = "#ccc";
		ele.style.backgroundColor = "#fff";
		ele.style.border = "1px solid #ccc";
		dateFlag[date] = 0;
	}
}


