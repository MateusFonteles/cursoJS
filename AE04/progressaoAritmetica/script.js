function contar(){
var jsInicio = document.getElementById('inicio')
var jsFim = document.getElementById('fim')
var jsPasso = document.getElementById('passo')
var jsContando = document.getElementById('contando')

  if (jsInicio.value.length == 0 || 
   jsFim.value.length == 0 || 
    jsPasso.value.length == 0){
    //window.alert('[Erro] Faltam dados!]')
   jsContando.innerHTML - 'Impossível contar!'
  }else{
     jsContando.innerHTML = 'Contando: <br>'
     //<br>Linguagem html, quebra de linha
     var i = Number(jsInicio.value)
     var f = Number(jsFim.value)
     var p = Number(jsPasso.value)
  if (p <=0){
    window.alert('Passo inválido, considerando passo 1')
    p = 1
  }
  if(i<f){
  for(var c = i; c <= f; c+= p){
    //contar do menor para o maior
    jsContando.innerHTML += `${c}  \u{1F914}`
    // atenção no innerHTML +-, 
    //caso se coloque somente = ele mostra só o útimo valor
    //para usar emojis, buscar codigo no site do unicode emojis list
  }
}else{
for(var c = i; c>=f; c -= p){
  //contar do maior para o menor
  jsContando.innerHTML +=`${c} \u{1F914}`
}
}
jsContando.innerHTML += `\u{1F3C1}`

}
}