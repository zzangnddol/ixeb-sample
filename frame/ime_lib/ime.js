function Ime(){

	// var $handler;

	this.change = function( option , callback) {

		messageHandler.request(  {
			// id : '0001',
		  	method : 'ime.change',
		  	params : {
		  		language : option
		  	}
		  } , callback );

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

	this.addEventListener = function ( eventName , callback ){

		$( this ).on( eventName , callback );

	}

	this.onChanged = function (){

		if( typeof this.onchanged != 'undefined' ) {
			return this.onchanged
		}else{
			this.onchanged = 	{ 
							callbacks : [],
							addListener : function(callback){ 
								this.callbacks.push(callback); 
							} 
						}
			return this.onchanged;
		}
	}

	//this.
};
if(typeof ixeb2 == 'undefined') {
	ixeb2 = { ime : {} };
}else{
	if(ixeb2 && typeof ixeb2 == 'object'){	
		ixeb2['ime'] = {};
	}
}


// var i;
(function() {
	ixeb2.ime = new Ime();
	// messageHandler;
	messageHandler.registHandler("ime", ixeb2.ime);
	// = new MessageHandler();
	//messageHandler.connect();
	


})();

