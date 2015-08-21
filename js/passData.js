var oStorage = window.localStorage;

function setData(alarmTime,countDown,pickInfo,isOn,hFlag,mFlag,dateFlag,index) {
			if(index == -1){//新建闹钟，添加数据
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
			}
			else{//已有闹钟,修改data数据即可  不过很麻烦的样子。。
				var data = getData();
				var alarmTimes = data["alarmTime"].split(",");
				alarmTimes[index] = alarmTime;
				var countDowns = data["countDown"].split(",");
				countDowns[index] = countDown;
				var pickInfos = data["pickInfo"].split(",");
				pickInfos[index] = pickInfo;
				var isOns = data["isOn"].split(",");
				isOns[index] = isOn;
				var hFlags = data["hFlag"].split(",");
				hFlags[index] = hFlag;
				var mFlags = data["mFlag"].split(",");
				mFlags[index] = mFlag;
				var dateFlags = data["dateFlag"].split(" ");
				dateFlags[index] = dateFlag;

				data["alarmTime"] = alarmTimes.join(",");
				data["countDown"] = countDowns.join(",");
				data["pickInfo"] = pickInfos.join(",");
				data["isOn"] = isOns.join(",");
				data["hFlag"] = hFlags.join(",");
				data["mFlag"] = mFlags.join(",");
				data["dateFlag"] = dateFlags.join(" ");
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

