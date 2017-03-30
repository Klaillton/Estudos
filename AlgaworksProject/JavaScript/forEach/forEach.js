var nomes = ['joao', 'pedro', 'maria', 'jose'];

for (var i=0; i<nomes.length; i++){
	console.log('nomes[', i, ']=', nomes[i]);

}

nomes.forEach(function(e){ //e = elemento do array
 console.log(e);
});