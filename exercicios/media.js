var res = window.document.querySelector('div#res')
var num = window.document.querySelector('input#num')
var str = []
var tabEs = window.document.querySelector('select#tabEsq')
var tabDi = window.document.querySelector('select#tabDir')
var c = 1

function proximo(){
if (num.value.length == 0){
    window.alert('Favor digite um número')
}else{
    str.push(Number(num.value))
    var dvs = document.createElement('option')
    var dvd = document.createElement('option')
    dvs.text = `${c}`
    dvd.text = `${num.value}`
    tabEs.appendChild(dvs)
    tabDi.appendChild(dvd)
}
c++
num.value = ' '
num.focus();
}

function calcular(){
    var soma = 0
    
    for(let pos in str){
    soma += str[pos]
}
c = c-1
res.innerHTML = `${soma} / ${c} = ${soma/c}`
tabDi = ' '
tabEs = ' '
str = ' '
}