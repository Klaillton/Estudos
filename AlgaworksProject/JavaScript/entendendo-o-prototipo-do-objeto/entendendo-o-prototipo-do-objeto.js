var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	__proto__: volks //não é recomendado por não fazer 
	//parte do padrão da especificação
}


var gol = Object.create(volks);

gol.nome = 'Gol';
gol.placa = 'AAA-2222';

/*var gol = {
	nome: 'Gol',
	placa: 'AAA-2222'
}*/

console.log('Fox', fox);
console.log('Gol', gol);

console.log(Object.getPrototypeOf(fox)===Object.getPrototypeOf(gol));

console.log('fox.fabricante:', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks); //mais usado

console.log('fox.fabricante ->', fox.fabricante);
console.log('gol.fabricante ->', gol.fabricante);

console.log('toString do fox: ', fox);