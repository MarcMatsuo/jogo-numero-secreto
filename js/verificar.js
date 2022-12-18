function verificaNumeroValido(chute){
    const numero = +chute

    if (invalidaNumero(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if (numeroAlemDoPermitido(numero)){
        elementoChute.innerHTML += `<div>O numero escolhido deve ser entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></div>`
    }
}

function invalidaNumero(numero) {
    return Number.isNaN(numero)
}

function numeroAlemDoPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})
