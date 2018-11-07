ixeb.userControl = (ixeb.userControl) ? ixeb.userControl : {};
ixeb.userControl.config = [
	//
	// 생성시 입력 받은 name 값을 변환하여, 아래와 같은 명명규칙으로 컨트롤을 생성한다.
	//
	// name에서 허용문자(영문자, 숫자, _, -)만을 취해 명명규칙에 사용. (=> NAME)
	//     {NAME} = name.replace(/[^-_A-Za-z0-9]/g, '');
	//
	// ClassName = __base_Ixeb{NAME}
	// tagname   = i-{NAME.toLowerCase()}
	// filename  = {NAME.toLowerCase()}.js
	//
	// 예:
	// {
	// 	 name	: 'WebBrowser'
	// 	,tagname: 'i-webbrowser'
	// 	,path	: 'webbrowser.js'
	//	,visible: false
	// 	,icon	: ''
	// }
];