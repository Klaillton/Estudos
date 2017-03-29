var percentualImposto = 0.15;

var totalImposto = valor * percentualImposto;

console.log('total de Imposto a pagar', totalImposto);

var valor = 100;

//Hoisting = 
/*Leva todas as variaveis para 
	o inicio do arquivo mas não leva as atribuições, por isso
	ao executar esse arquivo vai dar erro*/
/**
var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;

console.log('total de Imposto a pagar', totalImposto);


*/