function getTimes(){
		var currentDate = new Date();
		var currentTime = {
			hours:currentDate.getHours(),
			minutes:currentDate.getMinutes(),
			seconds:currentDate.getSeconds(),
		};
		return currentTime;
	}
function timeDvalue(hours,minutes){
		var currentTime = getTimes();
		var cHours = currentTime.hours;
		var cMinutes = currentTime.minutes;
		var dTime = {};
		if(hours == cHours){
			if(minutes == cMinutes){
				dTime['hours'] = 0;
				dTime['minutes'] = 0;
			}
			else if(minutes > cMinutes){
				dTime['hours'] = 0;
				dTime['minutes'] = minutes - cMinutes;
			}
			else if(minutes < cMinutes){
				dTime['hours'] = 23;
				dTime['minutes'] = 60 + minutes - cMinutes;
			}
		}
		if(hours > cHours){
			if(minutes == cMinutes){
				dTime['hours'] = hours - cHours;
				dTime['minutes'] = 0;
			}
			else if(minutes > cMinutes){
				dTime['hours'] = hours - cHours;
				dTime['minutes'] = minutes - cMinutes;
			}
			else if(minutes < cMinutes){
				dTime['hours'] = hours - cHours - 1;
				dTime['minutes'] = 60 + minutes - cMinutes;			
			}		
		}
		if(hours < cHours){
			if(minutes == cMinutes){
				dTime['hours'] = 24 + hours - cHours;
				dTime['minutes'] = 0;
			}
			else if(minutes > cMinutes){
				dTime['hours'] = 24 + hours - cHours;
				dTime['minutes'] = minutes - cMinutes;
			}
			else if(minutes < cMinutes){
				dTime['hours'] = 23 + hours - cHours;
				dTime['minutes'] = 60 + minutes - cMinutes;			
			}
		}
		return dTime;
	}