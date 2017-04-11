var contador = (function() {
	var valor = 0; //privado

	var incrementar = function() {
		valor++;
		funcaoPrivada();
	};

	var	reset = function() {
		console.log('Valor do contador: ', valor);
		valor=0;
	}

	function funcaoPrivada(){
		console.log('Funcao Privada...');
	}

	return { //tudo que está em return fica publico
		incrementar: incrementar,
		reset: reset
	}
}());

contador.incrementar();
contador.incrementar();
contador.reset();