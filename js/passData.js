var oStorage = window.localStorage;

function setData(alarmTime,countDown,pickInfo,isOn) {
	if(getData()){
		var data = getData();
		data["alarmTime"] = data["alarmTime"] + "," + alarmTime;
		data["countDown"] = data["countDown"] + "," + countDown;
		data["pickInfo"] = data["pickInfo"] + "," + pickInfo;
		data["isOn"] = data["isOn"] + "," + isOn;
	}
	else{
		var data = {};
		data["alarmTime"] = alarmTime;
		data["countDown"] = countDown;
		data["pickInfo"] = pickInfo;
		data["isOn"] = isOn;
	}


	oStorage.setItem('data', JSON.stringify(data));
}


function getData() {
	return JSON.parse(oStorage.getItem('data' ));
}

function clearData(){
	oStorage.clear();
}

