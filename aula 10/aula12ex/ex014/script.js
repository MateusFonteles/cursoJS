var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
// var hora = data.getHours()
var hora = 11
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12){
    img.src = 'manha.png'
    document.body.style.background = '#fed267'
} else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.background = '#cdbcc2'
}else{
    img.src = 'noite.png'
    document.body.style.background = '#6c8ba0'
}