function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >=0 && hora <12){
        img.src='manha.png'
        document.body.style.background='#ff9900'
    }else if(hora >=12 && hora <18){
        img.src='tarde.png'
        document.body.style.background='#ffcc99'
    }else{
        img.src='noite.png'
        document.body.style.background='#002333'
    }
}