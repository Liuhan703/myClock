var mFlag=0;var hFlag = 0;
var dateFlag = [0,0,0,0,0,0,0];
var alarmTime,countDown,pickInfo,isOn;

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
	if(document.addEventListener){document.addEventListener('DOMMouseScroll',timeSet,false);}
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

function confirm(){
	var hours = (hFlag == 23)?0:hFlag+1;
	var minutes = (mFlag == 59)?0:mFlag+1;

	
	//先判断选择日期
	var dateTmp1 = 1;var dateTmp0 = 0;var dateTmp3 = 0;//临时变量
	var pickInfo = "周";
	for(var i = 0;i<7;i++){

		if(dateFlag[i] == 1){//选中了某天

			switch (i){
				case 0:
					pickInfo = pickInfo+"日  ";dateTmp3 --;break;
				case 1:

					pickInfo = pickInfo+"一  ";dateTmp3 ++;break;
				case 2:
					pickInfo = pickInfo+"二  ";dateTmp3 ++;break;
				case 3:
					pickInfo = pickInfo+"三  ";dateTmp3 ++;break;
				case 4:
					pickInfo = pickInfo+"四  ";dateTmp3 ++;break;
				case 5:
					pickInfo = pickInfo+"五  ";dateTmp3 ++;break;
				case 6:
					pickInfo = pickInfo+"六  ";dateTmp3 --;break;

			}
		}
		dateTmp1 = dateTmp1*dateFlag[i];
		dateTmp0 = dateTmp0+dateFlag[i];	
	}
	if(dateTmp1){//每天都选了
		pickInfo = "每天";
	}
	if(dateTmp0 == 0){//一天也没选
		pickInfo = "仅一次";
	}
	if(dateTmp3 == 5){//工作日
		pickInfo = "工作日";
	}

	//获取倒计时时间
	var dTime = timeDvalue(hours,minutes);
	//如果设置为当前时间，改为23h59m
	if (dTime.hours == 0 && dTime.minutes == 0){
		 	dTime.hours = 23;
		 	dTime.minutes = 59;
		 }
	
	else if(dTime.hours == 0){
		countDown = dTime.minutes+"分钟";
	}
	else if(dTime.minutes == 0){
		countDown = dTime.hours+"小时";
	}
	
	else{
		countDown = dTime.hours+"小时"+dTime.minutes+"分钟";
	}

	//获取设置的时间
	if(hours<10){hours = "0"+hours}
	if(minutes<10){minutes = "0"+minutes}
	alarmTime = hours+":"+minutes;
	isOn = "on";

  setData(alarmTime,countDown,pickInfo,isOn,hFlag,mFlag,dateFlag);
}


