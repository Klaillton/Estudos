var joao = {
	nome: 'Joao',
	idade: 25,
	email: 'teste@email.com',
	igualA: function(obj){
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: 27,
	email: 'teste@email.com'
}

console.log(joao === maria);

console.log('Joao e Maria tem os mesmos e-mails?', joao.igualA(maria));