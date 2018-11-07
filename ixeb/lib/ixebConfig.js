// ixeb 설정
window.ixebDefaultConfig = {
	progressBar: false,   // 화면 로딩 시 프로그래스바 표시 여부
	theme: "basic",      // 컨트롤 테마 파일 경로명, themes/FOLDER_NAME
	debugLevel: "ERROR", // INFO, WARN, ERROR, NONE
	defaultProperty: {}
};
if(typeof window.ixebConfig === 'object') {
	for(var key in window.ixebConfig) {
		if(window.ixebConfig.hasOwnProperty(key)) {
			window.ixebDefaultConfig[key] = window.ixebConfig[key];
		}
	}
}
window.ixebConfig = window.ixebDefaultConfig;



//---------------------------------------------------------------
// 필요한 라이브러리 Include 설정 (js, css)
//
// ! ixebBase.js, ixebConfig.js는 모두 동일 폴더에 위치해야 한다.
// ! 파일 경로는 ixebBase.js에서의 상대경로로 설정한다.

$IXEB_REQUIRED_LIBS_EXT = [
	"../ext/jquery/2.2.1/jquery-2.2.1.min.js"
	,"../ext/bowser/1.0.0/bowser.min.js" // Browser check library
	,"../ext/jquery.mousewheel/3.1.13/jquery.mousewheel.min.js" // common event
	,"../ext/attrchange/2.0.1/js/attrchange.min.js" // common event
	,"../ext/jquery-ui/1.11.4/jquery-ui.min.js" // Slider, Spinner, Progress, Popup
	,"../ext/jquery-circle-progress/1.1.3/circle-progress.min.js" // Progress(circle)
	,"../ext/jquery/2.2.1/contextMenu/jquery.contextMenu.min.js"
	,"../ext/jstree/3.3.1.0/jstree.min.js" // Tree
	// ,"../ext/colorpicker/23.05.2009/js/colorpicker.js" // Tool 속성창에서만 사용되므로 Tool에서 직접 Include하도록 !
	// ,"../ext/colorpicker/23.05.2009/js/eye.js" // Tool 속성창에서만 사용되므로 Tool에서 직접 Include하도록 !
	// ,"../ext/colorpicker/23.05.2009/js/utils.js" // Tool 속성창에서만 사용되므로 Tool에서 직접 Include하도록 !
	// ,"../ext/chartjs/2.6.0/dist/Chart.bundle.min.js"
	,"../ext/jszip/2.6.1/jszip.min.js" // xlsx.js, dataludi xlsx가 2.X 버전을 사용함. 3.X에서는 오류.
	,"../ext/xlsx/0.8.0/xlsx.min.js"
	,"../ext/jquery.msgbox/jquery.msgBox.min.js" // ixeb.alert, ixeb.error, ixeb.confirm
	,"../ext/fontfaceobserver/2.0.13/fontfaceobserver.js"
];

// Loading Progress Bar
window.paceOptions = {
	catchupTime: 100,
	initialRate: .03,
	minTime: 100, // minTime: 250,
	ghostTime: 0, // ghostTime: 100,
	maxProgressPerFrame: 20,
	easeFactor: 1.25,
	startOnPageLoad: true,
	restartOnPushState: true,
	restartOnRequestAfter: 500,
	target: 'body',
	// elements: false,
	elements: {
		checkInterval: 100,
		selectors: ['body']
	},
	// eventLag: false,
	eventLag: {
		minSamples: 10,
		sampleCount: 3,
		lagThreshold: 3
	},
	ajax: false,
	// ajax: {
	// 	trackMethods: ['GET'],
	// 	trackWebSockets: true,
	// 	ignoreURLs: []
	// }
};

if(window.ixebConfig.progressBar === false) {
	// 아래처럼 해도 프로그레스바를 숨길수 있지만,
	// 아예 include를 안하는 것이 더 좋을 듯.
	// window.paceOptions = $.extend(window.paceOptions, {
	// 	target: false
	// });
} else {
	$IXEB_REQUIRED_LIBS_EXT.push("../ext/pace/1.0.2/pace.min.js");
}
//--END// Loading Progress Bar

