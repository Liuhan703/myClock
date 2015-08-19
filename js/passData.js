var oStorage = window.localStorage;

function setData(alarmTime,countDown,pickInfo,isOn,hFlag,mFlag,dateFlag) {

  		if(getData()){
				var data = getData();
				data["alarmTime"] = data["alarmTime"] + "," + alarmTime;
				data["countDown"] = data["countDown"] + "," + countDown;
				data["pickInfo"] = data["pickInfo"] + "," + pickInfo;
				data["isOn"] = data["isOn"] + "," + isOn;
				data["hFlag"] = data["hFlag"] + "," + hFlag;
				data["mFlag"] = data["mFlag"] + "," + mFlag;
				data["dateFlag"] = data["dateFlag"] + " " + dateFlag;
			}
			else{
				var data = {};
				data["alarmTime"] = alarmTime;
				data["countDown"] = countDown;
				data["pickInfo"] = pickInfo;
				data["isOn"] = isOn;
				data["hFlag"] = hFlag.toString();
				data["mFlag"] = mFlag.toString();
				data["dateFlag"] = dateFlag.toString();
			}
			oStorage.setItem('data', JSON.stringify(data));
	
}


function getData() {
	return JSON.parse(oStorage.getItem('data' ));
}

function setNum(num){
	oStorage.setItem('num',num)
}
function getNum(){
	return oStorage.getItem('num');
}
function clearData(index){
	oStorage.clear();
}

