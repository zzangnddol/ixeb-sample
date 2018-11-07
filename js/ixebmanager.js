function getRootUrl() {
	var result = "";
	var sUrl = window.location.href.split('/');
	
	//툴에서 미리보기 실행 시
	if(sUrl[2].indexOf('localhost:9999') >= 0) {
		result = "http://localhost:8080";
	}
	else {
		// 아래 없어도 됨. 기본은 같은 Context
		// result = arr[0] + "//" + arr[2];
	}

	return result;
}