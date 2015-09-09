	var cDial = document.getElementById("myClockDial");
	var cxtD = cDial.getContext("2d");
	var cHand = document.getElementById("myClockHand");
	var cxtH = cHand.getContext("2d");
	cxtH.translate(100,100);
	drawClockDial(cxtD);//绘制表盘
	//获取当前时间并输出

	var timeTxt = document.getElementById("timeTxt");
	function showDate(hours,minutes){
		if(hours<10){hours = "0"+hours}
	  if(minutes<10){minutes = "0"+minutes}
		timeTxt.innerHTML = hours+":"+minutes;
	}
	
	function refreshTime(){
		/*var currentDate = new Date();
		var currentTime={
			hours:currentDate.getHours(),
			minutes:currentDate.getMinutes(),
			seconds:currentDate.getSeconds()
		};*/
		var currentTime = getTimes();
		showDate(currentTime.hours,currentTime.minutes);//显示数字时钟
		//刷新表针	
		drawClockHand(cxtH,currentTime);
	}
	refreshTime();
	setInterval(refreshTime,500);