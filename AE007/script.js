let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores =[]

function isNumero(n){
//verifica se o número é entre 1 e 100
    if(Number(n) >=1 && Number(n) <=100) {
        return true
    } else { 
        return false
    }
}

function inLista (n, l) {
//verifica se o número já está na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        res.innerHTML = ``
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value}`
        lista.appendChild(item)

    }else if(num.value.length == 0){
        alert('Digite um valor')
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')

    } 
    num.value = ' '
    num.focus()
    //colocar o foco no input num
}

function finalizar(){

    var maior = valores[0]
    var menor = valores[0]
    var tot  = valores.length
    var soma = 0
    var media = 0

    if(tot == 0){
        window.alert('Adicionar valores antes de finalizar.')
    }else{

    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
        maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
    }

media = soma / tot

    res.innerHTML = ' '
    res.innerHTML = ` <p>O número de elementos do conjunto é <strong>${tot}</strong></p>`
    res.innerHTML += `<p>O maior elemento do conjunto é o <strong>${maior}</strong></p>`
    res.innerHTML += `<p>O menor elemento do conjunto é o<strong> ${menor} </strong></p>`
    res.innerHTML += `<p>A soma dos elementos do conjunto é <strong>${soma}</strong>`
    res.innerHTML += `<p>A média dos valores dos elementos do conjunto é <strong>${media} </strong>`
}
}

   /*var maior = 0
    for (var i = 0;  i < valores.length; i++){
        if (valores[i] > maior){
            maior = valores[i]
        }
    }
    res.innerHTML += `<p>O maior elemento do conjunto é o <strong>${maior}</strong></p>`

    var menor = 0
    for (var i = 0;  i < valores.length; i++){
        if (valores[i] < menor){
            menor = valores[i]
        }
    }
    ///   for (var i = 0; i < tot; i++){
 //       soma += valores[i]
  //  }
    res.innerHTML += `<p>O menor elemento do conjunto é o<strong> ${menor} </strong></p>`
*/