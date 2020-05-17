//let num = [2, 5, 6, 78]
//var div = window.document.getElementById('teste')
//num.sort()
//num.push(1)
//var key = 0
//do{
  //  alert(`${num[key]}`)
    //key++
//}while (key<= 4)
//alert(`vetotr ${num[1][2]}`)
//alert(`vetor ${num[1]}`)
//console.log =(`Nosso vetor é o ${num.length}`) 

//let vetores = [8, 1, 7, 4, 2, 9]

//for(var pos=0; pos < vetores.length; pos++){
    //código tradicional de percurso para exibição do vetor
//console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
//}

//for(let pos in vetores){
    //para cada posição dentro de num...
  //  console.log(`a posição ${pos} tem o valor ${vetores[pos]}`)
//}

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2) 
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}
