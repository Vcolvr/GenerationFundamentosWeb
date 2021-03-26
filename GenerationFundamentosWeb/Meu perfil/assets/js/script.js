let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '98%'
email.style.width = '98%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.lenght < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = "Nome válido"
        txtEmail.style.color = 'yellow'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if ((assunto.value.indexOf('@') == -1 || assunto.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = 'yellow'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.lenght >= 300) {
        txtAssunto.innerHTML = "Você ultrapassou o número máximo de caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display == 'block'
    }
    else {
        txtAssunto.style.display == 'none'
        assuntoOk = true
    }
}

