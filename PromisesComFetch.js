/* estou buscando dados atraves do fetch na api do github transformar a responsta em json, assim desencadeando varias etapas usando os metodos
.then() e .catch() para manipular dados e lidar com erros  */
fetch('https://api.github.com/users/maykbrito')
    .then(response => response.json())./* caso o resultado desse fetch seja efetuado com exito a arrow 
    function response recebe como argumento os dados desse fetch e o transforma em um objeto retornando uma promise */
    then(data => fetch(data.repos_url))./* caso a promise anterior de certo, a arrow function data irá executar um fetch que busca os dados na propriedade repos_url */
    then(res => res.json())./* caso a promise anterior de certo, a arrow function data irá receber os dados dela e irá transformar um um objeto */
    then(d => console.log(d))./* caso a promise anterior tambem de certo, a arrow function d irá receber como argumento esses dados e irá imprimir */
    catch(err => console.log(err));/* por fim caso de um erro em qualquer promise o catch irá capturar esse erro passando como argumento da função
    err e essa arrow function irá imprimir esse erro */
