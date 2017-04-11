function Carro(nome, placa) {
	this.nome = nome;
	this.placa = placa;
}

var fox = {};
var gol = {};
Carro.call(fox, 'Fox', 'AAA-1111');

console.log('Fox', fox);

Carro.apply(gol, ['gol', 'AAA-2222']);

console.log('Gol', gol);