if($IXEB_LIB_IS_MIN_VERSION){
	$IXEB_REQUIRED_LIBS = [
		"ixeb-all.min.js"
	];
}
else {
	$IXEB_REQUIRED_LIBS = [
		"ixebFn.js"
		,"ixebComm.js"
		,"ixebContextMenu.js"
		,"ixebUtil.js"
		,"ixebApplication.js"
		,"ixebCommonMember.js"
		,"ixebFrame.js"
		,"ixebInit.js"
		,"components/ixebGroup.js"
		,"components/ixebAccordion.js"
		,"components/ixebButton.js"
		,"components/ixebCalendar.js"
		,"components/ixebCombo.js"
		,"components/ixebContextMenu.js" //?
		,"components/ixebDataset.js"
		,"components/ixebDataMap.js"
		,"components/ixebIOmap.js"
		,"components/ixebGrid.js"
		,"components/grid/cell.js" //?
		,"components/grid/column.js" //?
		,"components/grid/hashmap.js" //?
		,"components/grid/header.js" //?
		,"components/grid/panel.js" //?
		,"components/grid/row.js" //?
		,"components/ixebListbox.js"
		,"components/ixebProgress.js"
		,"components/ixebSlider.js"
		,"components/ixebSpinner.js"
		,"components/ixebSwitch.js"
		,"components/ixebTabs.js"
		// ,"components/ixebTooltip.js" // jino 2017-05-31 기능이 없어 제거. ixeb.util.showTooltip(), hideTooltip()으로 구현되었음.
		,"components/ixebEdit.js"
		,"components/ixebTableLayout.js"
		,"components/ixebTree.js"
		,"components/ixebCheck.js"
		,"components/ixebRadio.js"
		// ,"components/ixebPopup.js" // jino 2017-05-31 사용이 없어서 제거. 기능도 정상 동작 안함.
		,"components/ixebScheduler.js"
		,"components/ixebSimpleGrid.js"
		,"components/ixebText.js"
		,"components/scrollbar.js" //?
		,"components/toolbar.js" //?
		,"components/ixebMenu.js"
		,"components/ixebPicture.js"
		,"components/ixebMultiLineEdit.js"
		,"components/ixebMaskEdit.js"
		,"components/ixebGrid2.js" //?
		,"components/ixebTreeGrid.js"
		//,"components/ixebGrid3.js" //?
		,"components/ixebPanel.js"
		,"components/ixebLineChart.js"
		,"components/ixebPieChart.js"
		,"components/ixebBarChart.js"
		,"components/ixebFromToCalendar.js"
		// 전장표 컨트롤
		,"components/ixebVEdit.js"
		,"components/ixebVText.js"
		// X10에서 사용되는 script (x10에 임베딩하면서 이곳에서 제거)
		// ,"RemoteObject.js"
		// ,"COMInvoker.js"
		// ,"DirectMessage.js"
		// ,"LegacyObject.js"
		//Custom
		//,"custom/inzentButton.js"
		//	,"window.js"
	];
}

// 외부 컨트롤 로딩
if(ixeb.userControl && Array.isArray(ixeb.userControl.config) && ixeb.userControl.config.length > 0) {
	ixeb.userControl['componentNames'] = [];
	for(var i=0; i<ixeb.userControl.config.length; i++) {
		var c = ixeb.userControl.config[i];
		if(c.path) {
			$IXEB_REQUIRED_LIBS.push("../lib_user/"+c.path);
		}
		if(c.tagname) {
			ixeb.userControl['componentNames'].push(c.tagname);
		}
	}
} else {
	ixeb.userControl = {
		componentNames: [],
		config: []
	};
}

$IXEB_REQUIRED_FONT_CSSES = [
	"../ext/font-awesome/4.6.3/css/font-awesome.min.css"
	, "../ext/font-nanum/font-nanum.css"
];

