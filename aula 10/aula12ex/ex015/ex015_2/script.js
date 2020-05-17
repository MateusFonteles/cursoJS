function verificar (){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtAno')
    var res = window.document.querySelector('div#resultado')
        if(fano.value.length == 0 || fano.value > ano ){
    res.innerHTML = `ERRO: conferir preenchimento de dados`
        }else{
            var idade = ano - Number(fano.value)
            var butSexo = window.document.getElementsByName('radiosex')
            var sexo = ' '
            var img = document.createElement('img')
            img.setAttribute ('id', 'foto')
                if  (butSexo[0].checked) 
                {
                    sexo = 'um <strong>homem</strong>'
                    if(idade<10){
                    img.setAttribute('src', 'mCrianca.jpeg')
                }else if (idade < 21){
                    img.setAttribute('src', 'mJovem.jpeg')
                }else if (idade < 50){
                    img.setAttribute('src', 'mAdulto.jpeg')
                }else{
                    img.setAttribute('src', 'mIdoso.jpeg')
                }
                }else{
                    sexo = 'uma <strong>mulher</strong>'
                    if(idade<10){
                        img.setAttribute('src', 'fCrianca.jpeg')
                    }else if (idade < 21){
                        img.setAttribute('src', 'fJovem.jpeg')
                    }else if (idade < 50){
                        img.setAttribute('src', 'fAdulto.jpeg')
                    }else{
                        img.setAttribute('src', 'fIdoso.jpg')
                    }
                }
    res.innerHTML = `Você é ${sexo} de <strong>${idade}</strong> anos.`
    res.appendChild(img)
        }
}