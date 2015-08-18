function drawClockHand(cxt,time){
	cxt.clearRect(-100,-100,200,200);//刷新画布


	secondDeg = time.seconds*Math.PI/30;
	minutesDeg = time.minutes*Math.PI/30;
	hoursof12 = time.hours>12?(time.hours-12):time.hours;
	hoursDeg = hoursof12*Math.PI/6;


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