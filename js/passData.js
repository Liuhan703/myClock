var oStorage = window.localStorage;

function setData(data, num) {
	oStorage.setItem('data' + num, JSON.stringify(data));
}

function setNum(num) {
	oStorage.setItem('num', JSON.stringify(num));
}

function getData(num) {
	return
	JSON.parse(oStorage.getItem('data' + num));
}

function getNum() {
	return
	JSON.parse(oStorage.getItem('num'));
}