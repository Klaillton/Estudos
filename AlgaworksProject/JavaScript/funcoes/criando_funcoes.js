
var soma = somar(2,3);
console.log('2 + 3 =', soma);

console.log('15 - 2 =', subtrair(15,2)); 
//a função subtrair não funciona
//por causa do hoisting que sobe as variaveis mas 
//não suas inicializações

//function declaration
function somar(a, b){
	return a+b;
}

//function expression
var subtrair = function(a,b){
	return a-b;
}
