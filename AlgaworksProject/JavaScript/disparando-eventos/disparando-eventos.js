$(function(){

	var atividade = $('#atividade');
	var listaAtividades = $('#listaAtividades');

	atividade.on('keyup', function(e){
		var keyCode = e.keyCode;

		if(keyCode === 13){
			//Disparar evento...
			atividade.trigger('enter', atividade.val());

			atividade.val('');
		}

	});

	atividade.on('enter', function(evento, texto){
		listaAtividades.prepend('<li>'+texto+'</li>');
	});

	atividade.on('enter', function(evento, texto){
		//Outra funcionalidade aqui
		console.log('Outra funcionalidade aqui');
	});

});