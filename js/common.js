function invoke  ( target, params, funcCallback){
	var type;
	if( typeof target !=undefined && typeof target.toString == 'function') {
		type = target.toString();
		if(type == '[object Window]'){
			var retVal = target.action(target.document,params);
//					console.log('retVal', retVal);
			funcCallback(retVal);
		} else if ( type == '[object HTMLIFrameElement]') {
			var retVal = target.contentWindow.action(target.contentWindow.document,params);
			funcCallback(retVal);
		} 
	}
}
function action  (doc,params){
	var target = $(doc).find(params.target);
	return target;
}

function openScreen ( screenInfo , option ){
	//new,change == > screenInfo = {"text":"입금*",url":"../screen_sample/deposite.html","parentLabel":"수신"}
	//modal,modaless ==> screenInfo = {url":"../screen_sample/deposite.html",width:'200px',height:'200px'}

	var tab = getFrame(), tabPage = [], url = screenInfo.url;
	
	tabPage.push("<i-tabpage title='" + screenInfo.text + "'>");
    tabPage.push('<div style="width:100%; height:100%;">');
    tabPage.push('<div class="head-title" style=" border-bottom: 5px solid #707686;vertical-align: middle;">');
    tabPage.push('<i-button style="border: none; width: 24px; height: 24px;" enableimage="./images/title-bullet-f.png"></i-button>');
    tabPage.push('<i-text text="' + screenInfo.parentLabel + '/"></i-text>')
    tabPage.push('<i-text text="&nbsp' + screenInfo.text + '" style="font-size: 23px; vertical-align: bottom;"></i-text>');
    tabPage.push('<i-button style="border: none; width: 20px; height: 24px;" enableimage="./images/title-bookmark-f.png"></i-button><div  style="display: inline-block; float:right;"><i-button style="border: none; width: 20px; height: 24px;" enableimage="./images/title-phone-f.png"></i-button><i-button style="border: none; width: 20px; height: 24px;" enableimage="./images/title-print-f.png"></i-button></div></div>');
    if (url != "" && url != undefined) {
		tabPage.push("<iframe style='height:100%; width:100%;' src =" + url + "></iframe>");
	}
    tabPage.push('</div></i-tabpage>');

	if(option == 'new'){
		tab.appendTabpage(tabPage.join(""));
		var index = tab.getPageCount();
        tab.setActiveTabpage(index - 1);

	}else if(option == 'change'){
		tab.activeAppendTabpage(tabPage.join(""));
	}else if(option == 'modal'){
		return ixeb.window.openModal(screenInfo);
	}else if(option == 'modaless'){
		return ixeb.window.openModaless(screenInfo);
	}
}

function getScreen (screenNo){
	var iframe; 
	if(window.parent == this){
		iframe =  $(document).find('iframe[src="'+screenNo+'"]').get(0);
	}else{
		iframe = $(getParent().document).find('iframe[src="'+screenNo+'"]').get(0);
	}
	if( typeof iframe != 'undefined' ) {
		return iframe.contentWindow;
	}else{
		return false;
	}
}
function closeScreen (screenNo){
	var tab = getFrame();
	if(screenNo==undefined){
		tab.removeTabpage( tab.getActiveTabpage());
	}else{
		var target = $(tab).find('iframe[src="'+screenNo+'"]').parents('i-tabpage');
		tab.removeTabpage( $(tab).find('i-tabpage').index(target) );
	}
}
function getFrame  (){
	return $( getParent().document ).find('#tabs0').get(0);
}
function getParent (){
	return window.top;
}
