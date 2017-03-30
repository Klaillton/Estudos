var acessorio = { som: 'Pioneer', banco: 'Couro' };

var ligar = function(a) {
	console.log('Ligando o carro...', a);
}

var fox =  [ 'fox', 4, acessorio,  ligar];

console.log(fox);

console.log(fox[2].som);
fox[3]('agora!');

//é possivel colocar qualquer estrutura dentro do array,
// inclusive outro array