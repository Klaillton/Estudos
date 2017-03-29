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

console.log('Cidade do joao:', joao.endereco.cidade);

joao.endereco.numero = 101;

console.log(joao);

console.log('cep do joao:', joao.endereco.cep);

console.log('Estado', joao['endereco']['estado']);//acesso dinâmico