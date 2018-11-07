requirejs.config({
	baseUrl: $IXEB_LIB_ROOT + "../ext",
	paths: {
		// Local PC에서는 iXeb Studio 개발자용 라이센스 로딩
		// 서버용으로 발급받은 Grid 라이센스는 dataludi-lic.js 로 이름을 변경하여 ext/dataludi/ 폴더에 배포한다.
		"dataludi-lic": (location.protocol == "file:" || (location.protocol == "http:" && location.host.indexOf("localhost") == 0)) ? "dataludi/dataludi-lic-studio" : "dataludi/dataludi-lic",
		
		// 1. 서버용 정식 라이센스를 발급 받았을 경우 (일반적인 경우)
		"dataludi"    : "dataludi/1.4.3.16248/smart-datagrid.min",
		// 2. 개발서버용 Trial 라이센스를 테스트서버에 설치하여 개발 중일 경우
		// "dataludi"    : (location.protocol == "file:" || (location.protocol == "http:" && location.host.indexOf("localhost") == 0)) ? "dataludi/1.4.3.16248/smart-datagrid.min" : "dataludi/1.4.3.16248/smart-datagrid-eval.min",
		
		"chartjs"     : "chartjs/2.6.0/dist/Chart.bundle.min"
	},
	shim: {
		"dataludi": {
			deps: ["dataludi-lic"]
		}
	}
});
