
function MessageHandler (){
	var $socket;
	var COUNTER;//= 0;
	


	this.handlers = {};
	this.eventListeners = {};

	this.registHandler = function( name, callback ) {
		this.handlers[ name ] = callback;
	};

	this.addEventListener = function( id, functor ) {
		this.eventListeners[ id ] = functor;
	};
	this.onopen = function() {
		var self = this.messageHandler;
		$socket.send( JSON.stringify( {
			id : self.COUNTER++,
			method : 'session.certify',
			params : {
				generatedId : ixeb2.property.generatedId()
			}
		} ) );

	}


	this.connect = function() {
		
		if(typeof ixeb2 != 'undefined' && typeof ixeb2.property != 'undefined' ){
			$socket = new WebSocket("ws://localhost:3616");
			$socket.onopen = this.onopen;
			$socket.onmessage = this.handler;
			$socket.messageHandler = this;	
		}
		
	}
	

	this.handler = function(  event  ) {
		var messageHandler = this.messageHandler;

		var response = JSON.parse(event.data);
		
		// console.log(response);
		var id			= response["id"];
		var method		= response["method"];

		if( typeof messageHandler.eventListeners[ id ] === "function" ) {
			// console.log( buffer );
			var functor = messageHandler.eventListeners[ id ];
			functor( response );
			delete messageHandler.eventListeners[ id ];
			return;
		}
		if(typeof id == 'undefined'){

			var domain = method.split(".")[0];
			var delegator = messageHandler.handlers[ domain ];
			if( typeof delegator   !=  "undefined" ) {
				delegator.invoke( method.split(".")[1] , response );
			}
			
		}

		// if( typeof messageHandler.handlers[ method ] === "function" ) {
		// 	var functor = messageHandler.handlers[ method ];
		// 	functor( method, response );
		// }
	};

	this.request = function( r , callback) {
		var self = this;
		console.log ( self , self.COUNTER);
		// console.log(r,'send');
		r.id = self.COUNTER++;
		return new Promise( function( resolve, reject ) {
			console.log ( self , r ,r.id);
			if( "undefined" != typeof r.id ) {
				self.addEventListener( r.id, function( res ) {
					// console.log(res);
					// resolve();
						if(callback && typeof callback == 'function'){
							callback(res)
						}
					

					
					// resolve( res );
				} );
			} else {
				reject( Error( "request id is not defined" ));
			}

			$socket.send(  JSON.stringify( r )  );
		} );
	};

	this.send = function(r){
		$socket.send( JSON.stringify(  r  )  );
	};

	this.construct = function() {
		var self = this;
		self.COUNTER = 0;
//		console.log ( self , self.COUNTER);
	};


	this.construct();
};


var messageHandler;

(function() {

	messageHandler = new MessageHandler();
	messageHandler.connect();
	


})();

