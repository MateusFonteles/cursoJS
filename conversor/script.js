function converter(){
    let jsval = window.document.getElementById('val')
    let jsmed1 = window.document.getElementById('med1')
    let jsmed2 = window.document.getElementById('med2')
    let jsres = window.document.getElementById('res')

    if  (jsval.valur.length == 0){
        window.alert('ERRO')    
}else{
    var v = Number(jsval.value)    
    
        jsres.innerHTML = `${jsmed1.value[3]}`
        }
    }
