var oStorage = window.localStorage;

function setData(alarmTime,countDown,pickInfo,isOn,hFlag,mFlag,dateFlag,index) {
			if(index == -1){//新建闹钟，添加数据
				if(getData()){
				var data = getData();
				data.push({"alarmTime":alarmTime,
					"countDown":countDown,
					"pickInfo":pickInfo,
					"isOn":isOn,
					"hFlag":hFlag,
					"mFlag":mFlag,
					"dateFlag":dateFlag}
				);
				}
				else{
				var data = [
					{"alarmTime":alarmTime,
					"countDown":countDown,
					"pickInfo":pickInfo,
					"isOn":isOn,
					"hFlag":hFlag,
					"mFlag":mFlag,
					"dateFlag":dateFlag}
				];
				
				}
			}
			else{//已有闹钟,修改data数据即可  
				var data = getData();
				data[index] = {"alarmTime":alarmTime,
					"countDown":countDown,
					"pickInfo":pickInfo,
					"isOn":isOn,
					"hFlag":hFlag,
					"mFlag":mFlag,
					"dateFlag":dateFlag}
			}
  		
			oStorage.setItem('data', JSON.stringify(data));
	
}

function deleteData(index){
	var data = getData();
	data.splice(index);
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

