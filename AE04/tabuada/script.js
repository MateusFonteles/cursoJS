function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('´Por favor digite um número')
    }else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ' '
    //forma de limpar a tabelaa  antes de solicitar novo valor
    while (c<= 10){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        //criar um value para cada option do select não é necessário no JS, 
        //mas sim em outras linguagens.
        tab.appendChild(item)

        c++
        /*Esta é a maneira de criar options dinamicamente para o select
        appendChild cria novo item.*/
    }
    }

}