
var  num1 = document.getElementById('n1')
var  num2 = document.getElementById('n2')
var resposta = ' '
var mostrar = document.getElementById('res')
var sinal = ' '


function soma(){
sinal = 0
}

function subtracao(){
    sinal = 1
}

function multiplicacao(){
    sinal = 2
}

function divisao(){
    sinal = 3
}
function ig(){

    switch(sinal){
        case 0:
        resposta = Number(num1.value) + Number(num2.value)
        mostrar.innerHTML = `${resposta}`
        break

        case 1:
            resposta = num1.value - num2.value
            mostrar.innerHTML = `${resposta}`
            break

        case 2:
            resposta = num1.value * num2.value
            mostrar.innerHTML = `${resposta}`
            break

            case 3:
                resposta = num1.value / num2.value
                mostrar.innerHTML = `${resposta}`
                break

    }
    let usar = document.createElement('button')
    usar.id = 'usa'
    usar.value = 'Utilizar valor?'
    res.appendChild()
    
}
