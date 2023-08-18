//Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado){
    /* console.log(dado); */
    console.log(dado())
}
//A FUNÇÃO imprimirDado RECEBE COMO ARGUMENTO UMA OUTRA FUNÇÃO QUE RETORNA UMA STRING
//ASSIM QUANDO A FUNÇÃO imprimirDado() É EXECUTADA ELA EXECUTA O PARAMÊTRO QUE RECEBEU COMO ARGUMENTO UMA OUTRA FUNÇÃO

/* 
imprimirDado('Teste'); //String
imprimirDado(12); //Number
imprimirDado(true); //boolean
imprimirDado({cor: "white"}); //objeto
imprimirDado([1, 2, 3, 4, 5]); ///array
 */
imprimirDado(function (){
    return 'Olá mundo'
})