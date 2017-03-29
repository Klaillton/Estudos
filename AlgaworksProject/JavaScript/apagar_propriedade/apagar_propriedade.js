var joao = {
	nome: 'Joao',
	idade: 25,
	endereco: {
		logradouro: 'Av. Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

console.log(joao);
delete joao.idade;
console.log(joao);