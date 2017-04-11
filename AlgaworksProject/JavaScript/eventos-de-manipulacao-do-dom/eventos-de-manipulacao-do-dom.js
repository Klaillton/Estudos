$(function(){

	$('#botao1').on('click', function(e){
		console.log('Botao um clicado');
	});

	$('#link1').on('click', function(e){
		console.log('Click um clicado');
		e.preventDefault();
	});

	$('#input1').on('keyup', function(e){
		console.log(e.keyCode);
		if(e.keyCode === 13){
			alert('Enter pressionado!');
		}
	});

});
