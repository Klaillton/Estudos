var Carro = function(nome, placa){
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW';
} //Ao criar função construtora usar letra maiuscula na funcao

var fox = new Carro('Fox', 'AAA-2222');
console.log('fox', fox);