// document.write('<script type="text/javascript" src="'+$IXEB_LIB_ROOT+'../ext/webfontloader/1.6.28/webfontloader.js"></script>');
// document.write('<script type="text/javascript">WebFont.load({custom: {families: ["NanumGothic", "FontAwesome"],urls: [$IXEB_LIB_ROOT+"../ext/font-nanum/font-nanum.css", $IXEB_LIB_ROOT+"../ext/font-awesome/4.6.3/css/font-awesome.min.css"]}});</script>');

$IXEB_REQUIRED_CSSES = [
	"../ext/jquery-ui/1.11.4/jquery-ui.min.css"
	, "../ext/jquery/2.2.1/contextMenu/jquery.contextMenu.W.css"
	, "../ext/jstree/3.3.1.0/themes/proton/style.min.css"
	// , "../ext/colorpicker/23.05.2009/css/colorpicker.css" // Tool 속성창에서만 사용되므로 Tool에서 직접 Include하도록 !
	, "../ext/jquery.msgbox/msgBoxLight.css" // ixeb.alert, ixeb.error, ixeb.confirm
];



$IXEB_REQUIRED_CSSES_THEME = [
	// Theme 여긴 ixeb에서 정의한 것들...
	"../themes/reset.css"
	, "../themes/"+window.ixebConfig.theme+"/theme.css"
];

if($IXEB_DESIGN_MODE == true) {
	$IXEB_REQUIRED_CSSES_THEME.push("../themes/designer.css");
}

//---------------------------------------------------------------
// Component의 속성 Default 값을 재정의한다.
// ixebBase.js에서 read 용도로 사용하므로 객체 복사할 필요가 없음
// $IXEB_PROPERTY_DEFAULT = $.extend({},window.ixebDefaultConfig['defaultProperty']);
$IXEB_PROPERTY_DEFAULT = window.ixebDefaultConfig['defaultProperty'];
//---------------------------------------------------------------







// 아래 내용은 수정하지 마세요!
// 위 $IXEB_REQUIRED_LIBS, $IXEB_REQUIRED_CSSES 에 설정된 참조 파일을 Include
(function(){
	// web-fonts 먼저 로딩
	for(var i in $IXEB_REQUIRED_FONT_CSSES) {
		ixeb.util.includeCssFile($IXEB_LIB_ROOT + $IXEB_REQUIRED_FONT_CSSES[i], {includeByIxebScript: true});
	}
	
	// jQuery
    var jQueryLibrary = $IXEB_REQUIRED_LIBS_EXT.splice(0,1);
	if(typeof $ == 'undefined') {
		ixeb.util.includeScriptFile($IXEB_LIB_ROOT + jQueryLibrary, {includeByIxebScript: true});
	}
    
	for(var i in $IXEB_REQUIRED_CSSES) {
		ixeb.util.includeCssFile($IXEB_LIB_ROOT + $IXEB_REQUIRED_CSSES[i], {includeByIxebScript: true});
	}
	for(var i in $IXEB_REQUIRED_CSSES_THEME) {
		ixeb.util.includeCssFile($IXEB_LIB_ROOT + $IXEB_REQUIRED_CSSES_THEME[i], {includeByIxebScript: true});
	}
	//include all components
	for(var i in $IXEB_REQUIRED_LIBS_EXT) {
		ixeb.util.includeScriptFile($IXEB_LIB_ROOT + $IXEB_REQUIRED_LIBS_EXT[i], {includeByIxebScript: true});
	}

	for(var i in $IXEB_REQUIRED_LIBS) {
		ixeb.util.includeScriptFile($IXEB_LIB_ROOT + $IXEB_REQUIRED_LIBS[i], {includeByIxebScript: true});
	}

	document.write('<script type="text/javascript" src="'+$IXEB_LIB_ROOT+'../ext/requirejs/2.3.3/require.min.js" data-includebyixebscript></script>');
	document.write('<script type="text/javascript" src="'+$IXEB_LIB_ROOT+'require.config.js" data-includebyixebscript></script>');
	// document.write('<script type="text/javascript" data-main="'+$IXEB_LIB_ROOT+'require.config.js" src="'+$IXEB_LIB_ROOT+'../ext/require.js"></script>');
})();
