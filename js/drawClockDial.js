function drawClockDial(cxt){
		cxt.translate(100,100);//移动中心


	for (var i = 0; i < 4; i++) {
	cxt.beginPath();
	cxt.lineWidth = 2;
	cxt.strokeStyle = "#fff";

	cxt.moveTo(0,-85);
	cxt.lineTo(0,-100);//12,9,6,3点

	cxt.moveTo(50,-87);
	cxt.lineTo(45,-78);//1,4,7,10点

	cxt.moveTo(86,-50);
	cxt.lineTo(80,-45);//2,5,8,11点

	cxt.stroke();
	cxt.rotate(Math.PI/2);//旋转90°

	};
	
	

	cxt.beginPath();
	cxt.strokeStyle = "#fff";
	cxt.lineWidth = 2;
	cxt.arc(0,0,3,0,2*Math.PI,true);
	cxt.stroke();//表中心
}