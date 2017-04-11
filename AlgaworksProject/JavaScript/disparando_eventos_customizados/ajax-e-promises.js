$(function(){
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method:'GET',
		dataType: 'jsonp' /*usa somente quando não está no mesmo dominio,
		é necessário uma função 'callback' configurada no servidor*/
	});
/*
promises são variaveis que aguardam o retorno de resposta das funções
que podem ser feitas em outros servidores.
como ao carregar a página, e ela tiver uma função que precisa buscar 
informação no banco de dados, por exemplo, para preencher combobox
a aplicação ficaria parada aguardando a resposta
ao adicionar a resposta para ser entregue a uma váriavel, a aplicação
pode continuar compilando enquanto aguarda a resposta do servidor
tornando a aplicação mais rápida.

*/
	resposta.done(function(estados){
		var comboEstado = $('#combo-estado');
		//comboEstado.empty();
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado){
			var optionEstado = 
				$('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	

	resposta.fail(function(){
		alert('Erro carregando estados do servidor!');
	});
});