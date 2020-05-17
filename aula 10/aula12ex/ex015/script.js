function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano =document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano || fano.value < 1903){
       window.alert ('[ERRO] Digite os dados novamente')
   } else {
        var fsex = document.getElementsByName('radiosex')
    //radiosex diz respeito aos dois botões radio, 
     //[0] masculino [1] feminino
        var idade = ano - Number(fano.value)
     //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ' '
     //string genero inicia vazia

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    //Colocar foto dinâmicamente, pelo JS 
    //seria como colocar no html <img id = "foto">

        if (fsex[0].checked){
            genero = "Homem"
            if  (idade < 10 ){
                //criança
                img.setAttribute ('src', 'mCrianca.jpeg')

            }else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'mJovem.jpeg')

            }else if(idade <  50 ){
                //adulto
                img.setAttribute('sec', 'mAdulto.jpeg')

            }else{
                //idoso
                img.setAttribute('src', 'mIdoso.jpeg')

            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if  (idade  < 10 ){
                //criança
                img.setAttribute('src', 'fCrianca.jpeg')

            }else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'fJovem.jpeg')

            }else if(idade <  50 ){
                //adulto
                img.setAttribute('src', 'fAdulto.jpeg')
                
            }else{
                //idoso
                img.setAttribute('src', 'fIdoso.jpg')

            }
        }
        res.style.textAlign = 'center'

    //forma de estilizar usando JS
        res.innerHTML = `<h1>Detectamos ${genero} com ${idade} anos.</h1>`
        res.appendChild(img)
        //Adigionar elemento img
}

}