function drawClockHand(cxt,time){
	var canvas = cxt.canvas;
	cxt.clearRect(-100,-100,canvas.offsetWidth, canvas.offsetHeight);//刷新画布  x,y.width,height


	secondDeg = time.seconds*Math.PI/30;
	minutesDeg = time.minutes*Math.PI/30+time.seconds*2*Math.PI/60/60;
	hoursof12 = time.hours>12?(time.hours-12):time.hours;
	hoursDeg = hoursof12*Math.PI/6+time.minutes*2*Math.PI/60/12;


	cxt.rotate(secondDeg);
	cxt.beginPath();
	cxt.lineWidth = 2;
	cxt.strokeStyle = "#f00";
	cxt.moveTo(0,-4);
	cxt.lineTo(0,-83);//秒针
	cxt.stroke();
	cxt.rotate(-secondDeg);

	cxt.rotate(minutesDeg);
	cxt.beginPath();
	cxt.strokeStyle = "#fff";
	cxt.moveTo(0,-4);
	cxt.lineTo(0,-80);//分针
	cxt.stroke();
	cxt.rotate(-minutesDeg);

	cxt.rotate(hoursDeg);
	cxt.beginPath();
	cxt.strokeStyle = "#fff";	
	cxt.moveTo(0,-4);
	cxt.lineTo(0,-45);//时针
	cxt.stroke();
	cxt.rotate(-hoursDeg);
}