function FuncWindow(){

	// var $handler;
	var callbacks = [];

	this.create = function( option , callback , data) {
		if(typeof data != 'undefined'){
			if(typeof data == 'object'){
				data = JSON.stringify(data);
			}
			var strURLParam = encodeURI(data);
			option.url += '?data='+strURLParam;
		}
		if(typeof siroo !== 'undefined' &&siroo.property){
			messageHandler.request(  {
				method : 'windows.create',
				params : option
			} , callback );	
		}else{
			window.open(option.url,'',{'width':option.width,'height':option.height});
		}
		

		// console.log(this.$handler);
	};

	this.invoke = function( target , response ) {
		var objTarget = this[ target.toLowerCase() ];
		if( typeof objTarget != 'undefined' ) {
			var arrCallbacks = objTarget.callbacks;
			if( typeof arrCallbacks != 'undefined' && Array.isArray(arrCallbacks) ){
				for( var i =0; i<arrCallbacks.length; i++ ) {
					var func = arrCallbacks[i];
					if( typeof func != 'undefined' && typeof func == 'function'  ){
						func(response);
					}
				}
			}
		}
	};

	this.onCreated = function (){

		if( typeof this.oncreated != 'undefined' ) {
			return this.oncreated
		}else{
			this.oncreated = 	{ 
							callbacks : [],
							addListener : function(callback){ 
								this.callbacks.push(callback); 
							} 
						}
			return this.oncreated;
		}
	}

	this.onRemoved = function (){

		if( typeof this.onremoved != 'undefined' ) {
			return this.onRemoved
		}else{
			this.onremoved = 	{ 
							callbacks : [],
							addListener : function(callback){ 
								this.callbacks.push(callback); 
							} 
						}
			return this.onremoved;
		}
	}

	this.onFocusChanged = function (){

		if( typeof this.onfocuschanged != 'undefined' ) {
			return this.onfocuschanged
		}else{
			this.onfocuschanged = 	{ 
							callbacks : [],
							addListener : function(callback){ 
								this.callbacks.push(callback); 
							} 
						}
			return this.onfocuschanged;
		}
	}

	// this.onCreated = {

	// 	addListener : function( callback ){
	// 		// console.log('this',this);
	// 		// console.log('$this', $(this) );
	// 		$(this).on('custom', function(){
	// 			if( callback && typeof callback == 'function'){
	// 				callback();
	// 			}
	// 		})
	// 	}
	// }
};

if( typeof ixeb2 != 'undefined' && typeof ixeb2 == 'object'){
	ixeb2['windows'] = {};
}else{
	ixeb2 = { windows : {} };
}
(function() {
	ixeb2.windows = new FuncWindow();
	// messageHandler;
	if(typeof messageHandler != 'undefined' && typeof messageHandler.registHandler == 'function' ) {
		messageHandler.registHandler("windows",  ixeb2.windows );
	}
	// = new MessageHandler();
	//messageHandler.connect();
	


})();

