const chalk = require('chalk')
const fs = require('fs');

//Função para tratar o erro, o throw ira lançar o Erro pelo objeto Error no parametro erro, que sera o dado recebido no readFile
function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretorio.'));//Mensagem de Erro opcional apenas para saber onde o erro foi encontrado em Portugues
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro);
            //Parece confuso a quantidade de vezes que erro se repete, mas funciona da
            //seguinte maneira, o erro chega atraves do parametro passado no readfile, é 
            //armazenado nele, então passa para a ser verificado no if, e se for true entra
            //no laço e executa a função erro passando o parametro erro que é o dado armazenado
            //do readFile
        }
        console.log(chalk.green(texto));
    });
}
pegaArquivo('./arquivos/texto-1.md');