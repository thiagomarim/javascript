var img = window.document.getElementById('imagem')
function carregar() {
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //BOM DIA !
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE !
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#A36A00'
    } else {
        // BOA NOITE 
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '##2E2EFF'
    }
}