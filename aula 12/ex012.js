var agora = new Date()
var hora = agora.getHours()
hora.toFixed(2)
console.log(`Agora são exatamente ${hora} horas.`)
/*if(hora >= 5 && hora <12){
console.log('Bom dia!')
}else if(hora >= 12 && hora <18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}*/
if (hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
