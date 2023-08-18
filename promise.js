/* Promise
    A promessa de algo irá acontecer
    Poderá dar certo ou errado, mas irá acontecer
*/
/* assíncronismo */

let aceitar = true;

console.log('pedir uber'); /* assíncronismo 1 */

/* declaração de uma constante que está invocando o objeto Promise */ /* assíncronismo 3, pois pode demorar um tempo para executar a função */
const promessa = new Promise((resolve, reject) => {
	if(aceitar){
		return resolve('pedido aceito');
	}
	
	return reject('pedido negado!');
});

console.log('aguardando'); /* assíncronismo 2 */

/* promessa que recebeu o objeto Promise recebe tambem os metodos desse objeto
o .then() é uma função que pega o resultado da promise caso ela seja bem-sucedida
ja o .catch() também é uma função que pega o resultado da promise caso ela seja mal-sucedida
e por fim o finally é uma função que irá mostrar para o usuário que a promise foi realizada, independente do resultado
result e erro são funções que recebem como parametro o valor de then e catch e imprime esses valores */
promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('Operação concluída')) /* "execução do assíncronismo 3" */
