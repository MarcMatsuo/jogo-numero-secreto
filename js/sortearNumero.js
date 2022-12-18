const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Numero secreto:', numeroSecreto);

const elementoMenorValor = document.getElementById("menor-numero");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-numero");
elementoMaiorValor.innerHTML = maiorValor;